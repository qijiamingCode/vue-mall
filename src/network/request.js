import axios from 'axios'

export function request(config) {
   const instance = axios.create({
       baseURL:'接口不给看~',
       timeout:1000
   })

   instance.interceptors.request.use(config=>{
       return config
   },err=>{
       console.log(err)
   })

   instance.interceptors.response.use(config=>{
       return config
   },err=>{
       console.log(err);
       
   })

   return instance(config)
}
