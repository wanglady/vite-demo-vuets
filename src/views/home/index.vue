<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
  <h1>{{ readersNumber }}</h1>
  <h1>{{ book }}</h1>
  <h1>{{ book.title }}</h1>
  <span v-bind:title="message">
    鼠标悬停几秒钟查看此处动态绑定的提示信息！
  </span>
  <el-button type="primary" @click="goAlert"> ElementPlus </el-button>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  props: {},
  data() {
    return {
      msg: 'msg',
      message: 'You loaded this page on ' + new Date().toLocaleString(),
      count: '', //注意这一块
    }
  },
  setup: () => {
    const store = useStore()
    console.log(store, 'store')
    const readersNumber = ref(0)
    const book = reactive({ title: 'Vue 3 Guide' })
    const router = useRouter()
    const toLogin = () => {
      router.push({
        name: 'login',
      })
    }
    // expose to template
    return {
      store,
      readersNumber,
      book,
      toLogin,
    }
  },
  mounted() {
    this.count = this.store.state.count
  },
  methods: {
    goAlert() {
      this.store.commit('increment', 19)
      this.count = this.store.state.count
      this.msg = 'vue3.0'
      this.toLogin()
    },
  },
})
</script>

<style scoped></style>
