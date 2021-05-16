<template>
  <div class="layout-container">

    <router-view></router-view>

    <!-- tabbar start -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="friends-o">视频</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- tabbar end -->
  </div>
</template>

<script>
export default {
  data () {
    return { active: 0 }
  }
}
</script>

<style></style>
