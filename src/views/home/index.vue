<template>
  <h1>{{ msg }}</h1>
  <h1>{{ $store.state }}</h1>
  <h1>{{ $store.state.count }}</h1>
  <el-button type="primary" @click="goAlert"> ElementPlus </el-button>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  props: {
    // msg: {
    //   type: String,
    //   required: true
    // }
  },
  data() {
    return {
      msg: 'msg',
    }
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
  methods: {
    goAlert() {
      console.log(1)
    },
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
