<template>
     <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-7">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Đăng Ký Tài Khoản</h3></div>
                                    <div class="card-body">
                                        <form v-on:submit.prevent="register">
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="name" v-model="user.name" type="text" placeholder="Enter your first name" />
                                                        <label for="name">Enter full name</label>
                                                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating">
                                                        <input class="form-control" id="email" v-model="user.email" type="email" placeholder="name@example.com" />
                                                        <label for="email">Email address</label>
                                                        <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="row mb-3">
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="password" v-model="user.password" type="password" placeholder="Create a password" />
                                                        <label for="password">Password</label>
                                                        <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-floating mb-3 mb-md-0">
                                                        <input class="form-control" id="password_confirm" v-model="user.password_confirmation" type="password" placeholder="Confirm password" />
                                                        <label for="password_confirm">Confirm Password</label>
                                                        <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4 mb-0">
                                                <div class="d-grid"><button class="btn btn-primary btn-block" type="submit">Đăng Ký</button></div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><router-link  :to="{name:'login'}">Have an account? Go to login</router-link></div>
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
    name:'Register',
    data()
    {
        return{
            user:{
                name:'',
                email:'',
                password:'',
                password_confirmation:''
            },
            errors:{}
        }
    },
    created()
    {
        document.querySelector('body').style.backgroundColor='#343a40';
    },
    methods:{
        register:async function()
        {
            try{
                await auth.register(this.user);
                this.flashMessage.success({
                    message: 'Đăng ký thành thành công!',
                    time:4000
                    });
                    this.error={};
                    this.$router.push('/');
            }catch(error)
            {
                switch(error.response.status)
                    {
                        case 422:
                            this.errors=error.response.data.errors;
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