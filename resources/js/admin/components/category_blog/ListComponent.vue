<template>
    <div class="card">
        <div class="card-header">
             <div class="row">
                <div class="col-md-6">
                    Danh Mục Bài Viết
                </div>
                <div class="col-md-6 text-right">
                <button class="btn btn-success" @click="addCategoryBlog()" ><span class="fas fa-plus"></span>Thêm</button>
                </div>
             </div>
        </div>
        <div class="card-body">
             <el-table
                v-loading="loading"
                element-loading-text="Loading..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                :data="categoryBlogs.filter(data => !search || data.category_blog_name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
                <el-table-column
                label="STT"
                type="index"
                width="50">
                </el-table-column>
                <el-table-column
                label="Danh Mục"
                prop="category_blog_name"
                >
                </el-table-column>
                <el-table-column
                label="Slug"
                prop="category_blog_slug"
                >
                </el-table-column>
                <el-table-column
                label="Mô tả"
                prop="category_blog_des"
                >
                </el-table-column>
                <el-table-column
                    fixed="right"
                    align="right"
                    width="250">
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
                        data-toggle="modal" 
                        data-target="#exampleModal"
                        @click="EditCategoryBlog(scope.row)">Edit</el-button>
                        <a-popconfirm placement="topRight" ok-text="Đồng ý" cancel-text="Không" @confirm="Remove(scope.row)" title="Bạn có chắc chắn xóa không ?">
                            <el-button
                                size="mini"
                                type="danger"
                                icon="el-icon-delete-solid">Delete
                            </el-button>
                        </a-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="card-footer">
            <el-row type="flex" class="row-bg">
                <nav aria-label="Page navigation example mt-3">
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
            </el-row>
        </div>
        <Dialog :title="title" :dialogVisible="visibleShow" :isloading="isloading" @handleClose="handleCancel" @handleSubmit="saveCategoryBlog">
            <el-form ref="form" :model="categoryBlogData" label-width="120px">
                <el-table-column
                    id="myTable"
                    type="index"
                    width="70">
                </el-table-column>
                <el-form-item label="Danh Mục Blog">
                    <el-input v-model="categoryBlogData.category_blog_name"></el-input>
                    <div class="invalid-feedback" style="display:block" v-if="errors.category_blog_name">{{errors.category_blog_name[0]}}</div>
                </el-form-item>
                <el-form-item label="Slug">
                    <el-input v-model="categoryBlogData.category_blog_slug"></el-input>
                    <div class="invalid-feedback" style="display:block" v-if="errors.category_blog_slug">{{errors.category_blog_slug[0]}}</div>
                </el-form-item>
                <el-form-item label="Mô tả">
                    <el-input type="textarea" v-model="categoryBlogData.category_blog_des"></el-input>
                    <div class="invalid-feedback" style="display:block" v-if="errors.category_blog_des">{{errors.category_blog_des[0]}}</div>
                </el-form-item>
            </el-form>
        </Dialog>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import * as categoryBlogSerice from '../../services/category_blog_service';
import {pagination} from "../../helpers/pagination";
import {apiRequest} from "../../helpers/apiRequest"
import {buildUrl} from "../../helpers/buildUrl";
import Dialog from './Dialog';
export default {
    components:{
        Dialog
    },
    data()
    {
        return{
            search: '',
            loading: true,
            isloading: false,
            visibleShow:false,
            title:'Thêm danh mục bài viết',
            edit:false,
            errors:{},
            categoryBlogs:[],
            IDCatBlog:0,
            numberWithDots:[],
            params: {
                page: 1,
                per_page: 5
            },
            categoryBlogData:{
                id:'',
                category_blog_name:'',
                category_blog_slug:'',
                category_blog_des:''
            },
            errors:{},
        }
    },
    created()
    {

    },
    mounted()
    {
        this.loadCategoryBlog();
    },
    computed: {
    },
    methods:{
        loadCategoryBlog:function()
        {
            apiRequest('/api/categoryBlog/categoryBlog' + buildUrl(this.params))
            .then(res => {
                let m=res;
                this.categoryBlogs=res.data;
                this.numberWithDots=pagination(m.current_page,m.last_page);
            })
            .catch(err => {
                    this.flashMessage.error({
                        message: 'Some error occurred, Please refresh!',
                        time:4000
                    });
                }
            )
            .finally(()=>{
                this.loading=false;
            })

        },
        addCategoryBlog()
        {
            this.edit=false;
            this.visibleShow = true;
        },
        EditCategoryBlog(category)
        {
            this.visibleShow = true;
            this.edit=true;
            this.title="Cập nhật danh mục bài viết";
            this.categoryBlogData.id=category.id;
            this.categoryBlogData.category_blog_name=category.category_blog_name;
            this.categoryBlogData.category_blog_slug=category.category_blog_slug;
            this.categoryBlogData.category_blog_des=category.category_blog_des;
        },
        saveCategoryBlog: async function()
        {
            this.isloading = true;
            let categoryBlog = this.categoryBlogData;
            setTimeout(() => {
                this.isloading = false;
            }, 2000); 
            if(this.edit)
            {
                console.log("edit");
                try{
                    const response = await categoryBlogSerice.updateCategoryBlog(this.categoryBlogData.id,categoryBlog);
                    this.visibleShow = false;   
                    this.loadCategoryBlog();
                    this.flashMessage.success({
                        message: 'Cập nhật danh mục bài viết thành công!',
                        time:3000
                    });
                    this.visibleShow = false;
                    this.reset(); 
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

                console.log("add");
                try{
                    const response =await categoryBlogSerice.createCategoryBlog(categoryBlog);
                    this.categoryBlogs.unshift(response.data);
                    this.reset();
                    this.visibleShow = false;
                    this.flashMessage.success({
                        message: 'Thêm danh mục bài viết thành công!',
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
                }
            }
        },
        Remove:async function(categoryBlog)
            {
                try{
                    const response= await categoryBlogSerice.deleteCategoryBlog(categoryBlog.id);
                    this.flashMessage.success({
                    message:response.data.message,
                    time:4000
                    });
                    this.loadCategoryBlog();
                }catch(error)
                {
                    this.flashMessage.error({
                    message: error.response.data.message,
                    time:4000
                    });
                }
            },
        handleCancel(e) {
            this.visibleShow = false;
            this.reset(); 
        },
        reset()
        {
            this.categoryBlogData.category_blog_name="";
            this.categoryBlogData.category_blog_slug="";
            this.categoryBlogData.category_blog_des="";
            this.errors="";
        },
    }
}
    </script>

<style>

</style>