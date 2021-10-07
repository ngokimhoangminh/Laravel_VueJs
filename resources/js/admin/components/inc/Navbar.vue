<template>
     <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
            <li class="nav-item nav-profile">
              <router-link to="/home" class="nav-link">
                <div class="profile-image">
                  <img class="img-xs rounded-circle" src="assets/admin/images/faces/face8.jpg" alt="profile image">
                  <div class="dot-indicator bg-success"></div>
                </div>
                <div class="text-wrapper">
                  <p class="profile-name">{{$store.state.profile.name}}</p>
                  <p class="designation">Người Dùng</p>
                </div>
              </router-link>
            </li>
            <li class="nav-item nav-category">Main Menu</li>
            <li class="nav-item" v-if="$store.state.profile.role==='adminstrator'">
              <router-link 
                    class="nav-link"
                    tag="a"
                    to="/home/customer"><i class="menu-icon typcn typcn-document-text"></i> 
                    Khách Hàng
                </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                    class="nav-link"
                    tag="a"
                    to="/home/categories"><i class="menu-icon typcn typcn-document-text"></i> 
                    Danh Mục
                </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                    class="nav-link"
                    tag="a"
                    :to="{name:'brands'}"><i class="menu-icon typcn typcn-document-text"></i> 
                    Thương Hiệu
                </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                    class="nav-link"
                    tag="a"
                    to="/home/products"><i class="menu-icon typcn typcn-document-text"></i> 
                    Sản Phẩm
                </router-link>
            </li>
            <li class="nav-item">
              <router-link 
                    class="nav-link"
                    tag="a"
                    :to="{name:'category_blog'}"><i class="menu-icon typcn typcn-document-text"></i> 
                    Danh Mục Blog
                </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <i class="menu-icon typcn typcn-coffee"></i>
                <span class="menu-title">Basic UI Elements</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="collapse" id="ui-basic">
                <ul class="nav flex-column sub-menu">
                  <li class="nav-item">
                    <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="pages/ui-features/typography.html">Typography</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
     </nav>
</template>