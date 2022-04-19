<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">{{$store.state.position}}美团</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">{{$store.state.position}}{{$route.params.name}}</a></el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
</style>