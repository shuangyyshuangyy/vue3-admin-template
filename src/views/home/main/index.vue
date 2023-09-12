<template>
  <router-view v-slot="{ Component }">
    <Transition
      enter-active-class="animate__animated animate__lightSpeedInRight"
    >
      <component :is="Component" v-if="!hidden" />
    </Transition>
  </router-view>
</template>
<script setup lang="ts">
import { useNavStore } from '@/store/modules/use-nav-store';

const hidden = ref(false);
const navStore = useNavStore();
watch(
  () => navStore.refresh,
  async () => {
    hidden.value = true;
    await nextTick();
    hidden.value = false;
    //同样效果
    // nextTick(() => {
    //   hidden.value = false;
    // });
  },
);
</script>
<style scoped></style>
