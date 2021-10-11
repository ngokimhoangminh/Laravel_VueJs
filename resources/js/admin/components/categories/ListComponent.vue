<template>
     <div class="card">
        <div class="card-header">
             <div class="row">
                <div class="col-md-6">
                Danh Mục
                </div>
                <div class="col-md-6 text-right">
                <button class="btn btn-success" @click="addCategory()" ><span class="fas fa-plus"></span>Thêm</button>
                </div>
             </div>
        </div>
        <div class="card-body">
            <table class="table table-bordered table-hover mb-2" id="dataTable">
                <thead>
                    <tr>
                        <th scope="col" v-for="theard in theads" v-bind:key="theard.keys">
                            {{theard.title}}                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(category,index) in categories" :key="index"> 
                        <td>{{index + 1}}</td>
                        <td>{{category.name}}</td>
                        <td><img class="table-image" :src="'assets/admin/uploads/'+category.image"></td>
                        <td>
                            <el-button
                                size="mini"
                                icon="el-icon-service"
                                data-toggle="modal" 
                                data-target="#exampleModal"
                                @click="DetailCustomer(category)">Detail</el-button>
                            <button class="btn btn-primary btn-sm" @click="updateCategory(category)"><span class="fas fa-edit"></span></button>
                            <a-popconfirm placement="topRight" ok-text="Đồng ý" cancel-text="Không" @confirm="deleteCategory(category)" title="Bạn có chắc chắn xóa dữ liệu này?">
                                <button class="btn btn-danger btn-sm"><span class="fas fa-trash"></span></button>
                            </a-popconfirm>
                        </td>
                    </tr>
                </tbody>
            </table>
            <el-pagination
                background
                layout="prev, pager, next"
                :total="parseInt(this.total)"
                :page-size="parseInt(this.params.per_page)" >
            </el-pagination>
            <!-- <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" @click="changePrev()">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item" 
                    :class="[(params.page===n)? 'active' : '']"
                    v-for="(n,index) in numberWithDots" :key="index">
                    <a class="page-link" href="#" @click="changePerPage(n)">{{n}}</a></li>
                    
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" @click="changeNext()">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav> -->
        </div>
       
        <Dialog :title="title" :dialogVisible="visibleShow" :isloading="isloading" @handleClose="handleCancel" @handleSubmit="saveCategory">
            <el-form ref="categoryData" :model="categoryData" label-width="120px">
                <el-table-column
                    id="myTable"
                    type="index"
                    width="70">
                </el-table-column>
                <el-form-item label="Danh Mục">
                    <el-input v-model="categoryData.name"></el-input>
                    <div class="invalid-feedback" style="display:block" v-if="errors.name">{{errors.name[0]}}</div>
                </el-form-item>
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-change="handleChange"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                <span v-if="url" class="notify">Hãy chọn hình ảnh update mới</span>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
                <div class="mt-2" id="preview">
                    <img class="w-50" v-if="url" :src="url" style="width: 150px!important;border-radius: 10px;"/>
                </div>
            </el-form>
        </Dialog>
        <a-modal v-model="visibleShows" title="Danh mục sản phẩm" :footer="null"  :centered="true">
            <ShowCategories ref="showEvent"  :DCategory="this.category"/>
        </a-modal>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as categoryService from '../../services/category_service';
import Dialog from '../category_blog/Dialog';
import { Message } from 'element-ui';
import ShowCategories from './ShowCategories.vue';
import {pagination} from "../../helpers/pagination";
import {apiRequest} from "../../helpers/apiRequest"
import {buildUrl} from "../../helpers/buildUrl";

