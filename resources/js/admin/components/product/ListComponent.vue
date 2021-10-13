<template>
     <div class="card">
        <div class="card-header">
             <div class="row">
                <div class="col-md-9">
                Sản Phẩm
                </div>
                <div class="col-md-3 text-right d-flex">
                    <router-link 
                    class="nav-link"
                    tag="a"
                    to="/home/add-products"><button class="btn btn-success"><span class="fas fa-plus"></span>Thêm</button> 
                    </router-link>
                    <button class="btn btn-info btn-sm" style="height: 35px;margin-top: 9px;" @click="showFilter=!showFilter">F</button>
                </div>
                
             </div>
        </div>
        <div class="card-body">
            <div class="filter" v-if="showFilter">
                <div class="form-group d-flex">
                    <div class="filter_item mr-3">
                        <span class="mr-2">Danh Mục:</span>
                        <el-select 
                            v-model="filters.category_id" 
                            id="category_id" 
                            placeholder="Chọn danh mục..."
                            :default-value="filters.category_id" 
                            @change="handleChange">
                            <el-option value="0" label="Tất cả"></el-option>
                            <el-option :label="category.name" v-for="(category, index) in categorys"  :value="category.id" :key="index"></el-option>
                        </el-select>
                    </div>
                    <div class="filter_item mr-3">
                        <span class="mr-2">Thương Hiệu:</span>
                        <el-select 
                            v-model="filters.brand_id" 
                            id="brand_id" 
                            placeholder="Chọn thương hiệu..."
                            :default-value="filters.brand_id" 
                            @change="handleChange">
                            <el-option value="0" label="Tất cả"></el-option>
                            <el-option :label="brand.name" v-for="(brand, index) in brands"  :value="brand.id" :key="index"></el-option>
                        </el-select>
                    </div>
                </div>
            </div>
             <el-table
                v-loading="loading"
                element-loading-text="Loading..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                :data="product.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
                <el-table-column
                fixed
                label="Sản Phẩm"
                width="140"
                prop="name">
                </el-table-column>
                <el-table-column
                label="Danh Mục"
                prop="category_id"
                width="140">
                <template slot-scope="scope">
                    {{findCategory(scope.row.category_id)}}
                </template>     
                </el-table-column>
                <el-table-column
                label="Thương Hiệu"
                prop="brand_id"
                width="140">
                    <template slot-scope="scope">
                        {{findBrand(scope.row.brand_id)}}
                    </template>     
                </el-table-column>
                <el-table-column
                    label="Mô Tả"
                    prop="product_des"
                    width="180">
                    <template slot-scope="scope">
                        <p class="description" v-html="scope.row.product_des"></p>
                    </template>  
                </el-table-column>
                <el-table-column
                    label="Giá Gốc"
                    prop="price"
                    width="110">
                    <template slot-scope="scope">
                        <p>{{formatPrice(scope.row.price)}}&nbsp;VND</p>
                    </template>  
                </el-table-column>
                <el-table-column
                    label="Giá Giảm"
                    prop="discount"
                    width="110">
                    <template slot-scope="scope">
                        <p>{{formatPrice(scope.row.discount)}}&nbsp;VND</p>
                    </template>  
                </el-table-column>
                <el-table-column
                    label="Trạng Thái"
                    prop="product_status"
                    width="140"
                    :formatter="formatter">
                    <template slot-scope="scope">
                        <el-button type="success" v-if="scope.row.product_status==1" @click="unactive(scope.row.id)">Hiển Thị</el-button>
                        <el-button type="danger" v-else @click="active(scope.row.id)">Ẩn</el-button>
                    </template>   
                </el-table-column>
                <el-table-column
                    label="Hình Ảnh"
                    width="140">
                     <template slot-scope="scope">
                        <el-image
                        style="width: 100px; height: 100px"
                        :src="'assets/admin/uploads/'+scope.row.image"
                        ></el-image>
                    </template>
                </el-table-column>
                <el-table-column
                    fixed="right"
                    align="right"
                    width="260">
                    <template slot="header" slot-scope="scope">
                        <el-input
                        v-model="search"
                        size="mini"
                        placeholder="Type to search"/>
                    </template>
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        icon="el-icon-edit"
                        @click="$router.push('/home/products/' + scope.row.id + '/edit')"
                       >Edit</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        icon="el-icon-delete-solid"
                        @click="handleDelete( scope.row)">Delete</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" @click="prev()">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item" 
                    :class="[(params.page===n)? 'active' : '']"
                    v-for="(n,index) in numberWithDots" :key="index">
                    <a class="page-link" href="#" @click="changePerPage(n)">{{n}}</a></li>
                    
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" @click="next()">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters,mapMutations } from "vuex";
import { Message } from 'element-ui';
import * as productService from '../../services/product_service';
import {pagination} from "../../helpers/pagination";
import {apiRequest} from "../../helpers/apiRequest"
import {buildUrl} from "../../helpers/buildUrl";

