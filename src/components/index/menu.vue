<template>

  <div class="m-menu">
    <div @mouseleave="menuLeave"
         class="category-nav-container">
      <div class="category-nav-title-wrapper">
        <span class="category-nav-title">全部分类</span>
        <span class="title-icon"></span>
      </div>
      <div class="category-nav-content-wrapper">
        <ul>
          <li @mouseenter="menuEnter(item)"
              v-for="(item,index) in menuList"
              :key="index"
              class="nav-li">
            <i :class="['iconfontNew',item.type]"></i>
            <span class="nav-text-wrapper">
              <a class="nav-text"
                 href="#">{{item.name}}</a>
            </span>
            <i class="nav-right-arrow"></i>
          </li>
        </ul>
      </div>
    </div>
    <div @mouseenter="detailEnter"
         @mouseleave="detailLeave"
         v-if="currentDetail"
         class="detail">
      <template v-for="(item,index) in currentDetail.items">
        <h4 :key="index">
          {{item.name}}
          <a href=""
             class="detail-more">
            更多&gt;
          </a>
        </h4>
        <span v-for="(items,index) in item.items"
              :key="items + ' _' + index">
          {{items}}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {

  data () {
    return {
      currentDetail: null,
      menuList: [],
    }
  },
  created () {
    api.getMenuList().then(res => {
      // console.log(res);
      this.menuList = res.data.data;
    })
  },
  methods: {
    menuEnter (item) {
      this.currentDetail = item
    },
    menuLeave () {
      this.timer = setTimeout(() => {
        this.currentDetail = null
      }, 20)
    },
    detailEnter () {
      clearTimeout(this.timer)
    },
    detailLeave () {
      this.currentDetail = null
    },
  },
}
</script>

<style>
</style>