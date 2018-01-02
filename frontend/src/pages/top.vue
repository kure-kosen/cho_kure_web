<template>
  <div class="pusher">
    <div class="ui container news-contents">

      <div class="ui fluid selection dropdown">
        <i class="search icon"></i>
        <span class="text">パーソナリティで調べる</span>
        <div class="menu">
          <div class="scrolling menu">
            <div class="item" v-on:click="filteredRadio(personality.id)" v-for="personality in personalities">
              <img class="ui avatar image" :src="personality.image">
              {{personality.name}}
            </div>
          </div>
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

      <!--<div class="ui items" v-for="radio in newRadios">-->
        <!--<radio-preview-->
          <!--:item-id="radio.id"-->
          <!--:image-path="radio.image"-->
          <!--:item-path="radio.itemPath"-->
          <!--type="radio"-->
          <!--:title="radio.title"-->
          <!--:description="radio.description"-->
          <!--:personalities="radio.personalities"-->
          <!--:mp3-url="radio.mp3.url"-->
          <!--:date="radio.published_at">-->
        <!--</radio-preview>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      personalities: [],
      filteredRadios: [],
    }
  },
  mounted: function () {
    var that = this
    this.axios.get('/api/v1/radios')
      .then(function (response) {
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
</style>
