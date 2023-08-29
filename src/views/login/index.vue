<template>
  <div class="container">
    <!-- pnpm add @vue/runtime-core 让element-plus组件获得类型提示 -->
    <el-row>
      <el-col :span="12" :xs="0">{{ userStore.token }}</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="formState.username" />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="formState.password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="default"
              class="btn"
              :loading="loading"
              @click="Login"
            >
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
import { reactive, ref } from 'vue';
import { useUserStore } from '@/store/modules/use-user-store';
import type { loginData } from '@/api/user/type';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import { getTime } from '@/utils/time';

//收集表单信息
const formState: loginData = reactive({
  username: 'admin',
  password: '111111',
});

//获取路由器
const router = useRouter();
const userStore = useUserStore();
const loading = ref<boolean>(false);
const Login = async () => {
  loading.value = true;
  try {
    let message = await userStore.login(formState);
    router.push('/');
    ElNotification({
      type: 'success',
      title: `Hi,${getTime()}好`,
      message,
    });
  } catch (error) {
    // console.log('error', error, typeof error);
    ElNotification({
      type: 'error',
      message: `${error}`,
    });
  } finally {
    loading.value = false;
  }
};
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
