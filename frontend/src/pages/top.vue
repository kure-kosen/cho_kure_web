<template>
  <div class="pusher">
    <div class="ui container news-contents">


        <div class="personality-icon" v-on:click="filteredRadio(personality.id)" v-for="personality in personalities">
          <img class="personality-icon-image" width="100%" :src="personality.image">
          <p class="personality-name">{{ personality.name }}</p>
        </div>
      </div>

      <h2 class="ui header">新着情報</h2>
      <div class="ui items" v-for="radio in filteredRadios">
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
      personalities: [],
      newRadios: [],
      filteredRadios: [],
    }
  },
  mounted: function () {
    var that = this
    this.axios.get('/api/v1/radios')
      .then(function (response) {
        that.newRadios = response.data
        that.filteredRadios = response.data
      })
      .catch( function (error) {
        console.error(error)
      })
    this.axios.get('/api/v1/personalities')
      .then(function (response) {
        that.personalities = response.data
      })
    $('.ui.dropdown').dropdown()
  },
  methods: {
    filteredRadio: function(id) {
      this.filteredRadios = this.newRadios.filter(function(r) {
        const personality_ids = r.personalities.map(function(p) {
          return p.id
        })
        return (personality_ids.indexOf(id) !== -1)
      })
    }
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

.personality-filters {
  display: flex;
  flex-wrap: wrap;
}

.personality-icon {
  cursor : pointer;
  margin: 10px;
  width: 10%;
  border: thin solid #999999;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
}

@media only screen and (max-width: 450px) {
  .personality-icon {
    Width: 25%;
  }
}

.personality-icon-image {
  border-radius: 5px 5px 0px 0px;
}

.personality-name {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
