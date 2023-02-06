<script setup lang="ts">
import useUtil from '@/composables/hd/useUtil'
import { ElMessage } from 'element-plus'
import {login} from '@/api/login'
import useAuth from '@/composables/useAuth'
import { reactive } from 'vue'
const { loginCallback,isLogin } = useAuth()
// import { loginCallback } from '@/composables/useAuth'
const { request } = useUtil()
const form = reactive({ name: 'admin', password: 'admin' })
//请自行完善逻辑
const onSubmit = request(async () => {
  if (!form.name || !form.password) return ElMessage.error('帐号和密码不能为空')
  const {data} = await login(form)
  // console.log(data)
  loginCallback(data.token)
  if(isLogin()) location.href = '/'
})
</script>

<template>
  <form class @submit.prevent="onSubmit">
    <div class="w-[720px] bg-gray-50 md:grid grid-cols-2 rounded-md shadow-md overflow-hidden">
      <div class="p-6 flex flex-col justify-between">
        <div>
          <h2 class="text-center text-gray-700 text-lg mt-3">用户登录</h2>
          <div class="mt-8">
            <HdFormInput v-model="form.name" placeholder="请输入手机号" />
            <HdError name="mobile" />
            <HdFormInput
              v-model="form.password"
              class="mt-3"
              type="password"
              placeholder="请输入登录密码"
              v-clearError="'password'" />
            <HdError name="password" />
          </div>
          <HdFormButton class="w-full mt-3 primary">登录</HdFormButton>
        </div>
      </div>
      <div class="hidden md:block relative">
        <img src="/images/login.jpg" class="absolute h-full w-full object-cover" />
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  @apply flex justify-center items-start md:items-center p-5;
}
</style>
