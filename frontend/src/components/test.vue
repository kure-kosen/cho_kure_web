<template>
  <div>
    {{ message }}
    <button @click="goToRoot">go to root</button>
    <ol v-for="i in 5"><!-- "i" is defined but never used. -->
        <li>item</li>
    </ol>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message: 'hoge'
      }
    },
    methods: {
      goToRoot: function () {
          this.$router.push('/')
      }
    }
  }
</script>

<style>
</style>
