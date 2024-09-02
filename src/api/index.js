import requests from './request'

const api_prefix = '/api/app/pub/content'
// 获取所有banner
export function getBanners() {
    return requests({
      url: `${api_prefix}/get/banners`,
      method: 'get'
    })
  }
  
// const api_prefix = '/api/admin/course'
// // 获取列表
// export function list(data) {
//     return requests({
//       url: `${api_prefix}/list`,
//       method: 'post',
//       data
//     })
//   }
// const api_prefix = '/api/admin/role'

// export function listAll(enable) {
//   return requests({
//     url: `${api_prefix}/list/all/${enable}`,
//     method: 'get'
//   })
// }