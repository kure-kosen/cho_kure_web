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
        <div class="ui unstackable divided items">
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
    getDetail: () => {
      var that = this
      this.axios.get('/api/v1/personalities/' + this.$route.params.id)
        .then((response) => {
          that.personality = response.data
          console.log(that.personality)

          that.getPersonalities()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getRelatedNewRadios: () => {
      var that = this
      this.axios.get('/api/v1/personalities/' + this.$route.params.id + '/new_radios')
        .then((response) => {
          that.relatedNewRadios = response.data
          console.log(that.relatedNewRadios) 
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getPersonalities: () => {
      var that = this
      this.axios.get('/api/v1/personalities')
        .then((response) => {
          that.personalities = response.data
          that.personalities.some((v, i) => {
            if (v.id==that.personality.id) that.personalities.splice(i,1)
          })
          console.log(that.personalities)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted: () => {
    this.getDetail()
    this.getRelatedNewRadios()
  },
  watch: {
    'this.$route': (to, from) => {
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
