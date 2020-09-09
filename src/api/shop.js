/**
 * 数据
 */
const _products = [
  {"id": 1, "title": "商品1", "price": 530.01, "inventory": 2},
  {"id": 2, "title": "商品2", "price": 104.32, "inventory": 10},
  {"id": 3, "title": "商品3", "price": 139.99, "inventory": 5}
]

export default {
  // 获取所有商品，异步模拟 ajax
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  },

  // 结账，异步模拟 ajax
  buyProducts (products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      // 模拟可能失败的情况
      (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cb()
        : errorCb()
    }, 100)
  }
}
