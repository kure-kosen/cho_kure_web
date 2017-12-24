<template>
<div class="pusher">
  <div class="ui text container main">
    <h2 class="ui header">{{ radio.title }}</h2>
    <img v-bind:src="radio.image" v-bind:alt="radio.title">
    <img class="ui fluid  image" alt="アニメーションロゴ" src="/img/logo_animation.gif"/>
    <div v-html="markedDescription"></div>

    <h3>パーソナリティ</h3>
    <div class="ui segment grid" v-for="personality in radio.personalities">
      <div class="three wide column">
        <img class="ui top aligned small image" v-bind:src="personality.image">
      </div>
      <div class="thirteen wide column">
        <h4>{{ personality.name }}</h4>
        <div class="description" v-html="personality.description"></div>
        <div class="ui tag labels">
          <div class="ui label" v-for="tag in personality.tag_list">{{ tag }}</div>
        </div>
      </div>
    </div>
    <div class="ui items" v-for="newRadio in newRadios">
      <new-item
        :image-path="newRadio.image"
        :item-id="newRadio.id"
        type="radio"
        :title="newRadio.title"
        :description="newRadio.description"
        :personalities="radio.personalities"
        :date="newRadio.created_at">
      </new-item>
    </div>
  </div>
</div>
</template>

<script>
var marked = require('marked');
module.exports = {
    data: function () {
        return {
            radio: {},
            newRadios: [],
        }
    },
    methods: {
        getRadio(id) {
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
        getNewRadios() {
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
    computed: {
        markedDescription: function () {
            return marked(this.radio.description, { sanitize: true })
        }
    },
    watch: {
        '$route' (to, from){
            this.getRadio(this.$route.params.id)
            this.getNewRadios()
        }
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

.main {
    padding-top: 80px;
    padding-bottom: 40px;
}
</style>
