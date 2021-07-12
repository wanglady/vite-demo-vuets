<template>
  <div class="loginMain">
    <h1>系统登录</h1>
    <el-form class="loginForm" :model="formLabelAlign">
      <el-form-item>
        <el-input v-model="formLabelAlign.name" placeholder="用户名">
          <template #prefix>
            <i class="el-input__icon el-icon-search"></i>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="formLabelAlign.region"
          placeholder="密码"
          prefix-icon="el-icon-search"
          show-password
        >
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Login',
  props: {},
  data() {
    return {
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
      },
    }
  },
  setup: () => {},
})
</script>

<style lang="scss" scoped>
.loginMain {
  width: 100%;
  height: 100vh;
  color: #fff;
  background-color: rgb(58, 63, 81);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .loginForm {
    width: 450px;
    margin-top: 50px;
  }
}
</style>
