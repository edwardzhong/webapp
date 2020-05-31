import Cookies from 'js-cookie'
import { config } from '~/utils/config'

export function getToken() {
  if (process.env.NODE_ENV === 'development') {
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9qZC1tYWxsLXRlc3QuaDUuc2lucmV3ZWIuY29tXC9hcGlcL2F1dGhvcml6ZSIsImlhdCI6MTU5MDQ1NzA3NSwiZXhwIjoxNTkwNTQzNDc1LCJuYmYiOjE1OTA0NTcwNzUsImp0aSI6IjZObFE4cjgydVhlT0FLMzIiLCJzdWIiOjE2LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.PBqzyV6ov09J44JR3Ij2oxdtNlGTP1FUANW0o2DQ7FE'
  } else {
    return Cookies.get(config.tokenKey)
  }
}

export function setToken(token) {
  const expires = 11 / 24
  return Cookies.set(config.tokenKey, token, {
    expires
  })
}

export function removeToken() {
  return Cookies.remove(config.tokenKey)
}
