<template>
  <div class="layout-container">

    <router-view />

    <!-- tabbar start -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/video" icon="video-o" badge="2">视频</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
    <!-- tabbar end -->
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex',
  components: {},
  props: [],
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted () {},
  created () {}
}
</script>

<style></style>
