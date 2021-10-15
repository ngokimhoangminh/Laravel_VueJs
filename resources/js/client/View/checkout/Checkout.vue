<template>
     <!-- Start Cart  -->
    <div class="cart-box-main">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-6 mb-3">
                    <div class="checkout-address">
                        <div class="title-left">
                            <h3>Địa chỉ thanh toán </h3>
                        </div>
                        <form class="needs-validation" novalidate>
                            <div class="mb-3">
                                    <label for="firstName">Người Nhận Hàng *</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
                                    <div class="invalid-feedback"> Valid first name is required. </div>
                            </div>
                            <div class="mb-3">
                                <label for="email">Địa Chỉ Email *</label>
                                <input type="email" class="form-control" id="email" placeholder="">
                                <div class="invalid-feedback"> Please enter a valid email address for shipping updates. </div>
                            </div>
                            <div class="mb-3">
                                <label for="address">Địa Chỉ Nhận Hàng</label>
                                <input type="text" class="form-control" id="address" placeholder="" required>
                                <div class="invalid-feedback"> Please enter your shipping address. </div>
                            </div>
                            <div class="mb-3">
                                <label for="address2">Số Điện Thoại</label>
                                <input type="text" class="form-control" id="address2" placeholder=""> </div>
                            <div class="col-md-5 mb-3">
                                <label for="country">Quốc Gia *</label>
                                <select class="wide w-100" id="country">
                                    <option value="Choose..." data-display="Select">Lựa chọn...</option>
                                    <option value="Việt Nam">Việt Nam</option>
                                </select>
                                <div class="invalid-feedback"> Please select a valid country. </div>
                            </div>
                            <hr class="mb-4">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="same-address">
                                <label class="custom-control-label" for="same-address">Địa chỉ giao hàng giống với địa chỉ thanh toán của tôi </label>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="save-info">
                                <label class="custom-control-label" for="save-info">Giao hàng vào các ngày trong tuần, theo giờ hành chính</label>
                            </div>
                            <hr class="mb-4">
                            <div class="title"> <span>Hình thức thanh toán</span> </div>
                            <div class="d-block my-3">
                                <div class="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" value="1" type="radio" class="custom-control-input" checked required>
                                    <label class="custom-control-label" for="credit">Thẻ tín dụng</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" value="2" type="radio" class="custom-control-input" required>
                                    <label class="custom-control-label" for="debit">Thẻ ghi nợ</label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" value="3" type="radio" class="custom-control-input" required>
                                    <label class="custom-control-label" for="paypal">Paypal</label>
                                </div>
                            </div>
                            
                            <hr class="mb-1"> </form>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-6 mb-3">
                    <div class="row">
                        
                        <div class="col-md-12 col-lg-12">
                            <div class="odr-box">
                                <div class="title-left">
                                    <h3>Giỏ Hàng</h3>
                                </div>
                                <div class="rounded p-2 bg-light">
                                    <div class="media mb-2 border-bottom" v-for="(ckData,index) in checkoutData" :key="index">
                                        <div class="media-body"> <a href="detail.html">{{ckData.product_name}}</a>
                                            <div class="small text-muted">Giá: {{formatPrice(ckData.product_price)}} VND <span class="mx-2">|</span> Số lượng: {{ckData.quantity}} <span class="mx-2">|</span> Tổng cộng: {{formatPrice(ckData.product_price*ckData.quantity)}} VND</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-12">
                            <div class="order-box">
                                <div class="title-left">
                                    <h3>Đơn Hàng Của Bạn</h3>
                                </div>
                                <div class="d-flex">
                                    <div class="font-weight-bold">Sản Phẩm</div>
                                    <div class="ml-auto font-weight-bold">Tổng Cộng</div>
                                </div>
                                <hr class="my-1">
                                <div class="d-flex">
                                    <h4>Tổng Tiền</h4>
                                    <div class="ml-auto font-weight-bold">{{formatPrice(subTotal)}} VND</div>
                                </div>
                                <hr class="my-1">
                                <div class="d-flex">
                                    <h4>Thuế</h4>
                                    <div class="ml-auto font-weight-bold"> {{formatPrice(tax)}} VND</div>
                                </div>
                                <hr>
                                <div class="d-flex gr-total">
                                    <h5>Thành Tiền</h5>
                                    <div class="ml-auto h5"> {{formatPrice(grandTotal)}} VND </div>
                                </div>
                                <hr> </div>
                        </div>
                        <div class="col-12 d-flex shopping-box"> <a href="checkout.html" class="ml-auto btn hvr-hover">Đặt hàng </a> </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- End Cart -->
</template>

<script>
import { mapActions, mapGetters,mapMutations } from "vuex";
import * as helpers from '../../helpers/formatPrice';

export default {
    data()
    {
        return{

        }
    },
    created(){
        this.getProduct();
    },
    mounted(){

    },
    computed: {
        ...mapGetters(["checkProduct","checkoutData","subTotal","tax","grandTotal"])
    },
    methods:{
        ...mapMutations(['TOTAL_CART','CHECK_PRODUCT','GET_CHECKOUT','TOTAL_CART']),
        getProduct()
        {
            console.log("ckPro",this.checkProduct);
            this.GET_CHECKOUT(this.checkProduct);
            this.TOTAL_CART(this.checkoutData);
        },
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    }
}
</script>

<style>

</style>