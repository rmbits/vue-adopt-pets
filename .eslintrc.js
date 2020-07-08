module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "vue/script-indent": ["error", 4, { "baseIndent": 1 }],
    // indent: ["error", 4]
    'no-tabs': 'off',
    'indent': 'off',
    'space-before-function-paren': 0,
    'no-unused-vars': 'off'
  }
}
