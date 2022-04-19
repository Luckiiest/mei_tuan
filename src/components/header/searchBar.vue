<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3"
              class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
             alt="美团">
      </el-col>
      <el-col :span="15"
              class="center">
        <div class="wrapper">
          <el-input v-model="searchWord"
                    placeholder="搜索商家或地点"
                    @focus="focus"
                    @blur="blur"
                    @input="input"></el-input>
          <el-button type="primary"
                     icon="el-icon-search"></el-button>
          <dl class="hotPlace"
              v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList"
                :key="index">
              <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>

          </dl>
          <dl class="search-list"
              v-if="isSearchList">
            <dd v-for="(item,index) in searchList"
                :key="index">
              <router-link :to="{name: 'goods', params: {nmae: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#"
             v-for="(item,index) in suggestList"
             :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data () {
    return {
      searchWord: '',
      // 是否展示热门搜索
      isFocus: false,
      // 热门数据
      hotPlaceList: [],
      // 搜索数据
      searchList: [],
      // 建议数据
      suggestList: [],
    }
  },
  // 获取数据
  created () {
    api.getSearchHotWords().then((res) => {
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    })
  },
  computed: {
    isHotPlace () {
      return this.isFocus && !this.searchWord
    },
    isSearchList () {
      return this.isFocus && this.searchWord
    },
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      setTimeout(() => {
        this.isFocus = false
      }, 200)
    },
    input () {
      let val = this.searchWord;
      api.getSearchList().then(res => {
        this.searchList = res.data.data.list.filter((item, index) => {
          return item.indexOf(val) > -1;
        })
      })
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/css/public/header/search.scss';
</style>
