<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="注册 / 登录"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- login form start -->
    <van-form
    :show-error="false"
    :show-error-message="false"
    @submit="onSubmit"
    @failed="onFailed"
    >
      <van-field
        v-model="user.mobile"
        type="tel"
        icon-prefix="toutiao"
        left-icon="shouji"
        placeholder="请输入手机号"
        :rules="rulesForm.mobile"
      />
      <van-field
        v-model="user.code"
        center
        clearable
        type="number"
        icon-prefix="toutiao"
        left-icon="yanzhengma"
        placeholder="请输入短信验证码"
        :rules="rulesForm.code"
      >
        <template #button>
          <van-button color="#4e4e4e" size="small" native-type="button">
            发送验证码
          </van-button>
        </template>
      </van-field>
      <div style="margin: 16px">
        <van-button color="#3296fa" block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <!-- login form end -->
  </div>
</template>

<script>
import { toast } from 'vant'
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  components: {},
  props: [],
  data () {
    return {
      user: {
        mobile: '13838381438',
        code: '246810'
      },
      rulesForm: {
        mobile: [
          { required: true, message: '手机号不能为空' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号错误，请重新输入' }
        ],
        code: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码错误，请重新输入' }
        ]
      }
    }
  },
  computed: {},
  methods: {
    onClickLeft () {
      toast('返回')
    },
    onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },
    onSubmit () {
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        message: '登录中...'
      })

      login(this.user).then((response) => {
        console.log(response)
        this.$toast.success('登录成功')
      }).catch((error) => {
        console.log(error)
        this.$toast.fail('登录失败')
      })
    }
  },
  watch: {},
  mounted () {},
  created () {}
}
</script>

<style></style>
