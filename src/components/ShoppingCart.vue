<template>
  <div class="cart">
    <h2>购物车</h2>
    <p v-show="!products.length"><i>请添加一些产品到购物车</i></p>
    <ul>
      <li
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price  }} x {{ product.quantity }}
      </li>
    </ul>
    <p>数量: {{ total  }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">结算</button></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      // 结账的状态
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts', // 购物车的商品
      total: 'cartTotalPrice' // 购物车商品的总价格
    })
  },
  methods: {
    // 结账
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>
