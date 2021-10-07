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
            </nav> -->
        </div>
        <b-modal ref="newCategory" hide-footer title="Quản Lý Danh Mục">
            <div class="d-block ">
               <form v-on:submit.prevent="saveCategory">
                    <div class="form-group">
                        <label for="name">Danh Mục </label>
                        <input type="text" id="name" class="form-control" 
                        placeholder="Nhập danh mục..." 
                        v-model="categoryData.name" >
                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="image">Chọn Hình Ảnh </label>
                        <input type="file" ref="fileupload" @change="onFileChange" class="form-control" id="image" >
                        <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                    </div>
                    <div class="mt-2" id="preview">
                            <img class="w-50" v-if="url" :src="url"/>
                        </div>
                    <hr>
                    <div class="text-right d-flex">
                        <b-button class="" variant="outline-danger"  @click="hideNewCategoryModal">Đóng</b-button>
                        <button type="submit" class="btn btn-primary"><span class="fas fa-check"></span>{{this.title}} </button>
                    </div>

                </form>
                
            </div>
        </b-modal>
        <a-modal v-model="visibleShow" title="Danh mục sản phẩm" :footer="null"  :centered="true">
            <ShowCategories ref="showEvent"  :DCategory="this.category"/>
        </a-modal>
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import * as categoryService from '../../services/category_service';
import ShowCategories from './ShowCategories.vue';
import {pagination} from "../../helpers/pagination";
import {apiRequest} from "../../helpers/apiRequest"
import {buildUrl} from "../../helpers/buildUrl";
export default {
    components: {
      ShowCategories
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
                url:'',
                errors:{},
                categories:[],
                categoryData:{
                    name:'',
                    image:''
                },
                category:[],
                columns: [
                        {label: 'id', field: 'id'}, 
                        {label: 'Name', field: 'name'},
                        {label: 'Hình ảnh', field: 'image'}
                    ],
                moreExits:false,
                title:'Thêm',
                edit:false,
                visibleShow:false,
                model:
                {
                    data:[]
                },
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
        onFileChange:function(e)
        {
            
            // this.categoryData.image=document.getElementById('image').files[0];
            // console.log(this.categoryData.image);
            const file=e.target.files[0];
            this.url=URL.createObjectURL(file);
        },
        hideNewCategoryModal()
        {
            this.$refs.newCategory.hide();
            this.Reset();
        },
        showNewCategoryModal()
        {
            this.$refs.newCategory.show();
        },
        Reset()
        {
            this.categoryData.name="";
            this.$refs.fileupload.value="";
            this.url="";
        },
        loadCategory:async function()
        {
            try{
                const response=await categoryService.loadeCategory();
                this.categories=response.data.data_total;
                this.total=this.categorys.length;
                console.log(this.categorys);
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
        prev()
        {
            event.preventDefault();
            this.params.page--;
            this.loadCategory();
        },
        next()
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
            this.edit=false;
            this.title="Thêm";
            this.showNewCategoryModal();
        },
        saveCategory:async function()
        {
            if(this.edit===false)
            {
                console.log("add");
                let formData=new FormData();
                formData.append('name',this.categoryData.name);
                if(document.getElementById('image').files[0])
                {
                    formData.append('image',document.getElementById('image').files[0]);
                }
                try{
                    const response =await categoryService.createCategory(formData);
                    this.categories.unshift(response.data);
                    this.hideNewCategoryModal();
                    this.Reset();
                    this.flashMessage.success({
                    message: 'Thêm danh mục thành công!',
                    time:4000
                    });
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

                }
            }else
            {
                console.log("edit");
                 try{
                    let formData=new FormData();
                    formData.append('name',this.categoryData.name);
                    
                    if(document.getElementById('image').files[0])
                    {
                        formData.append('image',document.getElementById('image').files[0]);
                    }
                    formData.append('_method','put');
                    const response = await categoryService.updateCategory(this.categoryData.id,formData);

                    this.categories.map(category =>{
                        if(category.id == response.data.id)
                        {
                            for(let key in response.data)
                            {
                                category[key]=response.data[key];
                            }
                        }
                    });    
                    this.flashMessage.success({
                    message: 'Cập nhật danh mục thành công!',
                    time:5000
                    });

                    //this.loadCategory();
                    this.hideNewCategoryModal();
                    this.Reset();

                    
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
            }
            
        },
        deleteCategory:async function(category)
        {
            try{
                const response= await categoryService.deleteCategory(category.id);
                this.flashMessage.success({
                message: 'Xóa danh mục thành công!',
                time:4000
                });
                this.loadCategory();
            }catch(error)
            {
                this.flashMessage.error({
                message: error.response.data.message,
                time:4000
                });
            }
            
        },
        updateCategory:function(category)
        {
            this.edit=true;
            this.title="Cập Nhật";
            this.showNewCategoryModal();
            this.categoryData.id=category.id;
            this.categoryData.name=category.name;
            this.url=`assets/admin/uploads/${category.image}`;
        },
        DetailCustomer:function (category)
        {
            this.visibleShow = true;
            this.category=category;
            console.log(category);
        }

    }
}
</script>
<style scoped>
</style>