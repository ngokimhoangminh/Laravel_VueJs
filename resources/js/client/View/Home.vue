<template>
    <div>
        <!-- Start Categories  -->
        <div class="categories-shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 shop-cat-box" v-for="(category,index) in categorys" :key="index">
                        <img class="img-fluid" :src="'assets/admin/uploads/'+category.image" alt="" />
                        <a class="btn hvr-hover" href="#">{{category.name}}</a>
                    </div> 
                </div>
            </div>
        </div>
        <!-- End Categories -->
        <!-- Start Products  -->
        <div class="products-box" style="height: 1100px;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="title-all text-center">
                            <h1>Sản Phẩm Nổi Bật</h1>
                            <p>Tuy Shop hiện chủ yếu chỉ bán hàng online nhưng luôn luôn đảm bảo uy tín và chất lượng sản phẩm.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="special-menu text-center">
                            <div class="button-group filter-button-group">
                                <button class="active" data-filter="*">Tất Cả</button>
                                <button data-filter=".top-featured">Nội Bật</button>
                                <button data-filter=".best-seller">Giảm Giá</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row special-list">
                    <div class="col-lg-3 col-md-6 special-grid best-seller" v-for="(product,index) in products" :key="index">
                        <div class="products-single fix">
                            <div class="box-img-hover">
                                <div class="type-lb">
                                    <p class="sale">Giảm Giá</p>
                                </div>
                                <img :src="'assets/admin/uploads/'+product.image" class="img-fluid" alt="Image">
                                <div class="mask-icon">
                                    <ul>
                                        <li><a @click="$router.push('/product-detail/'+ product.id)" data-toggle="tooltip" data-placement="right" title="View"><i class="fas fa-eye"></i></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i class="fas fa-sync-alt"></i></a></li>
                                        <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i class="far fa-heart"></i></a></li>
                                    </ul>
                                    <a class="cart" href="#">Thêm giỏ hàng</a>
                                </div>
                            </div>
                            <div class="why-text">
                                <h4>{{product.name}}</h4>
                                <h5>{{formatPrice(product.discount)}}&nbsp;VND</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Products  -->
    </div>
        
</template>
<script>
import { mapActions, mapGetters,mapMutations } from "vuex";
import * as homeService from '../services/home_service';

export default {
    data()
    {
        return{
            categories:[],
        }
    },
    created()
    {
        
    },
    mounted()
    {
        this.getCategory();
        this.getProduct();
    },
    computed: {
        ...mapGetters(["categorys","products"])
    },
    methods:{
        ...mapActions(["getCategory","getProduct"]),
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    }
}
</script>