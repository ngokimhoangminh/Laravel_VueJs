<template>
  <!-- Start Cart  -->
    <div class="cart-box-main">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="table-main table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Hình Ảnh</th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th class="text-center">Số Lượng</th>
                                    <th>Tổng Tiền</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(cart,index) in carts" :key="index">
                                    <td>
                                        <input type="checkbox" :id="cart.id" :value="cart.id" v-model="checkedProduct">
                                    </td>
                                    <td class="thumbnail-img">
                                        <a href="#">
                                            <img class="img-fluid" :src="'assets/admin/uploads/'+cart.product_image" alt="" />
                                        </a>
                                    </td>
                                    <td class="name-pr">
                                        <a href="#">
                                            {{cart.product_name}}
                                        </a>
                                    </td>
                                    <td class="price-pr">
                                        <p style="margin:0px;">{{formatPrice(cart.product_price)}}&nbsp;VND</p>
                                        <p style="display:none;" :id="'product_price'+cart.id" >{{cart.product_price}}</p>
                                    </td>
                                    <td class="quantity-box">
                                        <input type="number" size="4" :id="cart.id" :value="cart.quantity"  min="0" step="1" @change="onChangePrice($event)" class="c-input-text qty text">
                                    </td>
                                    <td class="total-pr">
                                        <p style="margin:0px;" :id="'total'+cart.id">{{formatPrice(cart.product_price*cart.quantity)}} VND</p>
                                    </td>
                                    <td class="remove-pr">
                                        <a-popconfirm placement="topRight" ok-text="Đồng ý" cancel-text="Không" @confirm="deleteCart(cart.id)" title="Bạn có chắc chắn muốn xóa sản phẩm này??">
                                            <a href="#">
									            <i class="fas fa-times"></i>
								            </a>
                                        </a-popconfirm>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="row my-5">
                <div class="col-lg-6 col-sm-6">
                    <div class="coupon-box">
                        <div class="input-group input-group-sm">
                            <input class="form-control" placeholder="Enter your coupon code" aria-label="Coupon code" type="text">
                            <div class="input-group-append">
                                <button class="btn btn-theme" type="button">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                    <div class="update-box">
                        <input value="Cập Nhật" type="submit" @click="updateCart()">
                    </div>
                </div>
            </div>
            <span>Món đã chọn: {{ checkedProduct }}</span>
            <div class="row my-5">
                <div class="col-lg-8 col-sm-12"></div>
                <div class="col-lg-4 col-sm-12">
                    <div class="order-box">
                        <h3>Tóm tắt giỏ hàng</h3>
                        <div class="d-flex">
                            <h4>Tổng Tiền</h4>
                            <div class="ml-auto font-weight-bold" id="subTotal"> {{formatPrice(subTotal)}} VND</div>
                        </div>
                        <hr class="my-1">
                        <div class="d-flex">
                            <h4>Thuế</h4>
                            <div class="ml-auto font-weight-bold" id="tax"> {{formatPrice(tax)}} VND </div>
                        </div>
                        <div class="d-flex">
                            <h4>Phí vận chuyển</h4>
                            <div class="ml-auto font-weight-bold"> Miễn Phí </div>
                        </div>
                        <hr>
                        <div class="d-flex gr-total">
                            <h5>Tổng Cộng</h5>
                            <div class="ml-auto h5" id="grandTotal"> {{formatPrice(grandTotal)}} VND </div>
                        </div>
                        <hr> </div>
                </div>
                <div class="col-12 d-flex shopping-box"><a @click="checkOut()" class="ml-auto btn hvr-hover">Thanh Toán</a> </div>
            </div>

        </div>
    </div>
    <!-- End Cart -->
</template>

<script>
import { mapActions, mapGetters,mapMutations } from "vuex";
import * as cartService from '../../services/cart_service';
import * as helpers from '../../helpers/setCheckProducts';

export default {
    data()
    {
        return{
            cartData:{
                quantity:''
            },
            dataCart:[],
            subTotals:0,
            checkedProduct: []
        }
    },
    beforeCreate()
    {
        
    },
    created()
    {
        console.log("idd bn",this.id);
        this.getCart(this.id);
    },
    computed: {
        ...mapGetters(["id","carts","subTotal","tax","grandTotal"])
    },
    mounted()
    {
       this.totalCart(this.carts);
    },
    methods:{
        ...mapActions(["getCart","editCart"]),
        ...mapMutations(['CHECK_PRODUCT','TOTAL_CART','CHANGE_PRICE']),
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        onChangePrice(event)
        {
            let cart_id=event.target.id;
            let quantity=event.target.value;
            this.CHANGE_PRICE({'id':cart_id,'quantity':quantity});
            this.totalCart(this.carts);  
        },
        async updateCart()
        {
            console.log("cart update",this.carts);
            for(let i=0;i<this.carts.length;i++)
            {
                try{
                    this.$store.dispatch('editCart',this.carts[i]);
                   // this.$router.replace({ name:'cart'});
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
            this.$message.success(
                    'Cập nhật giỏ hàng thành công',
                    1,
                );
        },
        async deleteCart(id)
        {   
            try{
                const response= await cartService.deleteCart(id);
                this.$store.dispatch('deleteCart',id);
                this.$message.success(
                    response.data.message,
                    1,
                );
            }catch(error)
            {
                this.$message.error(
                    error.response.data.message,
                    1,
                );
            }
        },
        totalCart(data)
        {
            const cart=JSON.parse(localStorage.getItem('carts'));
            console.log("local",cart);
            this.TOTAL_CART(data);
        },
        checkOut()
        {
            if(this.checkedProduct.length>0)
            {
                helpers.checkProducts(this.checkedProduct);
                this.$router.replace({ name:'checkout'});
            }else{
                this.$message.error(
                    'Bạn chưa chọn sản phẩm muốn thanh toán',
                    1,
                );
            }
            
        }
    }   
}
</script>

<style>

</style>