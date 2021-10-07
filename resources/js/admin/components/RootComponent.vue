<template>
    <div class="container-scroller">
      <router-view></router-view>
      <FlashMessage position="right top"></FlashMessage>
      <!-- page-body-wrapper ends -->
    </div>
</template>
<script>
import * as auth from '../services/auth_service';
export default {
    name: 'RootComponent'
    // beforeCreate:async function()
    // {
    //   try{
    //     if(auth.isLoggedIn())
    //     {
    //       const response= await auth.getProfile();
    //       console.log(response);
    //       this.$store.dispatch('authenticate',user.user);
    //     }
    //   }catch(error)
    //   {
    //     auth.logout();
    //   }
    // }
    
}
</script>
<style scoped>
._vue-flash-msg-body__text{
    color: #fff;
    font-family: cursive;
}
</style>