<template>
  <div>
    {{ message }}
    <button @click="goToRoot">go to root</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'hoge'
      }
    },
    methods: {
      goToRoot () {
          this.$router.push('/')
      }
    }
  }
</script>

<style>
</style>
