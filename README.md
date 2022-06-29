Vue v3.2.31、vue-cli v5.0.1

1、引入vant

[参考文档](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#tong-guo-npm-an-zhuang)

安装：npm i vant 或 yarn add vant

安装插件：

（1）、npm i babel-plugin-import -D

（2）、在.babelrc 或 babel.config.js 中添加配置：

```js
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

(3)、main.js引入组件

2、打包的配置

vue.config.js

```js
// 公共路径(必须有的)
  publicPath: "./",
  // 输出文件目录
  outputDir: "dist",
  // 静态资源存放的文件夹(相对于ouputDir)
  assetsDir: "assets",
  productionSourceMap: true, // 不需要生产环境的设置false可以减小dist文件大小，加速构建
```

3、官网推荐组件name是驼峰或者横线连接的，不推荐单词，这是为了和html区分。如果使用单词会报错，如
（home, login）

解决方法有俩个：

（1）、修改组件name为驼峰或者横线连接的词

（2）、在.eslintrc.js里配置，ignores里写要忽略的组件名称

```js
"vue/multi-word-component-names": ["error", {
      "ignores": ['home', 'login']
    }]
```

4、axios对取消之前的请求进行了加工，只对特定的url进行处理

5、setup内部的资源是私有的 使用defineExpose可以将资源显示暴露 供父组件调用
defineExpose({
forceUpdate
})

6、使用scroll滚动到指定位置

（1）、在要滚动到的div上添加ref (myPatientRef)

（2）、在引用scroll组件的地方添加ref (scrollRef)

（3）、调用better-scroll插件的scrollToElement方法，滚动到指定位置

this.$refs.scrollRef.scroll.scrollToElement(this.$refs.myPatientRef)

7、script Setup 可以不用手动导入defineProps、defineEmits、defineExpose、withDefaults，但会报not defined错误

解决办法：

（1）、eslint-plugin-vue升级到8以上

（2）、eslintrc.js配置

```js
env: {
    node: true,
    'vue/setup-compiler-macros': true // 新增的配置
  },
```
