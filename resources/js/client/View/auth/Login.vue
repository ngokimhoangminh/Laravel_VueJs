<template>
    <div class="container signin_form pt-5 pb-5 d-flex">
        <div class="col-md-5 signin_form--image d-flex align-items-center justify-content-center">
            <img src="assets/client/images/login.jpg" class="w-100">
        </div>
        <div class="col-md-7 sign_form--info pt-5">
            <h1 class="article-title wow animate__fadeInUp" data-wow-duration="2s" itemprop="headline"
                style="text-align: center;color: #D33B33;font-weight: 600;text-transform: uppercase;">
                Đăng Nhập tài Khoản <br>
            </h1>
            <div class="login" width="100%" align="center" border="0" cellpadding="0"
                cellspacing="0">
                <form v-on:submit.prevent="login">
                    <div class="signin__info pb-2">
                        <div align="center" class="signin__info signin__info--userlname pb-2 d-flex bg-module-middle wow animate__fadeInUp" data-wow-duration="2s">
                            <label class="col-md-3 moudle__info--title text-left d-flex">Tên Đăng Nhập &nbsp; <p class="text-danger">(*)</p></label>
                            <input type="text" 
                                class="form-control required display-inline-block" v-model="user.username" placeholder="Mời nhập tên đăng nhập">
                                <div class="invalid-feedback" style="display:block" v-if="errors.username">{{errors.username[0]}}</div>
                        </div>
                        <a-form-item label="Mật Khẩu" has-feedback validate-status="success" :style="{ display:'flex'}" class="pb-2">
                            <a-input-password placeholder="Nhập mật khẩu" style="width:100%;" v-model="user.password"/>
                            <div class="invalid-feedback" style="display:block" v-if="errors.password">{{errors.password[0]}}</div>
                        </a-form-item>
                    </div>
                    <div class="form-group row form-group--center wow animate__fadeInUp" data-wow-duration="2s" style="margin: 0">
                        <div class="col-lg-9 col-md-9 offset-md-3 form-group pl-0 pr-0">
                            <button type="submit" class="btn btn-submit d-flex align-items-center justify-content-center" style="width: 100%;background: #D33B33;color:#fff;border: none;height: 45px;border-radius: 45px;font-weight: 600;"  href="#">Đăng Nhập</button>
                            <div class="d-flex justify-content-between">
                                <router-link :to="{name:'sign-up'}">Đăng ký tài khoản</router-link>
                                <a href="#">Bạn quên mật khẩu ?</a>
                            </div>
                            
                        </div>
                    </div>  
                </form>
            </div>
        </div>
		
	</div>
</template>

<script>
import * as user from '../../services/user_service';
export default {
    data()
    {
        return{
            user:{
                username:'',
                password:'',
            },
            errors:{}
        }
    },
    mounted()
    {

    },
    created()
    {

    },
    methods:{
        login:async function()
        {
             try {
                const response=await user.login(this.user);
                this.$message.success(
                    'Đăng nhập thành công',
                    1,
                );
                setTimeout(() => {
                    this.$router.push({ name:'home'});
                }, 2000); 
                this.error={};
            } catch (error) {
                switch(error.response.status)
                    {
                        case 422:
                            this.errors=error.response.data.errors;
                            break;
                        case 500:
                            this.$message.error(
                                response.data.message,
                                1,
                            );
                            break;
                        default:
                            this.$message.error(
                                'Some error occurred, Please try agian!',
                                1,
                            );
                            break;
                    }
            }
        }
    }
}
</script>

<style>

</style>