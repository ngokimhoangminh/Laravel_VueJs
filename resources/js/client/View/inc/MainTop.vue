<template>
  <!-- Start Main Top -->
        <div class="main-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="text-slid-box">
                            <div id="offer-box" class="carouselTicker">
                                <ul class="offer-box">
                                    <li>
                                        <i class="fab fa-opencart"></i> Off 10%! Shop Now Man
                                    </li>
                                    <li>
                                        <i class="fab fa-opencart"></i> 50% - 80% off on Fashion
                                    </li>
                                    <li>
                                        <i class="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT20
                                    </li>
                                    <li>
                                        <i class="fab fa-opencart"></i> Off 50%! Shop Now
                                    </li>
                                    <li>
                                        <i class="fab fa-opencart"></i> Off 10%! Shop Now Man
                                    </li>
                                    <li>
                                        <i class="fab fa-opencart"></i> 50% - 80% off on Fashion
                                    </li>
                                    <li>
                                        <i class="fab fa-opencart"></i> 20% off Entire Purchase Promo code: offT20
                                    </li>
                                    <li>
                                        <i class="fab fa-opencart"></i> Off 50%! Shop Now
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="custom-select-box">
                             <button class="dropdown-item" @click="logout" v-if="name!=''">Đăng xuất</button>
                        </select>
                        </div>
                        <div class="right-phone-box">
                            <p>Gọi chúng tôi :- <a href="#"> +11 900 800 100</a></p>
                        </div>
                        <div class="our-link">
                            <ul>
                                <li>
                                    <router-link class="small" :to="{name:'user-login'}" v-if="name==''">Đăng Nhập</router-link>
                                    <a href="#" v-else>{{name}}</a>
                                </li>
                                <li><a href="#">Địa điểm</a></li>
                                <li><a href="#">Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Main Top -->
</template>

<script>
import * as user from '../../services/user_service';
import { mapActions, mapGetters } from "vuex";

export default {
data()
    {
        return {
            fullname:''
        }
    },
    created()
    {
      this.checkUser();
    },
    computed: {
        ...mapGetters(["name"])
    },
    methods:{
        checkUser(){
            let user = JSON.parse(sessionStorage.getItem("user_info"));
            this.fullname=user['fullname'];
        },
        logout()
        {
            user.logout();
            this.$router.replace({ name:'user-login'});
        }
    }
}
</script>

<style>
    .dropdown-item{
        background: #D33B33;
        color: #fff!important;
        justify-content: center;
        display: flex!important;
    }
    .dropdown-item:hover{
        color:#000!important;
        cursor: pointer;
    }
</style>