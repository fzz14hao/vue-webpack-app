<template>
    <div class="page">
        我是首页
        <router-link :to="'user'">用户</router-link>

        <ProductList/>
        <hr>
        <ShoppingCart/>
    </div>
</template>

<script>
  import ProductList from '../components/ProductList.vue'
  import ShoppingCart from '../components/ShoppingCart.vue'

  export default {
    name: 'IndexPage',
    components:{
      ProductList,
      ShoppingCart
    },
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    .page {
        font-size: 14px;

        a {
            color: #FF0000;
        }
    }

</style>
