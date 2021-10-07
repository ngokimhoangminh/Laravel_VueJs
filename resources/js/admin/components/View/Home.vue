<template>
    <div>
        <Header/>
      <div class="container-fluid page-body-wrapper" style="padding-left: 0px;">
        <!-- partial:partials/_sidebar.html -->
        <Navbar></Navbar>
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper">
            <!-- Page Title Header Starts-->
            <div class="row page-title-header">
              <div class="col-12">
                <div class="page-header">
                  <h4 class="page-title">Trang Chủ</h4>
                </div>
              </div>
            </div>
            <!-- Page Title Header Ends-->
            
           <router-view></router-view>
            
            
          </div>
          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          <Footer/>
          <!-- partial -->
        </div>
        
        <!-- main-panel ends -->
      </div>
    </div>
</template>
<script>
import Header from "../inc/Header";
import Navbar from "../inc/Navbar";
import Footer from "../inc/Footer";
export default {
    components: {
      Header,
      Navbar,
      Footer
  }
}
</script>