<template>
    <div class="card">
        <div class="card-header">
             <div class="row">
                <div class="col-md-6">
                Thương hiệu
                </div>
                <div class="col-md-6 text-right">
                <button class="btn btn-success" @click="addBrand()" ><span class="fas fa-plus"></span>Thêm</button>
                </div>
             </div>
        </div>
        <div class="card-body">
             <el-table
                v-loading="loading"
                element-loading-text="Loading..."
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                :data="brands.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%">
                <el-table-column
                label="STT"
                type="index"
                width="50">
                </el-table-column>
                <el-table-column
                label="Thương hiệu"
                prop="name"
                >
                </el-table-column>
                <el-table-column
                label="Mô tả"
                prop="description"
                >
                </el-table-column>
                <el-table-column
                    label="Trạng Thái"
                    prop="status">
                    <template slot-scope="scope">
                        <el-button type="success" v-if="scope.row.status==1" @click="unActive(scope.row.id)">Hiển Thị</el-button>
                        <el-button type="danger" v-else @click="onActive(scope.row.id)">Ẩn</el-button>
                    </template>   
                </el-table-column>
                <el-table-column
                    fixed="right"
                    align="right"
                    width="240">
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
                        @click="editBrand(scope.row)">Edit</el-button>
                        <a-popconfirm placement="topRight" ok-text="Đồng ý" cancel-text="Không" @confirm="onRemove(scope.row)" title="Bạn có chắc chắn xóa không ?">
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
        <a-modal v-model="visibleShow" title="Title" on-ok="handleOk">
            <template slot="footer">
                <a-button key="back" @click="handleCancel">
                    Trở lại
                </a-button>
                <a-button key="submit" type="primary" :loading="isloading" @click="saveBrand">
                    Lưu
                </a-button>
            </template>
            <el-form ref="brandData" :model="brandData" label-width="120px">
                <el-table-column
                    id="myTable"
                    type="index"
                    width="50">
                </el-table-column>
                <el-form-item label="Thương hiệu">
                    <el-input v-model="brandData.name"></el-input>
                    <div class="invalid-feedback" style="display:block" v-if="errors.name">{{errors.name[0]}}</div>
                </el-form-item>
               
                <el-form-item label="Mô tả">
                    <el-input type="textarea" v-model="brandData.description"></el-input>
                    <div class="invalid-feedback" style="display:block" v-if="errors.description">{{errors.description[0]}}</div>
                </el-form-item>
                
                <el-form-item label="Trạng Thái" >
                    <el-select v-model="brandData.status" placeholder="Chọn trạng thái...">
                        <el-option :label="staData.status" v-for="(staData, index) in statusData"  :value="staData.values" :key="index"></el-option>
                    </el-select>
                    <div class="invalid-feedback" style="display:block" v-if="errors.status">{{errors.status[0]}}</div>
                </el-form-item>
                
            </el-form>
        </a-modal>
       
    </div>
</template>

<script>
import * as brandSerice from '../../services/brands_service';
import {pagination} from "../../helpers/pagination";
import {apiRequest} from "../../helpers/apiRequest"
import {buildUrl} from "../../helpers/buildUrl";

export default {

        data()
        {
            return{
                search: '',
                loading: true,
                isloading: false,
                visibleShow:false,
                title:'Thêm',
                edit:false,
                errors:{},
                brands:[],
                brandData:{
                    id:'',
                    name:'',
                    description:'',
                    status:''
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
                numberWithDots:[],
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
            this.loadBrand();
        },
        methods:{
            async loadBrand ()
            {
                apiRequest('/api/brand/brands' + buildUrl(this.params))
                    .then(res => {
                        let m=res;
                        this.brands=res.data;
                        this.numberWithDots=pagination(m.current_page,m.last_page);
                    })
                    .catch(err => {
                            console.log(err);
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
            addBrand:function()
            {
                this.edit=false;
                this.visibleShow = true;
            },
            editBrand:function(brand)
            {
                this.edit=true;
                this.visibleShow = true;
                this.brandData=brand;
            },
            onReset()
            {
                this.brandData.name="";
                this.brandData.description="";
                this.brandData.status="";
                this.errors="";
            },
            async saveBrand()
            {
                this.isloading = true;
                let brand = this.brandData;
                setTimeout(() => {
                    this.isloading = false;
                }, 2000); 
                if(this.edit===false)
                {
                    console.log("add");
                    try{
                        const response =await brandSerice.createBrand(brand);
                        this.brands.unshift(response.data);
                        this.onReset();
                        this.visibleShow = false;
                        this.flashMessage.success({
                            message: 'Thêm thương hiệu thành công!',
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
                }else
                {
                    console.log("edit");
                    try{
                        const response = await brandSerice.updateBrand(this.brandData.id,brand);
                        // this.brands.map(brand =>{
                        //     if(brand.id == response.data.id)
                        //     {
                        //         for(let key in response.data)
                        //         {
                        //             brand[key]=response.data[key];
                        //         }
                        //     }
                        // }); 
                        this.loadBrand();   
                    this.flashMessage.success({
                    message: 'Cập nhật thương hiệu thành công!',
                    time:4000
                    });
                    this.visibleShow = false;
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
                }
                }
                setTimeout(() => {
                    this.isloading = false;
                }, 2000);    
            },
            async onRemove (brand)
            {
                try{
                    const response= await brandSerice.deleteBrand(brand.id);
                    this.flashMessage.success({
                        message: response.data.message,
                        time:4000
                    });
                    this.loadBrand();
                }catch(error)
                {
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time:4000
                    });
                }
            },
            async unActive (id) {
                console.log(id);
                try{
                    let formData=new FormData();
                    formData.append('brand_id',id);
                    const response=await brandSerice.unActive(formData);
                    this.flashMessage.success({
                        message: response.data.message,
                        time:4000
                    });
                    this.loadBrand();
                }catch(error)
                {
                    this.flashMessage.error({
                        message: error.response.data.message,
                        time:4000
                    });
                }
            },
            async onActive (id) {
                try{
                    let formData=new FormData();
                    formData.append('brand_id',id);
                    const response=await brandSerice.onActive(formData);
                    this.flashMessage.success({
                        message: response.data.message,
                        time:4000
                    });
                    this.loadBrand();
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
                this.onReset();
            },
            prev()
            {
                this.loading=true;
                event.preventDefault();
                this.params.page--;
                this.loadBrand();
            },
            next()
            {
                this.loading=true;
                event.preventDefault();
                this.params.page++;
                this.loadBrand();
            },
            changePerPage(page)
            {
                this.loading=true;
                if(page==='...') return false;
                event.preventDefault();
                this.params.page=page;
                this.loadBrand();
            },
        }
}
</script>

<style scope>
._vue-flash-msg-body._vue-flash-msg-body_success{
    z-index:3;
    margin-top:67px;
}
._vue-flash-msg-body._vue-flash-msg-body_error{
    margin-top:67px;
}
._vue-flash-msg-body__text{
    color: #fff;
    font-family: cursive;
}
</style>