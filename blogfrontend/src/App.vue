<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isRouterAlive: true,
      id: ''
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.name !== 'Detail') {
        this.reload()
      }
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(() => (this.isRouterAlive = true))
    }
  }
}
</script>
<style>
  html, body {
    background-color: #f6f6f6;
  }
</style>
