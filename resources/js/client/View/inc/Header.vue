<template>
  <!-- Start Main Top -->
        <header class="main-header">
            <!-- Start Navigation -->
            <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                <div class="container">
                    <!-- Start Header Navigation -->
                    <div class="navbar-header">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars"></i>
                    </button>
                        <router-link :to="{name:'home'}" class="navbar-brand"><img src="assets/client/images/logo.png" class="logo" alt=""></router-link>
                    </div>
                    <!-- End Header Navigation -->

                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="navbar-menu">
                        <ul class="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">
                            <li class="nav-item active"><router-link :to="{name:'home'}" class="nav-link">Trang chủ</router-link></li>
                            <li class="nav-item"><a class="nav-link" href="about.html">Về Chúng Tôi</a></li>
                            <li class="dropdown megamenu-fw">
                                <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">Sản Phẩm</a>
                                <ul class="dropdown-menu megamenu-content" role="menu">
                                    <li>
                                        <div class="row">
                                            <div class="col-menu col-md-3">
                                                <h6 class="title">Trang Phục</h6>
                                                <div class="content">
                                                    <ul class="menu-col">
                                                        <li><a href="shop.html">Jackets</a></li>
                                                        <li><a href="shop.html">Shirts</a></li>
                                                        <li><a href="shop.html">Sweaters & Cardigans</a></li>
                                                        <li><a href="shop.html">T-shirts</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <!-- end col-3 -->
                                            <!-- <div class="col-menu col-md-3">
                                                <h6 class="title">Bottom</h6>
                                                <div class="content">
                                                    <ul class="menu-col">
                                                        <li><a href="shop.html">Swimwear</a></li>
                                                        <li><a href="shop.html">Skirts</a></li>
                                                        <li><a href="shop.html">Jeans</a></li>
                                                        <li><a href="shop.html">Trousers</a></li>
                                                    </ul>
                                                </div>
                                            </div> -->
                                            <!-- end col-3 -->
                                            
                                        </div>
                                        <!-- end row -->
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a href="#" class="nav-link dropdown-toggle arrow" data-toggle="dropdown">Của Hàng</a>
                                <ul class="dropdown-menu">
                                    <li><a @click="$router.replace({name:'cart'})">Giỏ Hàng</a></li>
                                    <li><a href="checkout.html">Thanh Toán</a></li>
                                    <li><a href="my-account.html">Tài Khoản</a></li>
                                    <li><a href="wishlist.html">Yêu Thích</a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a class="nav-link" href="service.html">Dịch Vụ</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact-us.html">Liên Hệ</a></li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->

                    <!-- Start Atribute Navigation -->
                    <div class="attr-nav">
                        <ul>
                            <li class="search"><a href="#"><i class="fa fa-search"></i></a></li>
                            <li class="side-menu"><a href="#">
                            <i class="fa fa-shopping-bag"></i>
                                <span class="badge">3</span>
                        </a></li>
                        </ul>
                    </div>
                    <!-- End Atribute Navigation -->
                </div>
                <!-- Start Side Menu -->
                <div class="side">
                    <a href="#" class="close-side"><i class="fa fa-times"></i></a>
                    <li class="cart-box">
                        <ul class="cart-list">
                            <li>
                                <a href="#" class="photo"><img src="assets/client/images/img-pro-01.jpg" class="cart-thumb" alt="" /></a>
                                <h6><a href="#">Delica omtantur </a></h6>
                                <p>1x - <span class="price">$80.00</span></p>
                            </li>
                            <li>
                                <a href="#" class="photo"><img src="assets/client/images/img-pro-02.jpg" class="cart-thumb" alt="" /></a>
                                <h6><a href="#">Omnes ocurreret</a></h6>
                                <p>1x - <span class="price">$60.00</span></p>
                            </li>
                            <li>
                                <a href="#" class="photo"><img src="assets/client/images/img-pro-03.jpg" class="cart-thumb" alt="" /></a>
                                <h6><a href="#">Agam facilisis</a></h6>
                                <p>1x - <span class="price">$40.00</span></p>
                            </li>
                            <li class="total">
                                <a href="#" class="btn btn-default hvr-hover btn-cart">VIEW CART</a>
                                <span class="float-right"><strong>Total</strong>: $180.00</span>
                            </li>
                        </ul>
                    </li>
                </div>
                <!-- End Side Menu -->
            </nav>
            <!-- End Navigation -->
        </header>
        <!-- End Main Top -->
</template>

<script>
export default {

}
</script>

<style>

</style>