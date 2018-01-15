<template>
  <div class="pusher">
    <div class="ui container news-contents">
      <h2 class="ui header">パーソナリティで調べる</h2>
      <personality-filter
        :personalities="personalities"
        @click-personality-icon="setFilteredRadioFromPersonality">
      </personality-filter>
      <h2 class="ui header">放送された回</h2>
      <transition-group>
        <div class="ui items" v-bind:key="radio.id" v-for="radio in filteredRadios">
          <radio-preview
              :item-id="radio.id"
              :image-path="radio.image"
              :item-path="radio.itemPath"
              type="radio"
              :title="radio.title"
              :description="radio.description"
              :personalities="radio.personalities"
              :mp3-url="radio.mp3.url"
              :digest-mp3-url="radio.digest_mp3.url"
              :date="radio.published_at">
          </radio-preview>
        </div>
      </transition-group>
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
    this.axios.get('/api/v1/personalities/appeared')
      .then(function (response) {
        that.personalities = response.data
      })
  },
  methods: {
    setFilteredRadioFromPersonality: function(id) {
      if (id === 0) {
        let that = this
        this.axios.get('/api/v1/radios')
          .then(function (response) {
            that.filteredRadios = response.data
          })
          .catch( function (error) {
            console.error(error)
          })

        return
      }

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

.items {
  transition: all .3s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}
</style>
