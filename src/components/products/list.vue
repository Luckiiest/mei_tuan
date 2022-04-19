<template>
  <div class="m-product-list">
    <ul>
      <li v-for="(item) in nav"
          :key="item.key"
          :class="{'s-nav-active': item.active, 's-price': item.key=='s-price'}">
        {{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="(item,index) in productList"
            :key="index"
            :meta="item" />
    </el-row>
  </div>
</template>

<script>
import Item from "./item.vue"
import api from '@/api/index.js'
export default {
  data () {
    return {
      nav: [{
        key: 's-default',
        name: "智能排序",
        active: true
      }, {
        key: "s-price",
        name: "价格最低",
        active: false
      }, {
        key: "s-score",
        name: "人气最高",
        active: false
      }, {
        key: "s-comment",
        name: "评价最高",
        active: false
      }],
      productList: [
        // {
        //   'image': 'https://p1.meituan.net/ugcpic/a0aaa22713c14de64a018952789ca581@272w_154h_1e_1c',
        //   title: "火鸡老店",
        //   type: "food",
        //   score: 4.1,
        //   commentNum: 0,
        //   comment: [{
        //     username: 'xxx',
        //     evalaute: "好吃"
        //   }],
        //   tab: ['火锅', '沙河'],
        //   address: '昌平区小汤山尚信村沿温榆河畔北岸向西3.5公里',
        //   'avg_price': 64,
        //   'deal_items': [{
        //     'title': '火鸡宴,建议10-14人使用',
        //     'price': '909',
        //     'counter_price': 1150,
        //     'saleNum': 0,
        //     "price_type": "元"
        //   }]
        // }
      ]
    }
  },
  created () {
    api.getProductsList().then(res => {
      this.productList = res.data.data;
    })
  },
  components: {
    Item
  }
}
</script>

<style lang='scss'>
</style>