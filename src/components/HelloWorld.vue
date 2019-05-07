<template>
  <div class="hello">
    <a-row>
      <a-col>hello world</a-col>
    </a-row>
  </div>
</template>

<script>
import { Row, Col } from 'ant-design-vue';
export default {
  name: 'HelloWorld',
  components: {
    aRow: Row,
    aCol: Col
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
