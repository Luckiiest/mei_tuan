<template>
  <div class="m-istyle">
    <dl @mouseover="over"
        :class="nav.class">
      <dt>{{ nav.title }}</dt>
      <dd v-for="(item, index) in nav.list"
          :key="index"
          :class="{ active: kind == item.tab }"
          :data-type="item.tab">{{ item.text }}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData"
          :key="index">
        <el-card :body-style="{ padding: '0px' }"
                 shadow="never">
          <img :src="item.image"
               class="image" />
          <div class="cbody product-info">
            <p class="title"
               :title="item.title">{{ item.title }}</p>
            <p class="sub-title"
               :sub-title="item.sub_title">{{ item.sub_title }}</p>
            <p class="price-number numfont price"
               v-if="item.rentNum && item.price_info.current_price"><span class="price-icon">￥</span>{{ item.price_info.current_price }}</p>
            <p class="price-number numfont price"
               v-else-if="!item.rentNum"><span class="price-icon">￥</span>抢光了</p>
            <p class="price-number numfont price"
               v-else><span class="price-icon">￥</span>{{item.price_info.avg_price}}/{{item.price_info.unit}}</p>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  props: ['nav'],
  data () {
    return {
      kind: 'all',
      resultsData: [],
      /* list: [
        {
          image: 'https://img.meituan.net/phoenix/2c119b60b48798fc5ade513308aead0b2735823.jpg@740w_416h_1e_1c',
          title: 'N1糖果治愈/VIP私人影院/电动床垫/自助入住/可做饭餐具齐/西青大学城/姚村夜市',
          sub_title: '整套1居室·可住3人 | 西青大学城',
          price_info: {
            current_price: 100,
            old_price: 36,
            avg_price: null,
            unit: null,
          },
          rentNum: 10,
          address: '崇文门',
        },
        {
          image: 'http://p0.meituan.net/iphoenix/c22873194298b402746274d5ae7484c81729952.jpg@740w_416h_1e_1c',
          title: '轻选/精致大床（不允许做饭）',
          sub_title: '万象城/高新区/奥体中心',
          price_info: {
            current_price: 100,
            old_price: 36,
            avg_price: null,
            unit: null,
          },
          rentNum: 0,
          address: '崇文门',
        },
        {
          image: 'https://p0.meituan.net/horus/bd3993d9e815c499bdaf9aae034a2d3e371896.png@740w_416h_1e_1c',
          title: 'N1糖果治愈/VIP私人影院/电动床垫/自助入住/可做饭餐具齐/西青大学城/姚村夜市',
          sub_title: '整套1居室·可住3人 | 西青大学城',
          price_info: {
            current_price: 18,
            old_price: 36,
            avg_price: 10,
            unit: '人',
          },
          rentNum: 10,
          address: '崇文门',
        },
        {
          image: 'https://img.meituan.net/iphoenixhd/b0258f85db5d8f2fdebb040118d348e83307115.jpg@740w_416h_1e_1c',
          title: '【拾光忆】奥城落地窗公寓，简约风格近地铁',
          sub_title: '整套1居室·可住3人 | 西青大学城',
          price_info: {
            current_price: 100,
            old_price: 36,
            avg_price: null,
            unit: null,
          },
          rentNum: 10,
          address: '崇文门',
        },
        {
          image: 'http://p0.meituan.net/iphoenix/a75d6e320e5edb0eed4040b5f85ed4ec1470200.jpg@740w_416h_1e_1c',
          title: '舒心青年公寓（空港店）-【滨海机场】近肿瘤医院独立燃气大套房近欢乐谷近奥特莱斯《近机场十分钟》',
          sub_title: '整套1居室·可住3人 | 西青大学城',
          price_info: {
            current_price: 100,
            old_price: 36,
            avg_price: null,
            unit: null,
          },
          rentNum: 10,
          address: '崇文门',
        },
        {
          image: 'https://p0.meituan.net/horus/bd3993d9e815c499bdaf9aae034a2d3e371896.png@740w_416h_1e_1c',
          title: '西青区张家窝镇杨伍庄盈水园暖心大床',
          sub_title: '整套1居室·可住3人 | 西青大学城',
          price_info: {
            current_price: 100,
            old_price: 36,
            avg_price: null,
            unit: null,
          },
          rentNum: 10,
          address: '崇文门',
        },
      ], */
    }
  },
  created () {
    api.getResultByKeyWords().then(res => {
      this.resultsData = res.data.data;
    })
  },
  methods: {
    over (e) {
      // console.log(etarget)
      let dom = e.target
      let tagName = dom.tagName.toLowerCase()
      // console.log(tagName)
      if (tagName != 'dd') {
        return false
      }
      this.kind = dom.getAttribute('data-type')
      // 动态获取数据 ajax请求
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/css/index/artistic.scss';
</style>
