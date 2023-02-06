<script setup lang="ts">
import  useArticle from '@/composables/useActicle';
const {cid} = defineProps<{
    cid?:any 
}>()
console.log(cid)
const {all,pageResult} = useArticle()
 await all(1,cid)
</script>
<template>
    <HdAnimateList tag="ul" :duration="2" :delay="0.2">
        <div >
            <section  v-for="(article,index) in pageResult?.data" :key="article.id" :data-index="index">
                <router-link :to="{name:'article.show',params:{id:article.id}}">
                    {{ article.title }}
                </router-link>
                <aside   @click="$router.push({name:'category.index',params:{cid:article.categoryId}})">
                {{ article.category.title }}
                </aside>
                </section>
                
                <!-- layout="total, prev, pager, next, jumper" -->
                <div class="mt-5 border-t border-gray-100 pt-3 ">
                <el-pagination
                    @current-change="all"
                    :page-sizes="[20, 40, 80, 100]"
                    :page-size="pageResult?.meta.page_row"
                    :total="pageResult?.meta.total" background>
                </el-pagination>
            </div>
        </div>
    </HdAnimateList>
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
    @apply text-xs text-gray-600 p-2 font-bold cursor-pointer hidden md:flex;
  }
}
</style>