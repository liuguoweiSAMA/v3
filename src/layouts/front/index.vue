<script lang="ts" setup></script>
<template>
  <main class="front">
    <router-view>
      <div class="log">
        <img src="../../../public/images/logo.png" class="w-[500px]"  alt="">
      </div>
    </router-view>
    <!-- <RouterView v-slot="{ Component, route }">
      <template v-if="Component">
        <component :is="Component" :key="route.fullPath" class="w-full 2xl:w-page mx-auto p-3 lg:mt-5" />
      </template>
    </RouterView> -->
  </main>
</template>
<style lang="scss" scoped>
main.front{
  // background: white;
  box-shadow:mediumaquamarine;
  margin: auto;
  width: 1000px;
  padding: 5px;
  @apply mt-5 rounded-md
}
</style>