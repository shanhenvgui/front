import axios from 'axios';

// 引入 NProgress CSS 和 JS
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';


// create an axios instance
const requests = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
  })

  // request interceptor
requests.interceptors.request.use(
    config => {
      NProgress.start();
      return config

    },   
  )

  // response interceptor
requests.interceptors.response.use(
    response => {
      NProgress.done();
      return response.data
     
    },
    error => {
      console.log('err' + error) // for debug
      return Promise.reject(error)
    }
  )
export default requests;

// axios.get('http://localhost:9096/api/admin/course/list')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('Error fetching course info:', error);
//   });
