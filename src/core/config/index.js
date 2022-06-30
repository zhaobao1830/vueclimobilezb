// 全局配置
const config = {
  baseUrl: process.env.VUE_APP_BASE_URL || '/api/',
  stagnateTime: 60 * 60 * 1000 // 无操作停滞时间  默认1小时
}

export default config
