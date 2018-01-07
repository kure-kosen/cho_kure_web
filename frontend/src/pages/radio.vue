<template>
<div class="pusher">
  <div class="ui text container main">
    <h2 class="ui header">{{ radio.title }}</h2>
    <img v-bind:src="radio.image" v-bind:alt="radio.title">
    <div v-html="radio.description"></div>
    <div><audio controls="controls" v-bind:src="radio.mp3.url"></audio></div>
    <h3>パーソナリティ</h3>
    <div class="ui link cards one stackable">
      <router-link v-for="personality in radio.personalities" :key="personality.id" class="card" :to="{ name: 'personality', params: { id: personality.id }}">
        <div class="content">
          <div class="ui items">
            <div class="item">
              <div class="ui tiny image">
                <img :src="personality.image">
              </div>
              <div class="middle aligned content">
                <div class="header">{{ personality.name }}</div>
                <div class="description">
                  <p v-html="personality.description"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="ui items" v-for="newRadio in newRadios">
      <radio-preview
        :image-path="newRadio.image"
        :item-id="newRadio.id"
        type="radio"
        :title="newRadio.title"
        :description="newRadio.description"
        :mp3-url="newRadio.mp3.url"
        :personalities="radio.personalities"
        :date="newRadio.created_at">
      </radio-preview>
    </div>
  </div>
</div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      radio: {},
      newRadios: [],
    }
  },
  methods: {
    getRadio: function (id) {
      var that = this
      this.axios.get('/api/v1/radios/'+id)
        .then(function (response) {
          that.radio = response.data
          console.log(that.radio)
        })
        .catch( function (error) {
          console.log(error)
        })
    },
    getNewRadios: function () {
      var that = this
      this.axios.get('/api/v1/radios')
        .then(function (response) {
          that.newRadios = response.data.slice(0, 6)
          console.log(that.newRadios)
        })
        .catch( function (error) {
          console.log(error)
        })
    }
  },
  mounted: function () {
    this.getRadio(this.$route.params.id)
    this.getNewRadios()
  },
  watch: {
    'this.$route': function (to, from) {
      this.getRadio(this.$route.params.id)
      this.getNewRadios()
    }
  }
}
</script>

<style scoped>
a {
  border: none;
  color: black;
}

.ui.black.segment {
    background-color: #999999;
    padding-top: 80px;
}

h2.ui.header {
    font-size: 1.28571429em;
}

.main {
    padding-top: 80px;
    padding-bottom: 40px;
}
</style>
