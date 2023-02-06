import { http } from "@/plugins/axios"

export function getArticleList(page = 1, cid?: any) {
    // const args = args?.category ? args.category : {}
    // let arg = args?.category ? args : arg
    // console.log(arg)
    console.log(cid)
    // + Object.entries(args).map(([key, value]) => key + '=' + value).join('&')
    const url = `article?page=${page}&` + (cid ? `category=${cid}` : '')
    return http.request<ArticleModel, ResponsePageResult<ArticleModel>>({
        url
    })
}
export function getArticle(id: number) {
    return http.request<ArticleModel>({
        url: `article/${id}`
    }).then((r) => r.data)
}
export async function addArticle(data: any) {
    return http.request({
        url: 'article',
        method: 'POST',
        data,
    })
}
export async function editArticle(id: number, data: any) {
    return http.request({
        url: `article/${id}`,
        method: 'PATCH',
        data,
    })
}