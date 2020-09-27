import {fetchPost,fetchGet} from '@/http/axios'
export function doLogin(params){
    return fetchPost('/api/login/doLogin',params)
}