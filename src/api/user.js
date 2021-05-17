import request from '@/utils/request'

export function login (data) {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'post',
    data
  })
}

export function sendSms (mobile) {
  return request({
    url: '/app/v1_0/sms/codes/' + mobile,
    method: 'get'
  })
}
