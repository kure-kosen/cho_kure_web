<template>
  <div class="pusher">
    <article class="ui text container">
      <h2 class="ui header">パーソナリティ一覧</h2>
      <div class="ui link cards">
        <personality-card v-for="personality in personalities"
                          :key="personality.id"
                          :id="personality.id"
                          :name="personality.name"
                          :description="personality.description"
                          :image-path="personality.image"
                          :tags="personality.tag_list"/>
      </div>
    </article>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      personalities: []
    }
  },
  mounted: function () {
    var that = this
    this.axios.get('/api/v1/personalities')
      .then(function (response) {
        that.personalities = response.data
        console.log(that.personalities)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.ui.text.container {
  padding-top: 80px;
  padding-bottom: 40px;
}
</style>
