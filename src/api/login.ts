import { http } from "@/plugins/axios"
// import useStorage from '@/composables/hd/useStorage'
type ResponseData = {
    data: UserModel
    token: string
}
export async function login(data: any) {
    return await http.request<ResponseData>({
        url: `auth/login`,
        method: 'post',
        data
    })
}