<template>
    <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <main>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Reset Your Password</h3></div>
                                    <div class="card-body">
                                        <div class="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                                        <form v-on:submit.prevent="onSubmit">
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" type="email" v-model="user.email" placeholder="name@example.com" />
                                                <label for="inputEmail">Email address</label>
                                                 <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="verification_code" type="number" v-model="user.verification_code" placeholder="Enter verification code" />
                                                <label for="verification_code">Email verityfy code</label>
                                                 <div class="invalid-feedback" v-if="errors.verification_code">{{errors.verification_code[0]}}</div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="password" type="password" v-model="user.password" placeholder="Enter password" />
                                                <label for="password">Password</label>
                                                 <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                            </div>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="passwordConfirm" type="password" v-model="user.passwordConfirm" placeholder="Enter password confirmation" />
                                                <label for="passwordConfirm">Password Confirm</label>
                                                 <div class="invalid-feedback" v-if="errors.passwordConfirm">{{errors.passwordConfirm[0]}}</div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <router-link class="small" :to="{name:'login'}">Return to login</router-link>
                                                <button type="submit" class="btn btn-primary" ref="btnSubmit">Reset Password</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><router-link to="/reset-password-request">Resend verification code</router-link></div>
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
    name:'ResetPasswordRequest',
    data(){
        return {
            user:{
                email:'',
                verification_code:'',
                password:'',
                password_confirmation:''
            },
            btnOldHtml:'',
            errors:{}
        }
    },
    created()
    {

    },
    mounted()
    {
        document.querySelector('body').style.backgroundColor='#343a40';
    },
    beforeRouteEnter(to, from, next)
    {
        next(vm =>{
            vm.user.email=to.params.email;
        });
    },
    methods:{
        onSubmit: async function()
        {
            try {
                this.disableSubmission(this.$refs.btnSubmit);
                this.errors={};
               const response=await auth.ResetPassword(this.user);
                this.flashMessage.success({
                    message: response.data.message,
                    time:4000
                    });
                    this.$router.push('/login');
            } catch (error) {
                switch(error.response.status)
                    {
                        case 422:
                            this.errors=error.response.data.errors;
                            break;
                        case 401:
                            this.errors=error.response.data.errors;
                            break;
                        
                        default:
                            this.flashMessage.error({
                            message: 'Some error occurred, Please try agian!',
                            time:4000
                            });
                            break;
                    }
                    this.enableSubmission(this.$refs.btnSubmit);
            }
        },
        disableSubmission(btn)
        {
            btn.setAttribute('disabled','disabled');
            this.btnOldHtml=btn.innerHTML;
            btn.innerHTML='<span class="fa fa-spinner fa-spin"></span> Please wait...';

        },
        enableSubmission(btn)
        {
            btn.removeAttribute('disabled');
            btn.innerHTML=this.btnOldHtml;
        }
    }
}
</script>