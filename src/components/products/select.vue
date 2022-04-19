<template>
  <div v-document-click="documentClick"
       class="m-product-select">
    <dl @click="ShowInfo"
        class="tab">
      <dt class="tab-title">
        {{name}}
      </dt>
      <dd v-if="isShow">
      <dt class="select-title">{{name}}</dt>
      <span v-for="(item,index) in list"
            :key="index">
        {{item.name}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["name", "list"],
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    ShowInfo (e) {
      e.stopPropagation();
      this.isShow = !this.isShow
    },
    documentClick (e) {
      this.isShow = false;
    }
  }
}
</script>

<style>
</style>