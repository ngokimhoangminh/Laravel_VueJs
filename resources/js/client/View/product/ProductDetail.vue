<template>
   <!-- Start Shop Detail  -->
    <div class="shop-detail-box-main">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-6">
                    <div id="carousel-example-1" class="single-product-slider carousel slide" data-ride="carousel">
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active"> <img class="d-block w-100" :src="'assets/admin/uploads/'+products.image" alt="First slide"> </div>
                            <div class="carousel-item"> <img class="d-block w-100" :src="'assets/admin/uploads/'+products.image" alt="Second slide"> </div>
                            <div class="carousel-item"> <img class="d-block w-100" :src="'assets/admin/uploads/'+products.image" alt="Third slide"> </div>
                        </div>
                        <a class="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev"> 
						<i class="fa fa-angle-left" aria-hidden="true"></i>
						<span class="sr-only">Previous</span> 
					</a>
                        <a class="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next"> 
						<i class="fa fa-angle-right" aria-hidden="true"></i> 
						<span class="sr-only">Next</span> 
					</a>
                        <ol class="carousel-indicators">
                            <li data-target="#carousel-example-1" data-slide-to="0" class="active">
                                <img class="d-block w-100 img-fluid" :src="'assets/admin/uploads/'+products.image" alt="" />
                            </li>
                            <li data-target="#carousel-example-1" data-slide-to="1">
                                <img class="d-block w-100 img-fluid" :src="'assets/admin/uploads/'+products.image" alt="" />
                            </li>
                            <li data-target="#carousel-example-1" data-slide-to="2">
                                <img class="d-block w-100 img-fluid" :src="'assets/admin/uploads/'+products.image" alt="" />
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-7 col-md-6">
                    <div class="single-product-details">
                        <h2>{{products.name}}</h2>
                        <h5> <del>{{formatPrice(products.price)}}&nbsp;đ</del>{{formatPrice(products.discount)}}&nbsp;đ</h5>
                            <p>
                                <h4>Mô tả ngắn:</h4>
                                <p v-html="products.product_des"></p>
                                <ul>
                                    <li class="w-100">
                                        <div class="form-group quantity-box">
                                            <label class="control-label">Số lượng</label>
                                            <input class="form-control" v-model="cartData.quantity" value="1" min="1" max="20" type="number">
                                        </div>
                                    </li>
                                </ul>

                                <div class="price-box-bar">
                                    <div class="cart-and-bay-btn">
                                        <a class="btn hvr-hover" data-fancybox-close="" href="#">Mua ngay</a>
                                        <a class="btn hvr-hover" data-fancybox-close="" @click="addToCart()">Thêm giỏ hàng</a>
                                    </div>
                                </div>

                                <div class="add-to-btn">
                                    <div class="add-comp">
                                        <a class="btn hvr-hover" href="#"><i class="fas fa-heart"></i> Thêm yêu thích</a>
                                        <a class="btn hvr-hover" href="#"><i class="fas fa-sync-alt"></i>Đối chiếu</a>
                                    </div>
                                    <div class="share-bar">
                                        <a class="btn hvr-hover" href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                                        <a class="btn hvr-hover" href="#"><i class="fab fa-google-plus" aria-hidden="true"></i></a>
                                        <a class="btn hvr-hover" href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                                        <a class="btn hvr-hover" href="#"><i class="fab fa-pinterest-p" aria-hidden="true"></i></a>
                                        <a class="btn hvr-hover" href="#"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                    </div>
                </div>
            </div>

            <div class="row my-5">
                <div class="col-lg-12">
                    <div class="title-all text-center">
                        <h1>Sản phẩm liên quan</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                    <div class="row featured-products-box owl-theme justify-content-center">
                        <div class="item">
                            <div class="products-single fix">
                                <div class="box-img-hover">
                                    <img src="assets/client/images/img-pro-01.jpg" class="img-fluid" alt="Image">
                                    <div class="mask-icon">
                                        <ul>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                        <a class="cart" href="#">Add to Cart</a>
                                    </div>
                                </div>
                                <div class="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="products-single fix">
                                <div class="box-img-hover">
                                    <img src="assets/client/images/img-pro-02.jpg" class="img-fluid" alt="Image">
                                    <div class="mask-icon">
                                        <ul>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                        <a class="cart" href="#">Add to Cart</a>
                                    </div>
                                </div>
                                <div class="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="products-single fix">
                                <div class="box-img-hover">
                                    <img src="assets/client/images/img-pro-03.jpg" class="img-fluid" alt="Image">
                                    <div class="mask-icon">
                                        <ul>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                        <a class="cart" @click="$router.push({name:'cart'})">Add to Cart</a>
                                    </div>
                                </div>
                                <div class="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="products-single fix">
                                <div class="box-img-hover">
                                    <img src="assets/client/images/img-pro-04.jpg" class="img-fluid" alt="Image">
                                    <div class="mask-icon">
                                        <ul>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                        </ul>
                                        <a class="cart" href="#">Add to Cart</a>
                                    </div>
                                </div>
                                <div class="why-text">
                                    <h4>Lorem ipsum dolor sit amet</h4>
                                    <h5> $9.79</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <!-- End Cart -->
</template>

<script>
import * as homeService from '../../services/home_service';
import * as cartService from '../../services/cart_service';

export default {
    data()
    {
        return{
            products:{},
            cartData:{
                user_id:'',
                product_id:this.$route.params.id,
                product_name:this.$route.params.name,
                product_price:this.$route.params.discount,
                product_image:this.$route.params.image,
                quantity:''
            },
            errors:{}
        }
    },
    mounted()
    {
        this.detailProduct();
    },
    created()
    {
        
    },
    methods:{
        async detailProduct()
        {
            try{
                const response=await homeService.ProductDetail(this.$route.params.id);
                this.products=response.data;
            }catch(error)
            {
                 this.flashMessage.error({
                    message: 'Some error occurred, Please refresh!',
                    time:4000
                });
            }
        },
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
        async addToCart()
        {
            let user = JSON.parse(sessionStorage.getItem("user_info"));
            console.log("useee",user);
            if(user)
            {
                this.cartData.user_id=user.id;
                let cart=this.cartData;
                try{
                    const response =await cartService.createCart(cart);
                    this.$store.dispatch('createCart',cart);
                    this.$router.replace({ name:'cart'});
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
                console.log("cart",cart);
            }else{
                this.$router.replace({ name:'user-login'});
            }
            
        }
    },
    
}
</script>

<style>

</style>