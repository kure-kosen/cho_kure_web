<template>
  <div>
    {{ message }}
    <button @click="goToRoot">go to root</button>
    <ul v-for="i in 5">
      <li>{{ i }} item</li>
    </ul>
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
          this.$router.push('/');
      }
    }
  }
</script>

<style>
</style>
