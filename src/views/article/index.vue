<script setup lang="ts">
 import Articleist from '@/components/articleList.vue'
// import  useArticle from '@/composables/useActicle';
// const {all,pageResult} = useArticle()
//  await all()
</script>

<template>
  <main>
    <Articleist></Articleist>
    <!-- <section  v-for="article of pageResult?.data" :key="article.id" >
      <router-link :to="{name:'article.show',params:{id:article.id}}">
        {{ article.title }}
      </router-link>
      <aside   @click="$router.push({name:'category.index',params:{cid:article.categoryId}})">
      {{ article.category.title }}
      </aside>
    </section>
    
    <div class="mt-5 border-t border-gray-100 pt-3 ">
      <el-pagination
        @current-change="all"
        :page-sizes="[20, 40, 80, 100]"
        :page-size="pageResult?.meta.page_row"
        :total="pageResult?.meta.total" background>
      </el-pagination>
    </div> -->
  </main>
</template>

