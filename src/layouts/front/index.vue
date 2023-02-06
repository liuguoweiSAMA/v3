<script lang="ts" setup>
import useCategory from '@/composables/useCategory';
// import userArticle from '@/composables/useActicle'
const { all, categories } = useCategory()
// const { all: getArticleList} = userArticle()
await all()
</script>
<template>  
  <main class="front">
      <div class="log" @click="$router.push({name:'article.index'})">
        <img src="../../../public/images/logo.png" class="w-[500px]"  alt="">
      </div>
      <nav>
        <section>
            <div v-for="category of categories" :class="{active: +$route.params.cid == category.id}" :key="category.id" @click="$router.push({name:'category.index',params:{cid:category.id}})">
            {{ category.title }}
          </div>
        </section>
        <section>
          <el-button type="primary" size="default" @click="$router.push({name:'article.crete'})">发表文章</el-button>
          <el-button type="success" size="default" @click="$router.push({name:'login'})">管理员登陆</el-button>
        </section>
      </nav>
    <router-view>
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
  @apply mt-5 rounded-md bg-white shadow-md mx-auto md:w-[1000px] p-5;
  .log{
    background: #ccc;
  }
  nav{
    @apply flex gap-2 items-center md:flex-row flex-col;
    section{
      @apply flex gap-2 items-center flex-wrap ;
      div{
        @apply bg-slate-200 text-gray-700 py-2 px-3 hover:shadow-lg cursor-pointer duration-300;
        &.active{
          @apply bg-orange-600 text-white;
        }
      }
      &:nth-of-type(2){
        @apply flex justify-between flex-1 mt-3 md:mt-0 ml-0;
        width: 100%;
        button{
          @apply flex-1
        }
      }
    }
  }
}
</style>