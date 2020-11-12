<template>
  <div id="app">
    <message>Hello Vue </message>
  </div>
</template>

<script>

import Message from './Components/Message.vue'

export default {
  name: 'app',
  components:{Message},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
