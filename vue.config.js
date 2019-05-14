module.exports = {
  // ... more configs

  /* less 变量覆盖，用于自定义 ant design 主题 */
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#F5222D',
          'link-color': '#F5222D',
          'border-radius-base': '4px'
        },
        javascriptEnabled: true
      }
    }
  }
};
