<template>
  <div class="container signin_form pt-5 pb-5 d-flex">
        <div class="col-md-5 signin_form--image d-flex align-items-center justify-content-center">
            <img src="assets/client/images/sign-up.jpg" class="w-100">
        </div>
        <div class="col-md-7 sign_form--info">
            <h1 class="article-title wow animate__fadeInUp" data-wow-duration="2s" itemprop="headline"
                style="text-align: center;color: #D33B33;font-weight: 600;text-transform: uppercase;">
                Đăng Ký Tài Khoản <br>
            </h1>
            <div class="login" width="100%" align="center" border="0" cellpadding="0"
                cellspacing="0">
                <form v-on:submit.prevent="sign_up">
                    <div class="signin__info">
                        <div align="center" class="signin__info signin__info--fullname pb-2 d-flex bg-module-middle wow animate__fadeInUp align-self-baseline" data-wow-duration="2s">
                            <label class="col-md-3 moudle__info--title text-left d-flex p-0">Họ Tên&nbsp;<p class="text-danger">(*)</p></label>
                            <input type="text" class="form-control required display-inline-block" v-model="user.fullname" placeholder="Nhập họ tên">
                            <div class="invalid-feedback" style="display:block" v-if="errors.fullname">{{errors.fullname[0]}}</div>
                        </div>
                        <div align="center" class="signin__info signin__info--userlname pb-2 d-flex align-self-baseline bg-module-middle wow animate__fadeInUp " data-wow-duration="2s">
                            <label class="col-md-3 moudle__info--title text-left d-flex p-0">Tên Đăng Nhập&nbsp;<p class="text-danger">(*)</p></label>
                            <input type="text" 
                                class="form-control required display-inline-block" v-model="user.name" placeholder="Nhập tên đăng nhập">
                            <div class="invalid-feedback" style="display:block" v-if="errors.name">{{errors.name[0]}}</div>
                        </div>
                        <div align="center" class="signin__info signin__info--email pb-2 d-flex align-self-baseline bg-module-middle wow animate__fadeInUp" data-wow-duration="2s">
                            <label class="col-md-3 moudle__info--title text-left p-0">Email</label>
                            <input type="email" 
                                class="form-control display-inline-block" v-model="user.email" placeholder="Nhập Email">
                            <div class="invalid-feedback" style="display:block" v-if="errors.email">{{errors.email[0]}}</div>
                        </div>
                        <div align="center" class="signin__info signin__info--phone pb-2 d-flex align-self-baseline bg-module-middle wow animate__fadeInUp" data-wow-duration="2s">
                            <label class="col-md-3 moudle__info--title text-left d-flex p-0">Số Điện Thoại&nbsp;<p class="text-danger">(*)</p></label>
                            <a-input
                                v-decorator="[
                                'phone',
                                {
                                    rules: [{ required: true, message: 'Please input your phone number!' }],
                                },
                                ]"
                                v-model="user.phone"
                                style="width: 80%">
                                <a-select
                                slot="addonBefore"
                                v-decorator="['prefix', { initialValue: '86' }]"
                                style="width: 70px"
                                >
                                <a-select-option value="86">
                                    +86
                                </a-select-option>
                                <a-select-option value="87">
                                    +87
                                </a-select-option>
                                </a-select>
                            </a-input>
                            <div class="invalid-feedback" style="display:block" v-if="errors.phone">{{errors.phone[0]}}</div>
                        </div>
                        <a-form-item label="Mật Khẩu" has-feedback validate-status="success" :style="{ display:'flex'}" class="pb-2">
                            <a-input-password placeholder="Nhập mật khẩu" v-model="user.password"/>
                            <div class="invalid-feedback" style="display:block" v-if="errors.password">{{errors.password[0]}}</div>
                        </a-form-item>
                        <div align="center" class="signin__info signin__info--date pb-2 d-flex align-self-baseline bg-module-middle wow animate__fadeInUp" data-wow-duration="2s">
                            <label class="col-md-3 moudle__info--title text-left d-flex p-0">Giới Tính&nbsp;<p class="text-danger">(*)</p></label>
                            <el-radio-group v-model="user.gender" size="medium">
                                <el-radio border value="0" label="Nam"></el-radio>
                                <el-radio border value="1" label="Nữ"></el-radio>
                            </el-radio-group>
                        </div>
                        <div class="invalid-feedback" style="display:block" v-if="errors.gender">{{errors.gender[0]}}</div>
                        <a-form-item label="Ngày Sinh" :style="{ display:'flex'}" class="pb-2">
                            <a-date-picker v-decorator="['date-picker', config]" format="DD-MM-YYYY" v-model="user.birthday"/>
                        </a-form-item>
                    </div>
                    <div class="form-group row form-group--center wow animate__fadeInUp" data-wow-duration="2s" style="margin: 0">
                        <div align="center" class="signin__info col-md-9 offset-md-3 bg-module-middle wow animate__fadeInUp" data-wow-duration="2s">
                            <div class="pretty p-default p-round p-thick mr-3 d-flex align-items-center">
                                <input type="checkbox" name="gender" class="mr-3" />
                                <div class="state">
                                <label>Bạn cam kết những thông vừa nhập là chính xác</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9 offset-md-3 form-group pl-0 pr-0">
                            <button type="submit" class="btn btn-submit d-flex align-items-center justify-content-center" style="width: 100%;background: #D33B33;border: none;height: 45px;border-radius: 45px;font-weight: 600;color:#fff;" href="#">Tạo Tài Khoản</button>
                            <router-link class="small" :to="{name:'user-login'}">Đăng nhập</router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
		
	</div>
</template>

<script>
import * as user from '../../../services/user_service';
export default {
    data()
    {
        return{
            errors:{},
            user:{
                fullname:'',
                name:'',
                email:'',
                password:'',
                gender:'',
                birthday:''
            },
            config: {
                rules: [{ type: 'object', required: true, message: 'Please select time!' }],
            },
        }
    },
    mounted()
    {

    },
    created()
    {

    },
    methods:{
        sign_up: async function()
        {
             try{
                
                    await user.signup(this.user);
                    this.$message.success(
                        'Đăng ký tài khoản thành công',
                        2,
                    );
                    setTimeout(() => {
                         this.$router.push('/user-login');
                    }, 2000); 
                    this.error={};
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

<style>

</style>