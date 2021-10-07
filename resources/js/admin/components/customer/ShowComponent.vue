<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-6">
                    {{modelcustomer.name_customer}} /{{modelcustomer.email_customer}}
                </div>
                <div class="col-md-6">
                    <div class="text-right">
                        <button class="btn btn-primary" @click="$router.push('/home/customer')">Back</button>
                        <button class="btn btn-danger" @click="Remove()">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                    <label class="font-weight-bold">Họ Tên</label>
                    <p>{{modelcustomer.name_customer}}</p>
                </div>
                <div class="col-md-3">
                    <label class="font-weight-bold">Email</label>
                    <p>{{modelcustomer.email_customer}}</p>
                </div>
                <div class="col-md-3">
                    <label class="font-weight-bold">Số Điện Thoại</label>
                    <p>{{modelcustomer.phone_customer}}</p>
                </div>
                <div class="col-md-3">
                    <label class="font-weight-bold">Địa Chỉ</label>
                    <p>{{modelcustomer.city_customer}}</p>
                </div>
                 
            </div>
        </div>
    </div>
</template>
<script>
    import {showCustomer} from "../../api/customer";
    export default{
        data()
        {
           return {
                modelcustomer:
                {
                }
            }
            
        },
        created()
        {
            this.fetchData();
        },
        methods:{
            fetchData: function()
            {
                showCustomer(this.$route.params.id)
                .then(res =>{
                    console.log(res.data);
                    this.modelcustomer=res.data;
                })
                .catch(err => console.log(err));
            }
        
        }
    }
</script>