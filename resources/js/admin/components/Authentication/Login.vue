<template>
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Đăng Nhập</h3></div>
                                    <div class="card-body">
                                        <form v-on:submit.prevent="login">
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="user.email" id="email" type="email" placeholder="name@example.com" />
                                                <label for="email">Email address</label>
                                                 <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" v-model="user.password" id="password" type="password" placeholder="Password" />
                                                <label for="password">Password</label>
                                                 <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                            </div>
                                            <div class="form-check mb-3">
                                                <input class="form-check-input" id="remember-me" v-model="user.remember_me" type="checkbox" value="" />
                                                <label class="form-check-label" for="remember-me">Remember Password</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <router-link class="small" to="/reset-password-request">Forgot Password?</router-link>
                                                <button type="submit" class="btn btn-primary">Login</button>
                                                
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><router-link :to="{name:'register'}">Cần tài khoản? Đăng ký</router-link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid px-4">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
</template>
<script>
import * as auth from '../../services/auth_service';

export default {
    name:'Login',
    mounted()
    {
        document.querySelector('body').style.backgroundColor='#343a40';
    },
    data()
    {
        return {
            user:{
                email:'',
                password:'',
                remember_me:false
            },
            errors:{}
        }
    },
    methods:{
        login:async function()
        {
            try {
                const response=await auth.login(this.user);
                console.log(response.user.role);
                localStorage.setItem('user-name',response.user.name);
                localStorage.setItem('user-role',response.user.role);
                this.error={};
                this.$router.push('/home');
            } catch (error) {
                switch(error.response.status)
                    {
                        case 422:
                            this.errors=error.response.data.errors;
                            break;
                        case 401:
                            this.flashMessage.error({
                            message: error.response.data.message,
                            time:4000
                            });
                            break;
                        case 500:
                            this.flashMessage.error({
                            message: error.response.data.message,
                            time:4000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                            message: 'Some error occurred, Please try agian!',
                            time:4000
                            });
                            break;
                    }
            }
        }
    }

}
</script>