<template>
  <div class="container">
    <!-- pnpm add @vue/runtime-core 让element-plus组件获得类型提示 -->
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="formState.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="formState.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="default" class="btn">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';
const formState: {
  username: string;
  password: string;
} = reactive({
  username: 'admin',
  password: '111111',
});
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/background.jpg');
  .form {
    position: relative;
    top: 30vh;
    width: 75%;
    background: url('@/assets/images/login_form.png');
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
