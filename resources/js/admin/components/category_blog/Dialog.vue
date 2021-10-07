<template>
    <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose">
        <slot></slot>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleCancel">Trở lại</el-button>
            <el-button type="primary" :loading="isloading" @click="handleOK">Lưu lại</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    props: {
        title:{
            type: String,
            required: true,
        },
        dialogVisible: {
            type: Boolean,
            default: false,
        },
        isloading: {
            type: Boolean,
            default: false,
        },
    },
    data()
    {
        return{

        }
    },
    methods:{
        handleClose(done) {
            this.$confirm('Are you sure to close this dialog?')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        },
        handleCancel()
        {
            this.$emit('handleClose');
        },
        handleOK()
        {
            this.$emit('handleSubmit');
        }
    }
}
</script>

<style>

</style>