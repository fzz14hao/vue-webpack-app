# vue脚手架

## 说明
```
 vue webpack 自定义脚手架 支持多进程打包
 vue +webpack + vue-router + vux + less
```

## 安装依赖
```
yarn install & npm install
```

### 开发模式
```
yarn run dev & npm run dev
```

### 打包
```
yarn run build & npm run build
```

###目录结构
```
│  
├── package.json
├── postcss.config.js     //自动填充css头
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── api               //api接口
│   │   ├── README.md
│   │   └── shop.js
│   ├── assets            //本地图片
│   │   └── logo.png
│   ├── components        //模板
│   │   ├── ProductList.vue
│   │   └── ShoppingCart.vue
│   ├── index.html         //模板文件
│   ├── index.js           //入口文件
│   ├── pages              //页面
│   │   ├── Index.vue
│   │   └── User.vue
│   ├── router             //路由
│   │   ├── README.md
│   │   ├── index.js
│   │   └── routes.js
│   ├── store              //store
│   │   ├── README.md
│   │   ├── index.js
│   │   └── modules        //store分模块
│   │       ├── cart.js    //购物车
│   │       └── products.js//产品列表
│   └── utils              //工具函数
│       └── README.md
├── webpack                //webpack配置
│   ├── paths.js           //目录
│   ├── webpack.common.js  //公用配置
│   ├── webpack.dev.js     //开发配置
│   └── webpack.prod.js    //生产配置
└── yarn.lock

```

### 更多配置
See [Configuration Reference](https://cli.vuejs.org/config/).
