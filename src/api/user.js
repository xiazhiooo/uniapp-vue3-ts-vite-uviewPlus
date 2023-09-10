// 用户信息
import {
	request
} from '@/utils/request.js';

// 用户登录
export const apiPostUserLogin = (data) => {
	return request({
		url: '/userLogin',
		method: 'POST',
		data: data
	})
}

// 新增用户
export const apiPostUserADD = (options) => {
  return request({
    url: '/userADD',
    method: 'POST',
    data: options
  })
}

// 修改用户资料
export const apiPostUserModify = (options) => {
  return request({
    url: '/userModify',
    method: 'POST',
    data: options
  })
}

