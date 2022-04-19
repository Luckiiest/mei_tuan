<template>
  <div class="category">
    <dl class="m-category">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item,index) in list"
          :key="index">
        <a :href="'#city-' + item">{{item}}</a>
      </dd>
    </dl>
    <dl :id="'city-' + index"
        class="m-category-section"
        v-for="(item,index) in cityGroup"
        :key="index">
      <dt>{{index}}</dt>
      <dd>
        <span v-for="(city) in item"
              :key="city.id"
              @click="changeCity(city)">
          {{city.name}}
        </span>
      </dd>
    </dl>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
      list: 'ABCDEFGHIJKLMNOPQLSTUVWXYZ'.split(''),
      cityList: [],
      cityGroup: {}
    }
  },
  methods: {
    changeCity () {

    }
  },
  created () {
    // 给接口划分字母类型
    var data = require("@/assets/api/cityList.json");
    var obj = {};
    data.forEach((item, index) => {
      item.cityInfoList.forEach((item, index) => {
        if (!obj[item.firstChar.toUpperCase()]) {
          obj[item.firstChar.toUpperCase()] = []
        }
        obj[item.firstChar.toUpperCase()].push(item)
      })
    })
    this.cityGroup = obj;
  },
  methods: {
    changeCity (item) {
      // console.log(item);

      this.$store.dispatch("setPosition", item);
      this.$router.push({ name: "index" })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/changeCity/category.scss';
</style>