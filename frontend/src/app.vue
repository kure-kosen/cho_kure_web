<template>
  <div>
    <router-link to='/test'>go to test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
