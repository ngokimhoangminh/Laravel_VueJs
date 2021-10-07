<template>
    <div>
        <MainTop></MainTop>
        <Header></Header>
        <Search></Search>
        <Slider></Slider>
        <router-view></router-view>
        <Instagram/>
        <Footer/>
        <!-- Start copyright  -->
        <div class="footer-copyright">
            <p class="footer-company">All Rights Reserved. &copy; 2018 <a href="#">ThewayShop</a> Design By :
                <a href="https://html.design/">html design</a></p>
        </div>
        <!-- End copyright  -->

        <a href="#" id="back-to-top" title="Back to top" style="display: none;">&uarr;</a>

    </div>
</template>

<script>
    import Header from "./inc/Header";
    import MainTop from "./inc/MainTop";
    import Search from "./inc/Search";
    import Slider from "./inc/Slider";
    import Instagram from "./inc/Instagram";
    import Footer from "./inc/Footer";
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components: {
            Header,
            MainTop,
            Slider,
            Search,
            Instagram,
            Footer
        }
    }
</script>
