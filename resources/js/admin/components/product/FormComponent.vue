<template>
    <div class="card">
        <div class="card-header">
            {{title}}
        </div>
        <div class="card-body">
            <el-form ref="form" :model="productData" label-width="120px">
                <el-table-column
                    id="myTable"
                    type="index"
                    width="50">
                </el-table-column>
                <el-form-item label="Sản Phẩm">
                    <el-input v-model="productData.name"></el-input>
                    <div class="invalid-feedback" style="display:block" v-if="errors.name">{{errors.name[0]}}</div>
                </el-form-item>
                <el-form-item label="Danh Mục" >
                    <el-select v-model="productData.category_id" id="category_id" placeholder="Chọn danh mục...">
                        <el-option :label="category.name" style="display:block" v-for="(category, index) in categorys"  :value="category.id" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Thương Hiệu" >
                    <el-select v-model="productData.brand_id" id="brand_id" placeholder="Chọn thương hiệu...">
                        <el-option :label="brand.name" style="display:block" v-for="(brand, index) in brands"  :value="brand.id" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="Mô Tả">
                   <ckeditor v-model="productData.product_des" :config="editorConfig"></ckeditor>
                    <el-input type="textarea" v-model="productData.product_des"></el-input>
                    <div class="invalid-feedback"  style="display:block" v-if="errors.product_des">{{errors.product_des[0]}}</div>
                </el-form-item>
                <el-form-item label="Giá Gốc">
                    <el-input v-model="productData.price"></el-input>
                </el-form-item>
                <el-form-item label="Giá Giảm">
                    <el-input v-model="productData.discount"></el-input>
                </el-form-item>
                 
                <el-form-item label="Hình Ảnh">
                    <input type="file"  ref="fileupload" @change="onFileChange" class="form-control" id="image" >
                    <div class="invalid-feedback" style="display:block" v-if="errors.image">{{errors.image[0]}}</div>
                    <img alt="example" style="width:20%" class="mt-2" v-if="previewImage" :src="previewImage" /> 
                </el-form-item>
                <el-form-item label="Trạng Thái" >
                    <el-select v-model="productData.product_status" placeholder="Chọn trạng thái...">
                        <el-option :label="staData.status" v-for="(staData, index) in statusData"  :value="staData.values" :key="index"></el-option>
                    </el-select>
                    <div class="invalid-feedback" style="display:block" v-if="errors.product_status">{{errors.product_status[0]}}</div>
                </el-form-item>
                <el-form-item style="display:flex;">
                    <el-button type="primary" icon="el-icon-check" @click="onSave()">Lưu</el-button>
                    <el-button type="danger" icon="el-icon-back" @click="onCancel()">Trở Lại</el-button>
                </el-form-item>
            </el-form>   
        </div>
        
    </div>
</template>     
<script>

import { mapActions,mapGetters } from 'vuex';
import * as productService from '../../services/product_service';

export default {
    data() {
            return {
                title: 'Thêm Sản Phẩm',
                productData: {
                    id:'',
                    category_id: '',
                    brand_id: '',
                    name: '',
                    image: '',
                    product_des: '',
                    price:'',
                    discount:'',
                    product_status:''
                },
                statusData:[
                    {
                        values:1,
                        status:"Hiển Thị"
                    },
                    {
                        values:0,
                        status:"Ẩn"
                    }
                ],
               
                editorConfig: {
                    // The configuration of the editor.
                },
                previewImage:'',
                errors: {}
            }
        },
        created()
        {
            if(this.$route.meta.mode === 'edit') {
                this.title = 'Cập nhật sản phẩm';
                this.fetchData();
            }
        },
        mounted(){
            this.getCategory();
            this.getBrand();
        },
        computed: {
        ...mapGetters(["categorys","brands"])
        },
        methods: {
            ...mapActions(['getCategory','getBrand','createProduct','updateProducts']),
            async fetchData() {
               try{
                    const response=await productService.editProduct(this.$route.params.id);
                    this.productData=response.data.form;
                    this.previewImage=`assets/admin/uploads/${response.data.form.image}`;
                }catch(error)
                {
                    this.flashMessage.error({
                            message: 'Some error occurred, Please refresh!',
                            time:40000
                            });
                }
            },
            onFileChange:function(e)
            {
                const file=e.target.files[0];
                this.previewImage=URL.createObjectURL(file);
            },
            async onSave ()
            {
                    let form = this.productData;
                    if(form.id!=='')
                    {
                        console.log('edit');
                        
                        try{
                            let formData=new FormData();
                            formData.append('id',this.productData.id);
                            formData.append('category_id',this.productData.category_id);
                            formData.append('brand_id',this.productData.brand_id);
                            formData.append('name',this.productData.name);
                            if(document.getElementById('image').files[0])
                            {
                                formData.append('image',document.getElementById('image').files[0]);
                            }
                            formData.append('product_des',this.productData.product_des);
                            formData.append('price',this.productData.price);
                            formData.append('discount',this.productData.discount);
                            formData.append('product_status',this.productData.product_status);
                            formData.append("_method", "put");

                            const response =await productService.updateProduct(this.productData.id,formData);
                           
                            this.updateProducts({'id':this.productData.id,'formdata':formData});
                            
                            this.flashMessage.success({
                                message: 'Cập nhật sản phẩm thành công!',
                                time:4000
                            });
                            
                            this.onReset();
                            this.$router.push('/home/products');
                            
                        }catch(error)
                        {
                            switch(error.response.status)
                            {
                                case 422:
                                    this.errors=error.response.data.errors;
                                default:
                                    this.flashMessage.error({
                                    message: 'Some error occurred, Please try agian!',
                                    time:4000
                                    });
                                    break;
                            }
                        }
                    }else
                    {
                        console.log('add');
                        let formData=new FormData();
                        formData.append('category_id',this.productData.category_id);
                        formData.append('brand_id',this.productData.brand_id);
                        formData.append('name',this.productData.name);
                        if(document.getElementById('image').files[0])
                        {
                            formData.append('image',document.getElementById('image').files[0]);
                        }
                        formData.append('product_des',this.productData.product_des);
                        formData.append('price',this.productData.price);
                        formData.append('discount',this.productData.discount);
                        formData.append('product_status',this.productData.product_status);
                        try{

                            this.createProduct(formData);
                            const response =await productService.createProduct(formData);
                            
                            this.flashMessage.success({
                                message: 'Thêm sản phẩm thành công!',
                                time:4000
                            });
                            this.$router.push('/home/products');
                            this.onReset();
                            
                        }catch(error)
                        {
                            console.log("err",error.response);
                            switch(error.response.status)
                            {
                                case 422:
                                    this.errors=error.response.data.errors;
                                default:
                                    this.flashMessage.error({
                                        message: 'Some error occurred, Please try agian!',
                                        time:4000
                                    });
                                    break;
                            }
                        }
                    }
                    
            },
            onCancel()
            {
                this.$router.push('/home/products');
                this.onReset();
            },
            onReset()
            {
                this.productData.name="";
                this.productData.category_id="";
                this.productData.product_des="";
                this.$refs.fileupload.value="";
                this.url="";
                this.errors="";
            }
        
    }

}
</script>
<style scoped>

</style>