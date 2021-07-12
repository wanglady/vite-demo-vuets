<template>
  <div class="pageHome">
    <h1>{{ count }}</h1>
    <h1>{{ readersNumber }}</h1>
    <h1>{{ book }}</h1>
    <h1>{{ book.title }}</h1>
    <div v-bind:title="message">鼠标悬停几秒钟查看此处动态绑定的提示信息！</div>
    <el-button type="primary" @click="goAlert"> 登录 </el-button>
  </div>
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

<style lang="scss" scoped>
.pageHome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