export default {
    data()
    {
        return {
            productId:'',
            productData: [],
            productData_Clone: [],
            productData_Total: [],
            search: '',
            loading: true,
            numberWithDots:[],
            showFilter:false,
            filters:{
                category_id:'0',
                brand_id:'0'
            },
            total:'',
            params: {
                page: 1,
                per_page: 5
            }
      }   
    },
    created()
    {
        
    },
    mounted()
    {
        this.loadProduct();
        this.getCategory();
        this.getBrand();
    },
    computed: {
        ...mapGetters(["categorys","brands","product"])
    },
    methods:{
        ...mapActions(["getCategory","getBrand","getProduct","deleteProduct","unActiveProduct","activeProduct"]),
        ...mapMutations(['FILTER_PRODUCT']),
        async loadProduct()
        {
            try{
               this.getProduct();
               console.log("cats",this.categorys);
            }catch(error)
            {
                this.flashMessage.error({
                    message: 'Some error occurred, Please refresh!',
                    time:4000
                });
            }finally
            {
               this.loading=false;
            }
            // try{
            //     const response=await productService.loadeProduct();
            //     this.productData=response.data.data_total;
            //     this.total=this.productData.length;
            //     console.log('aa',this.productData);
            // }catch(error)
            // {
            //      this.flashMessage.error({
            //             message: 'Some error occurred, Please refresh!',
            //             time:4000
            //             });
            // }finally{
            //     this.loading=false;
            // }
            //  apiRequest('/api/product/products' + buildUrl(this.params))
            //         .then(res => {
            //             let m=res.data;
            //             console.log(m);
            //             this.productData=res.data.data;
            //             this.productData_Clone=res.data.data;
            //             this.productData_Total=res.data_total;
            //             this.numberWithDots=pagination(m.current_page,m.last_page);
            //         })
            //         .catch(err => {
            //             console.log(err);
            //             this.flashMessage.error({
            //                     message: 'Some error occurred, Please refresh!',
            //                     time:4000
            //                 });
            //             })
            //         .finally(()=>{
            //             this.loading=false;
            //         })
        },
        handleEdit(index, row) {
            console.log(row.name);
        },
        async handleDelete(row) {
            console.log( row);
           if(!window.confirm(`Are you sure want to delete ${row.name}`))
            {
                return ;
            }
            try{
                const response= await productService.deleteProduct(row.id);
                this.deleteProduct(row.id);
                this.flashMessage.success({
                    message:response.data.message,
                    time:4000
                });
                this.loadProduct();
            }catch(error)
            {
                this.flashMessage.error({
                message: error.response.data.message,
                time:4000
                });
            }
        },
        async unactive (id) {
            try{
                let formData=new FormData();
                formData.append('product_id',id);
                const response = await productService.unactive(formData);
                this.unActiveProduct(id);
                this.flashMessage.success({
                    message: response.data.message,
                    time:4000
                });
            }catch(error)
            {
                this.flashMessage.error({
                    message: error.response.data.message,
                    time:4000
                });
            }
        },
        async active(id) {
            try{
                let formData=new FormData();
                formData.append('product_id',id);
                const response=await productService.active(formData);
                this.activeProduct(id);
                this.flashMessage.success({
                    message: response.data.message,
                    time:4000
                });
            }catch(error)
            {
                this.flashMessage.error({
                message: error.response.data.message,
                time:4000
                });
            }
        },
        handleChange(){
            this.FILTER_PRODUCT({
                'category_id':this.filters.category_id,
                'brand_id':this.filters.brand_id
                }); 
        },
        prev()
        {
            event.preventDefault();
            this.params.page--;
            this.loadProduct();
        },
        next()
        {
            event.preventDefault();
            this.params.page++;
            this.loadProduct();
        },
        changePerPage(page)
        {
            this.loading=true;
            if(page==='...') return false;
            event.preventDefault();
            this.params.page=page;
            console.log(this.params);
            this.loadProduct();
        },
        formatter(row, column) {
            if(row.product_status==0)
            {
                return "Ẩn";
            }else
            {
                return "Hiển Thị";
            }
        },
        findCategory(category_id)
        {
            let category_name='';
            this.categorys.forEach(category =>{ 
                if(category.id===category_id)
                {
                    category_name = category.name;
                }
            });
            return category_name;
        },
        findBrand(brand_id)
        {
            let brand_name='';
            this.brands.forEach(brand =>{
                if(brand.id===brand_id)
                {
                    brand_name = brand.name;
                }
            });
            return brand_name;
        },
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}
</script>
<style scoped>

</style>