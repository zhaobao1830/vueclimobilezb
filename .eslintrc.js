module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true // 新增的配置
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "space-before-function-paren": 0, // 忽略空格
    "vue/script-indent": [ // script区域缩进俩格
      "error",
      2,
      {
        // script标签缩进设置
        baseIndent: 1,
        switchCase: 0,
        ignores: []
      }
    ],
    indent: ["error", 2],
    semi: ["error", "never"], // 无分号
    'camelcase': 0, // 忽略强制驼峰命名
    "no-trailing-spaces": 0, // 忽略语句后面出现的空格
    "no-use-before-define": 'off',
    "vue/multi-word-component-names": ["error", {
      "ignores": ['loading', 'home', 'login', 'ruler', 'message']
    }]
  },
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        indent: "off"
      }
    }
  ]
}
