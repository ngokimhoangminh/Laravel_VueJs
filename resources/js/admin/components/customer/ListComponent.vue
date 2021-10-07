<template>
    <div class="card">
        <div class="card-header">
             <div class="row">
                <div class="col-md-6">
                Danh Sách Khách Hàng
                </div>
                <div class="col-md-6 text-right">
                <button class="btn btn-success" data-toggle="modal" data-target="#exampleModal">Thêm</button>
                 <button class="btn btn-info btn-sm" @click="showFilter=!showFilter">F</button>
                </div>
             </div>
        </div>
        <!-- <template v-if="isLoading">
            <div class="panel-body">
               <b-progress :value="value" :max="max" show-progress animated></b-progress>
            </div>
        </template> -->
        <template>
            <div v-if="isError">
                <div class="panel-body">
                    <h2> Data not found! Please contact admin...</h2>
                </div>
            </div>
            <div v-else>
                <el-card class="box-card">
                    <div class="filter d-flex" v-if="showFilter">
                        <div class="filter-column col-md-3">
                            <div class="form-group">
                                <select v-model="param.search_column" class="form-control">
                                    <option v-for="(column,index) in filters" :key="index" :value="column" >{{column}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="filter-operator col-md-3" >
                            <div class="form-group">
                                <select v-model="param.search_operator" class="form-control">
                                    <option v-for="(operator,index) in operators" :key="index" :value="operator" >{{operator}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="filter-input col-md-3">
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="param.search_query_1"/>
                            </div>
                        </div>
                        <div class="filter-input col-md-3" v-if="param.search_operator === 'BETWEEN'">
                            <div class="form-group">
                                <input type="text" class="form-control" v-model="param.search_query_2"/>
                            </div>
                        </div>
                        <div class="btn">
                            <button class="btn btn-primary">Lọc</button>
                        </div>
                    </div>
                    <div class="">
                        <!-- <table class="table table-responsive table-bordered table-hover mb-2" id="myTable">
                            <thead>
                                <tr>
                                    <th scope="col" v-for="theard in theads" v-bind:key="theard.keys">
                                        {{theard.title}}                            
                                    </th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item) in customers" v-bind:key="item.id_customer">
                                    <th style="color: red" scope="row">{{item.id_customer}}</th>
                                    <td style="color: blue" @click="$router.push('/home/customer/show/' + item.id_customer)">
                                        {{item.name_customer}}</td>
                                    <td>{{item.phone_customer}}</td>
                                    <td>{{item.address_customer}}</td>
                                    <td>{{item.email_customer}}</td>
                                    <td>{{item.city_customer}}</td>
                                    <td><img class="w-50" :src="'assets/admin/uploads/'+item.image_customer" ></td>
                                    <td>
                                        <button class="btn btn-warning" data-toggle="modal" data-target="#exampleModal" @click="EditCustomer(item)">Edit</button>
                                        <button class="btn btn-danger" @click="Remove(item.id_customer)">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table> -->
                         <el-table
                            v-loading="loading"
                            element-loading-text="Loading..."
                            element-loading-spinner="el-icon-loading"
                            element-loading-background="rgba(0, 0, 0, 0.8)"
                            :data="customers.filter(data => !search || data.name_customer.toLowerCase().includes(search.toLowerCase()))"
                            style="width: 100%">
                            <el-table-column
                            label="STT"
                            type="index"
                            width="50">
                            </el-table-column>
                            <el-table-column
                            label="Khách Hàng"
                            prop="name_customer"
                            >
                            <template slot-scope="scope">
                                <a @click="$router.push('/home/customer/show/' + scope.row.id_customer)">{{scope.row.name_customer}}</a>
                            </template>
                            </el-table-column>
                            <el-table-column
                                label="Số Điện Thoại"
                                prop="phone_customer"> 
                            </el-table-column>
                            <el-table-column
                                label="Địa Chỉ"
                                prop="address_customer"> 
                            </el-table-column>
                            <el-table-column
                                label="Email"
                                prop="email_customer"> 
                            </el-table-column>
                            <el-table-column
                                label="Hình Ảnh">
                                <template slot-scope="scope">
                                    <el-image
                                    style="width: 80px; height: 80px; border-radius:50%;"
                                    :src="'assets/admin/uploads/'+scope.row.image_customer"
                                    ></el-image>
                                </template>
                            </el-table-column>
                            <el-table-column
                                fixed="right"
                                align="right"
                                width="170">
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
                                    @click="EditCustomer(scope.row)">Edit</el-button>
                                    <a-popconfirm placement="topRight" ok-text="Đồng ý" cancel-text="Không" @confirm="Remove(scope.row.id_customer)" title="Bạn có chắc chắn xóa không ?">
                                        <el-button
                                            size="mini"
                                            type="danger"
                                            icon="el-icon-delete-solid">Delete
                                        </el-button>
                                    </a-popconfirm>  
                                </template>
                            </el-table-column>
                        </el-table>
                        <!-- <div class="fetching" v-if="isFetching">
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 100%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">Fetching...</div>
                            </div>
                        </div> -->
                    </div>
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
                        <!-- <el-pagination
                            :page-size="20"
                            :pager-count="parseInt(this.last_page)"
                            background
                            layout="prev, pager, next">
                        </el-pagination> -->
                    </el-row>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">{{this.title}}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form enctype="multipart/form-data">
                                    <div type="form-group">
                                        <label>Họ Và Tên</label>
                                        <input type="text" class="form-control" placeholder="Nhập họ tên..." v-model="customer.name_customer">
                                    </div>
                                    <div type="form-group">
                                        <label>Số Điện Thoại</label>
                                        <input type="text" class="form-control" placeholder="Nhập số điện thoại..." v-model="customer.phone_customer">
                                    </div>
                                    <div type="form-group">
                                        <label>Địa Chỉ</label>
                                        <input type="text" class="form-control" placeholder="Nhập địa chỉ..." v-model="customer.address_customer">
                                    </div>
                                    <div type="form-group">
                                        <label>Email</label>
                                        <input type="text" class="form-control" placeholder="Nhập email..." v-model="customer.email_customer">
                                    </div>
                                    <div type="form-group">
                                        <label>Thành Phố</label>
                                        <input type="text" class="form-control" placeholder="Nhập địa chỉ..." v-model="customer.city_customer">
                                    </div>
                                    <div type="form-group">
                                        <label>Hình Ảnh</label>
                                        <input type="file" ref="fileupload" @change="onFileChange" class="form-control-file" id="image" >
                                    </div>
                                    <div class="mt-2" id="preview">
                                        <img class="w-50" v-if="url" :src="url"/>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="Reset()">Đóng</button>
                                <button type="submit" class="btn btn-primary" data-dismiss="modal" @click="saveCustomer()"><i class="fa fa-refresh fa-spin" v-if="isLoading"></i>Lưu</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </el-card>
                
            </div>
        </template>

        
    </div>
</template>
<script>
import {deleteCustomer,createCustomer,updateCustomer} from "../../api/customer";
import {pagination} from "../../helpers/pagination";
import {apiRequest} from "../../helpers/apiRequest"
import {buildUrl} from "../../helpers/buildUrl";
export default {
    data()
    {
        return {
            theads:[
                    {title: 'STT', keys:'id', sort: true, width:'75px'},
                    {title: 'Họ Tên', keys: 'name', sort: true},
                    {title: 'Số Điện Thoại', keys: 'phone', sort: false},
                    {title: 'Địa Chỉ', keys: 'address', sort: false},
                    {title: 'Email', keys: 'email', sort: true},
                    {title: 'Thành Phố', key: 'city', sort: true},
                    {title: 'Hình Ảnh', key: 'image', sort: true},
                    {title: 'Hành Động', key: 'action', sort: true}
                ],
            customers:[],
            customer:{
                id_customer:'',
                name_customer:'',
                phone_customer:'',
                address_customer:'',
                email_customer:'',
                city_customer:''
            },
            search: '',
            loading: true,
            isLoading:true,
            isError:false,
            showFilter:false,
            isFetching:false,
            value: 90,
            max: 100,
            filters:['id','name','phone','address','email','city'],
            operators:{
                equal_to:'=',
                less_than:'<',
                greather_than:'>',
                like:'LIKE',
                in:'IN',
                not_in:'NOT IN',
                between:'BETWEEN'
            },
            param:{
                search_column:'id',
                search_operator:'equal_to',
                search_query_1:'',
                search_query_2:''
            },
            url:'',
            editUrl:'',
            title:'Thông tin khách hàng',
            id_customer:'',
            pagination:{},
            edit:false,
            numberWithDots:[],
            last_page:'',
            params: {
                page: 1,
                per_page: 10
            },
        }
    },
    created()
    {
        this.fetchCustomer();
    },
    methods:{
        onFileChange: function(e)
        {
            const file=e.target.files[0];
            this.url=URL.createObjectURL(file);
        },
        fetchCustomer: function(page_url)
        {
            
            apiRequest('/api/customers' + buildUrl(this.params))
                    .then(res => {
                        let m=res;
                        //console.log(res);
                        this.last_page=res.last_page;
                        this.customers=res.data;
                        this.numberWithDots=pagination(m.current_page,m.last_page);
                    })
                    .catch(err => {
                        this.isError=true;
                        console.log(err);
                        this.flashMessage.error({
                            message: 'Some error occurred, Please refresh!',
                            time:4000
                        });
                    })
                    .finally(()=>{
                        this.loading=false;
                    })
        },
        makePagination: function(meta,links)
        {
            let pagination ={
                current_page:meta.current_page,
                last_page:meta.last_page,
                next_page_url:links.next,
                prev_page_url:links.prev
            }
            this.pagination=pagination;
        },
        Remove:function(id)
        {
            deleteCustomer(id)
            .then(res=>{
                this.flashMessage.success({
                    message: 'Xóa khách hàng thành công!',
                    time:4000
                });
                this.fetchCustomer();
            })
            .catch(err => console.log(err))
        },
        saveCustomer:function()
        {
            let customer = this.customer;
            this.isLoading=true;
            if(this.edit===false)
            {
                //add
                let formData=new FormData();
                formData.append('name_customer',this.customer.name_customer);
                formData.append('phone_customer',this.customer.phone_customer);
                formData.append('address_customer',this.customer.address_customer);
                formData.append('email_customer',this.customer.email_customer);
                formData.append('city_customer',this.customer.city_customer);

                

                if(document.getElementById('image').files[0])
                {
                    console.log(document.getElementById('image').files[0]);
                    formData.append('image_customer',document.getElementById('image').files[0]);
                }
                //cho customer vào alf dc
                createCustomer(formData)
                 .then(res=>{
                    $('#exampleModal').modal('hide');
                    this.Reset();
                    this.fetchCustomer();
                })
                .catch(err => console.log(err))
                .finally(()=> this.fetchCustomer())
            }else
            {
                let formData=new FormData();
                //formData.append('id_customer',this.customer.id_customer);
                formData.append('name_customer',this.customer.name_customer);
                formData.append('phone_customer',this.customer.phone_customer);
                formData.append('address_customer',this.customer.address_customer);
                formData.append('email_customer',this.customer.email_customer);
                formData.append('city_customer',this.customer.city_customer);

                if(document.getElementById('image').files[0])
                {
                    console.log(document.getElementById('image').files[0]);
                    formData.append('image_customer',document.getElementById('image').files[0]);
                }
                formData.append("_method","PUT");
                 console.log(formData);
                axios
                .post(`api/customers/${this.customer.id_customer}`,formData)
                 .then(res=>{
                    this.Reset();
                    this.fetchCustomer();
                    
                })
                .catch(err => console.log(err))
                .finally(()=> this.fetchCustomer())
            }
        },
        EditCustomer:function(item)
        {
            console.log(item);
            this.edit=true;
            this.customer.id_customer=item.id_customer;
            this.customer.name_customer=item.name_customer;
            this.customer.phone_customer=item.phone_customer;
            this.customer.address_customer=item.address_customer;
            this.customer.email_customer=item.email_customer;
            this.customer.city_customer=item.city_customer;
            this.url=`assets/admin/uploads/${item.image_customer}`;
        },
        prev()
        {
            this.loading=true;
            event.preventDefault();
            this.params.page--;
            this.fetchCustomer();
        },
        next()
        {
            this.loading=true;
            event.preventDefault();
            this.params.page++;
            this.fetchCustomer();
        },
        changePerPage(page)
        {
            this.loading=true;
            if(page==='...') return false;
            event.preventDefault();
            this.params.page=page;
            this.fetchCustomer();
        },
        Reset()
        {
            this.customer.id_customer="";
            this.customer.name_customer="";
            this.customer.phone_customer="";
            this.customer.address_customer="";
            this.customer.email_customer="";
            this.customer.city_customer="";
            this.$refs.fileupload.value="";
            this.url="";
        }
    
    }
}
</script>
<style scoped>
.panel-body{
    padding:22px;
}
.panel-body h2{
    font-family: -webkit-pictograph;
}
.data-table{
    position: relative;
}
.data-table .fetching{
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    height:100%;
    width:100%;
    background-color:rgba(255,255,255,0.5);
    background-size:32px 32px;
    background-repeat:no-repeat;
    background-position:center center;
}
.fetching .progress{
    margin-top: 40%;
    height:40px;
}
.el-row {
    margin-top: 10px;
  }
</style>