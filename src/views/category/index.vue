<script setup lang="ts">
 import Articleist from '@/components/articleList.vue'
 const route =  useRoute();
</script>
<template>
  <main>
    <Articleist :cid="route.params.cid" :key="+route.params.cid"></Articleist>
  </main>
</template>
<style lang="scss" scoped>
main{
  @apply pt-8;
  section{
    @apply mt-5 flex justify-between items-center;
  }
  a{
    @apply bg-slate-200 text-gray-600 py-2 px-3 block;
  }
  aside{
    @apply text-xs text-gray-600 p-2 font-bold cursor-pointer;
  }
}
</style>