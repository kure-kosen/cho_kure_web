<template>
  <div class="pusher">
    <div class="ui container news-contents">
      <h2 class="ui header">新着情報</h2>
      <div class="ui items" v-for="radio in newRadios">
        <new-item
          :image-path="radio.image"
          :item-path="radio.itemPath"
          type="radio"
          :title="radio.title"
          :description="radio.description"
          :date="radio.published_at">
        </new-item>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      newRadios: [],
    }
  },
  mounted: function () {
    var that = this
    this.axios.get('api/v1/radios')
      .then(function (response) {
        that.newRadios = response.data
        console.log(that.newRadios)
      })
      .catch( function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>

.ui.black.segment {
  background-color: #999999;
  padding-top: 80px;
}

h2.ui.header {
  font-size: 1.28571429em;
}

.news-contents {
  padding-top: 80px;
  padding-bottom: 40px;
}
</style>
