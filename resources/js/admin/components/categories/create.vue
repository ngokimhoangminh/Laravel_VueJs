<template>
  <div class="d-block ">
        <form>
            <div class="form-group">
                <label for="name">Danh Mục </label>
                <input type="text" id="name" class="form-control" 
                placeholder="Nhập danh mục..." 
                v-model="categoryData.name" >
                <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
            </div>
            <div class="form-group">
                <label for="image">Chọn Hình Ảnh </label>
                <input type="file" ref="fileupload" @change="onFileChange" class="form-control" id="image" >
                <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
            </div>
            <div class="mt-2" id="preview">
                    <img class="w-50" v-if="url" :src="url"/>
                </div>
            <hr>
        </form>    
    </div>
</template>

<script>
import * as categoryService from '../../services/category_service';
export default {
    data(){
        return {
            categoryData:{
                name:'',
                image:''
            },
            url:'',
            errors:{},
        }
    },
    methods:{

        onFileChange:function(e)
        {
            const file=e.target.files[0];
            this.url=URL.createObjectURL(file);
        },
        submit:async function() {
            let formData=new FormData();
            formData.append('name',this.categoryData.name);
            if(document.getElementById('image').files[0])
            {
                formData.append('image',document.getElementById('image').files[0]);
            }
            try{
                this.Reset();
                return await categoryService.createCategory(formData);
                
            }catch(error)
            {
                switch(error.response.status)
                {
                    case 422:
                        this.errors=error.response.data.errors;
                    default:
                        this.flashMessage.error({
                        message: 'Some error occurred, Please try agian!',
                        time:4000
                        });
                        break;
                }
            }
        },
        Reset()
        {
            this.categoryData.name="";
            this.$refs.fileupload.value="";
            this.url="";
        },
    }
}
</script>

<style>

</style>