<template>
  <div>
      <div class="banner">
          <el-image
            style="width: 100px; height: 100px"
            :src="'assets/admin/uploads/'+DCategory.image">
        </el-image>
      </div>
       <div class="content">
          <div class="title_event">
              <h4>{{DCategory.name}}</h4>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    props: {
        DCategory: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style scoped>
.ant-modal-body{
    text-align: center;
}

</style>