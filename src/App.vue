<template>
  <div class="box"><h1>我是APP</h1></div>
  <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
  <el-button type="success" size="default" :icon="Edit">编辑按钮</el-button>
  <el-pagination background layout="prev, pager, next" :total="1000" />

  <div class="demo-pagination-block">
    <div class="demonstration">All combined</div>
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  <test></test>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Plus, Edit } from '@element-plus/icons-vue';
import test from '@/components/test.vue';

const currentPage4 = ref(4);
const pageSize4 = ref(100);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
</script>
<style scoped lang="scss">
.box {
  width: 600px;
  height: 600px;
  background: #000;
  h1 {
    color: rgb(253, 252, 252);
  }
}
</style>
