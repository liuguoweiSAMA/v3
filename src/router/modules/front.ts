import indexVue from '@/layouts/front/index.vue'
import homeVue from '@/views/article/index.vue'
import articleVue from '@/views/article/show.vue'
import categoryVue from '@/views/category/index.vue'
import createVue from '@/views/article/create.vue'
import { RouteRecordRaw } from 'vue-router'
export default {
  path: '/',
  component: indexVue,
  children: [
    {
      name: 'article.index',
      path: '',
      component: homeVue,
    },
    {
      name: 'article.show',
      path: '/article/:id',
      component: articleVue,
    },
    {
      name: 'category.index',
      path: '/category/:cid',
      component: categoryVue,
    },
    {
      name: 'article.crete',
      path: 'article',
      component: createVue,
    },
    {
      name: 'article.editor',
      path: 'articleEditor/:id',
      component: createVue,
    },
  ],
} as RouteRecordRaw
