import apiServiceConfig from '@/core/config/apiService'
import { post } from '@/core/models/axios'

export default class Person {
  /**
   * 用户登录
   * @param loginName 用户名
   * @param password 密码
   * @returns {Promise<*>}
   */
  static async login({
    loginName,
    password
  }) {
    return post(apiServiceConfig.login, {
      loginName,
      password
    })
  }
}
