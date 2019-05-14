<h1 id="top">Ant Design 样式覆盖</h1>

这里介绍使用 Vue-CLI3 的常用样式覆盖方案，原理上是使用 less 提供的 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 的方式进行覆盖变量。

首先找到项目根目录下的 `vue.config.js` 如果文件不存在，可手动创建
配置项内容如下，我们的主要改动在 `css` 配置节点下：

```js
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
  /* less 变量覆盖 结束 */
};

```

> 需要注意的是 `javascriptEnabled: true` 一定不能漏掉！否则启动编译时， less 模块会报错。



以下是一些最常用的通用变量，所有样式变量可以在 [这里](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) 找到。

```less
@primary-color: #1890ff; // 全局主色
@link-color: #1890ff; // 链接色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #f5222d; // 错误色
@font-size-base: 14px; // 主字号
@heading-color: rgba(0, 0, 0, 0.85); // 标题色
@text-color: rgba(0, 0, 0, 0.65); // 主文本色
@text-color-secondary : rgba(0, 0, 0, .45); // 次文本色
@disabled-color : rgba(0, 0, 0, .25); // 失效色
@border-radius-base: 4px; // 组件/浮层圆角
@border-color-base: #d9d9d9; // 边框色
@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
```

[回到首页](/README.md) | [▲ 回到顶部](#top)