<template>
  <div class="pusher">
    <div class="ui container news-contents">
      <input v-model='query' />
      <h2 class="ui header">新着情報</h2>
      <div class="ui items" v-for="radio in filteredRadio">
        <radio-preview
          :item-id="radio.id"
          :image-path="radio.image"
          :item-path="radio.itemPath"
          type="radio"
          :title="radio.title"
          :description="radio.description"
          :personalities="radio.personalities"
          :mp3-url="radio.mp3.url"
          :date="radio.published_at">
        </radio-preview>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      newRadios: [],
      query: '',
    }
  },
  mounted: function () {
    var that = this
    this.axios.get('/api/v1/radios')
      .then(function (response) {
        that.newRadios = response.data
        console.log(that.newRadios)
      })
      .catch( function (error) {
        console.log(error)
      })
  },
  computed: {
    filteredRadio: function() {
      let query = this.query
      return this.newRadios.filter(function(r) {
        let personality_ids = r.personalities.map(function(p) {
          return p.id
        })
        return (personality_ids.indexOf(parseInt(query)) !== -1)
      })
    },
  },
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
