<template>
    <div class="user-page">
        我是用户
        <router-link :to="'index'">首页</router-link>
    </div>
</template>

<script>
  export default {
    name: 'UserPage',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .user-page {
        font-size: 30px;
    }

</style>
