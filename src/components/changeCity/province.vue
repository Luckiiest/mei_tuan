<template>
  <div class="m-iselect">

    <span class="name">按省份选择:</span>
    <m-select :list="provinceList"
              title="省份"
              :value="province"
              :showWrapperActive="provinceActive"
              @change_active="changeProvinceActive"
              @change="changeProvince"
              :className="province" />
    <m-select :list=" cityList"
              title="城市"
              :value="city"
              :showWrapperActive="cityActive"
              @change_active="changeCityActive"
              @change="changeCity"
              :dispabled="cityDisabled"
              className="city" />
    <span>直接搜索：</span>
    <el-select v-model="searchWord"
               filterable
               remote
               reserve-keyword
               placeholder="请输入关键词"
               :remote-method="remoteMethod"
               :loading="loading">
      <el-option v-for="item in searchList"
                 :key="item"
                 :label="item"
                 :value="item">
      </el-option>
    </el-select>
  </div>
</template>


<script>
import MSelect from './select.vue'
import api from '@/api/index.js'
var provicneItem = require('@/assets/api/cityList.json')


export default {
  data () {
    return {
      province: '省份',
      city: '城市',
      cityList: [
        //'哈尔滨', '佳木斯', '牡丹江', '鹤岗'
      ],
      provinceList: [], // 省份列表
      cityActive: false,
      provinceActive: false,
      searchList: ['山东', '甘肃', '江苏', '北京', '云南', '海南', '浙江', '上海', '天津'],
      searchWord: '',
      loading: false,
      cityDisabled: true//
    }
  },
  components: {
    MSelect,
  },
  created () {
    // fastmock接口
    /* api.getProvinceList().then(res => {
      console.log(res);
      this.provinceList = res.data.data.map(item => {
        item.name = item.provinceName;
        return item;
      });
    }) */

    // 本地json
    this.provinceList = provicneItem.map(item => {
      item.name = item.provinceName;
      return item;
    })
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    changeProvince (item) {
      this.cityDisabled = false;
      this.province = item.name;
      this.cityList = item.cityInfoList
    },
    changeCity (item) {
      this.city = item.name;
      this.$store.dispatch('setPosition', item)
      this.$router.push({ name: 'index' })
    },
    remoteMethod (val) {
      // 请求后端接口
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/css/changeCity/iselect.scss';
</style>