<template>
  <div class="container">
    <!-- pnpm add @vue/runtime-core 让element-plus组件获得类型提示 -->
    <el-row>
      <el-col :span="12" :xs="0" />
      <el-col :span="12" :xs="24">
        <el-form
          ref="loginFormRef"
          :model="formState"
          :rules="formRules"
          class="form"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="formState.username" />
          </el-form-item>
          <el-form-item prop="password">
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
import { FormRules } from 'element-plus';
import { getTime } from '@/utils/time';

//收集表单信息
const formState: loginData = reactive({
  username: 'admin',
  password: '111111',
});

//自定义校验password规则
const checkPassword = (
  _rule: any,
  value: string, //value:表单元素的文本内容
  callback: (arg0?: Error) => void,
) => {
  let regExp = /^[a-zA-Z0-9_]+$/; //password只能为字母数字下划线
  if (regExp.test(value)) {
    callback();
  } else {
    callback(new Error('密码错误'));
  }
};

//表单
const formRules = reactive<FormRules>({
  username: [
    //一个对象代表一条规则
    {
      required: true,
      message: '用户名不能为空',
      //失去焦点时校验
      trigger: 'blur',
    },
  ],
  password: [
    {
      min: 6,
      max: 10,
      message: '密码长度6~10位',
      trigger: 'change',
    },
    {
      validator: checkPassword,
      //内容改变时校验
      trigger: 'blur',
    },
  ],
});

const router = useRouter(); //获取路由器
const userStore = useUserStore();
const loading = ref<boolean>(false);
const loginFormRef = ref();

//对整个表单的内容进行验证
const validData = async () => {
  try {
    await loginFormRef.value.validate();
    return true;
  } catch (error) {
    return false;
  }
};

//重置表单，将其值重置为初始值，并移除校验结果
// const resetForm = () => {
//   loginFormRef.value.resetFields();
// };

//登录
const Login = async () => {
  const valid = await validData();
  if (!valid) return;
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
