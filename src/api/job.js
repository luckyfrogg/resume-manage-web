import {fetchPost,fetchGet,uploadFile} from '@/http/axios'
export function uploadResume(formData){
    return uploadFile('/api/f/uploadResume',formData)
}