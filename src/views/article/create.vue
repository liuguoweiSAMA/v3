<script setup lang="ts">
import  useArticle from '@/composables/useActicle';
import  useCategory from '@/composables/useCategory';
// import router from '@/router';
// import {ref} from 'vue'
// const content = ref('')
const {add,find, article} = useArticle()
const { all, categories } = useCategory()

await all()
const articleRf = ref<any>({
    title: '',
    content: '',
    categoryId: ''
})
const router = useRouter()
const route = useRoute()
const onsubmit = async()=>{
    try{
        await add(articleRf.value)
        router.push('/')
    }catch(error){}
    
}
const id = route.params.id
const articleInfo = async ()=>{
    await find(+id)
    articleRf.value = article.value
    // articleRf = article.value
    console.log(article)
}
if(id){
    await articleInfo()
}
</script>

<template>
  <div class="mt-3;">
    <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-3">
        <el-select v-model="articleRf.categoryId" value-key="" placeholder="请选择栏目" clearable filterable @change="">
            <el-option v-for="item in categories"
                :key="item.id"
                :label="item.title"
                :value="item.id">
            </el-option>
        </el-select>
        
        <template #header>发表文章</template>
        <el-input v-model="articleRf.title" placeholder="请输入标题" class="mb-2" clearable @change=""/>
        <HdWangEditor v-model="articleRf.content" :height="300"></HdWangEditor>
        <!-- {{ article }} -->
        <el-button class="mt-3" type="primary" size="default" @click="onsubmit">保存提交</el-button>
    </el-card>
   
    
  </div>
</template>

