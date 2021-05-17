const KEY_TOKEN = 'toutiao_user_key'

export function getToken () {
  return window.localStorage.getItem(KEY_TOKEN)
}

export function setToken (token) {
  return window.localStorage.setItem(KEY_TOKEN, token)
}

export function removeToken () {
  return window.localStorage.removeItem(KEY_TOKEN)
}
