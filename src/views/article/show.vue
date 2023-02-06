<script setup lang="ts">
import  useArticle from '@/composables/useActicle';
const {article,find} = useArticle()
const router = useRoute()
const id = router.params.id
const articleId = ref({
  id:router.params.id
})
await find(+id)
// const edit = async ()=>{

// }
</script>
<template>
  <main>
    <h1>{{ article?.title }} <el-button type="primary" size="default" @click="$router.push({name:'article.editor',params:{id:articleId.id}})">编辑</el-button></h1>    
    <time>
     发表时间: {{ article?.createdAt }} &nbsp; 更新时间: {{ article?.updatedAt }}
    </time>
    <p>
      {{ article?.content }}
    </p>
  </main>
</template>
<style lang="scss">
main{
  time{
    @apply text-xs font-bold text-slate-600 mb-5 block;
  }
  h1{
    @apply mb-4 border-b border-gray-500 mt-8 text-2xl text-gray-600 p-4;
  }
  p{
    @apply text-gray-600;
  }
}
</style>