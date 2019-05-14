<h1 id="top">Table 组件使用常见情况</h1>

- [如何自定义渲染列数据](#custom-render-row)
- [如何把后端传递的时间格式化成自己想要的格式](#date-format)
- [点击行高亮](#row-clicked-highlight)
- [表格斑马纹](#table-stripe)
- [列内容不换行,太长了怎么办?](#table-cell-tooltip)
- [如何显示一列 index 序列的列](#table-row-index)
- [如何显示分页总数](#table-total-page)

```vue
<template>
  <div>
    <a-table :data-source="[]">
      <template slot="">
      </template>
    </a-table>
  </div>
</template>
```