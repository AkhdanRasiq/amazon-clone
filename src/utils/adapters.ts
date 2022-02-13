import Axios from 'axios'

import * as UTIL from './util'


const axiosInstance = Axios.create({
  baseURL: UTIL.serverBaseUrl()
})

export function getRequest(url: string, params?: JSON, data?: JSON) {
  return axiosInstance
  .get(url, {
    params: {
      ...params
    },
    data: {
      ...data
    }
  })
  .then(res => Promise.resolve(res))
  .catch(err => Promise.reject(err))
}

export function postRequest(url: string, data?: JSON) {
  return axiosInstance
  .post(url, {
    data: {
      ...data
    }
  })
  .then(res => Promise.resolve(res))
  .catch(err => Promise.reject(err))
}
