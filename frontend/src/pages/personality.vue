<template>
  <div class="pusher">
    <div class="main">
      <div class="ui text container">
        <article>
          <div class="names">
            <h2 class="name">{{ personality.name }}</h2>
            <div class="nickname">{{ personality.nickname }}</div>
          </div>
          <img class="ui small right floated image" :src="personality.image">
          <h3 class="ui header">自己紹介</h3>
          <p v-html="personality.description"></p>
          <h3 class="ui header">過去に出演したラジオ放送回</h3>
          <div class="ui items">
            <radio-preview v-for="radio in relatedNewRadios"
              :key="radio.id"
              :image-path="radio.image"
              :itemId="radio.id"
              type="radio"
              :title="radio.title"
              :description="radio.description"
              :personalities="radio.personalities"
              :mp3-url="radio.mp3.url"
              :date="radio.published_at">
            </radio-preview>
          </div>
          <share-buttons></share-buttons>
        </article>
        <h3 class="ui header">他のメンバー</h3>
        <div class="ui unstackable divided items link">
          <personality-small v-for="personality in personalities"
            :key="personality.id"
            :id="personality.id"
            :name="personality.name"
            :nickname="personality.nickname"
            :description="personality.description"
            :image-path="personality.image">
          </personality-small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      personality: {},
      relatedNewRadios: [],
      personalities: []
    }
  },
  methods: {
    getDetail: function () {
      var that = this
      this.axios.get('/api/v1/personalities/' + this.$route.params.id)
        .then(function (response) {
          that.personality = response.data
          console.log(that.personality)

          that.getPersonalities()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getRelatedNewRadios: function () {
      var that = this
      this.axios.get('/api/v1/personalities/' + this.$route.params.id + '/new_radios')
        .then(function (response) {
          that.relatedNewRadios = response.data
          console.log(that.relatedNewRadios) 
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getPersonalities: function () {
      var that = this
      this.axios.get('/api/v1/personalities')
        .then(function (response) {
          that.personalities = response.data
          that.personalities.some(function(v, i){
            if (v.id==that.personality.id) that.personalities.splice(i,1)
          })
          console.log(that.personalities)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted: function () {
    this.getDetail()
    this.getRelatedNewRadios()
  },
  watch: {
    'this.$route': function (to, from) {
      this.getDetail()
      this.getRelatedNewRadios()
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 80px;
  padding-bottom: 40px;
}

.name {
  display: inline;
}

.nickname {
  display: inline;
  color: #888888;
}
</style>