export default {
    components: {
      ShowCategories,
      Dialog
    },
    data()
    {
        return {
            theads:[
                    {title: '#', keys:'id', sort: true, width:'75px'},
                    {title: 'Danh Mục', keys: 'name', sort: true},
                    {title: 'Hình Ảnh', key: 'image', sort: true},
                    {title: 'Hành Động', key: 'action', sort: true}
                ],
                title:'Thêm Danh Mục',
                isloading: false,
                visibleShow:false,
                visibleShows:false,
                dialogImageUrl: '',
                dialogVisible: false,
                url:'',
                errors:{},
                categories:[],
                categoryData:{
                    id:'',
                    name:'',
                    image:''
                },
                category:[],
                edit:false,
                numberWithDots:[],
                last_page:'',
                total:'',
                params: {
                    page: 1,
                    per_page: 5
                },
        }
    },
    created()
    {
        
    },
    mounted()
    {
        this.getCategory();
        this.loadCategory();
    },
    computed: {
        ...mapGetters(["categorys"])
    },
    methods:{
        ...mapActions(["getCategory"]),
        clickCallback (pageNum) {
            console.log(pageNum)
        },
        onReset()
        {
            this.categoryData.name="";
            this.dialogImageUrl="";
            this.url="";
            this.errors="";
        },
        loadCategory:async function()
        {
            try{
                const response=await categoryService.loadeCategory();
                this.categories=response.data.data_total;
                this.total=this.categorys.length;
            }catch(error)
            {
                 this.flashMessage.error({
                        message: 'Some error occurred, Please refresh!',
                        time:4000
                        });
            }
            // apiRequest('/api/category/categories' + buildUrl(this.params))
            //         .then(res => {
            //             let m=res.data;
            //             this.categories=res.data.data;
            //             this.numberWithDots=pagination(m.current_page,m.last_page);
            //         })
            //         .catch(err => {
            //                 console.log(err);
            //                 this.flashMessage.error({
            //                     message: 'Some error occurred, Please refresh!',
            //                     time:4000
            //                 });
            //             }  
            //         )
        },
        changePrev()
        {
            event.preventDefault();
            this.params.page--;
            this.loadCategory();
        },
        changNext()
        {
            event.preventDefault();
            this.params.page++;
            this.loadCategory();
        },
        changePerPage(page)
        {
            if(page==='...') return false;
            event.preventDefault();
            this.params.page=page;
            console.log(this.params);
            this.loadCategory();
        },
        addCategory:function()
        {
            this.onReset();
            this.edit=false;
            this.visibleShow = true;
        },
        updateCategory:function(category)
        {
            this.visibleShow = true;
            this.edit=true;
            this.title="Cập Nhật Danh Mục";
            this.categoryData=category;
            this.url=`assets/admin/uploads/${category.image}`;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleChange(file, fileList) {
            this.dialogImageUrl = file;
            if(this.edit)
            {
                this.url=file.url;
            }
            console.log(this.dialogImageUrl);
        },
        async saveCategory()
        {
            this.isloading = true;
            if(this.edit===false)
            {
                console.log("add");
                let formData=new FormData();
                formData.append('name',this.categoryData.name);
                if(this.dialogImageUrl)
                {
                    formData.append('image',this.dialogImageUrl.raw);
                }
                try{
                    const response =await categoryService.createCategory(formData);
                    //this.categories.unshift(response.data);
                    this.loadCategory();
                    this.onReset();
                    this.visibleShow=false;
                    Message.success('Thêm danh mục thành công');

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
                }finally
                {
                    this.isloading = false;
                }
            }else
            {
                console.log("edit");
                 try{
                    let formData=new FormData();
                    formData.append('name',this.categoryData.name);
                    // if(document.getElementById('image').files[0])
                    // {
                    //     formData.append('image',document.getElementById('image').files[0]);
                    // }
                    if(this.dialogImageUrl)
                    {
                        formData.append('image',this.dialogImageUrl.raw);
                    }
                    formData.append('_method','put');
                    const response = await categoryService.updateCategory(this.categoryData.id,formData);
                    this.loadCategory();
                    this.visibleShow=false;
                    Message.success('Cập nhật danh mục thành công!');
                    this.onReset();  
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
                }finally
                {
                    //this.visibleShow=false;
                    this.isloading = false;
                }
            }
            
        },
        async deleteCategory(category)
        {
            try{
                const response= await categoryService.deleteCategory(category.id);
                Message.success(response.data.message);
                this.loadCategory();
            }catch(error)
            {
                this.flashMessage.error({
                message: error.response.data.message,
                time:4000
                });
            }
            
        },
        handleCancel() {
            this.visibleShow = false;
        },
        DetailCustomer:function (category)
        {
            this.visibleShows = true;
            this.category=category;
            console.log(category);
        },
        
    }
}
</script>
<style scoped>
#preview{
    text-align: center;
}
.notify{
    color:red;
    font-style: italic;
}
</style>