<template>
<div class="personality-filters">
  <div class="personality-icon" v-on:click="filteredRadio(0)">
    <img class="personality-icon-image" width="100%" src="../../images/filter_all.png">
    <p class="personality-name">全員</p>
  </div>
  <div class="personality-icon" v-on:click="filteredRadio(personality.id)" v-for="personality in personalities">
    <img class="personality-icon-image" width="100%" :src="personality.image">
    <p class="personality-name">{{ personality.name }}</p>
  </div>
</div>
</template>

<script>
module.exports = {
  methods: {
    filteredRadio: function(id) {
      if (id === 0) {
        let that = this.$parent
        this.axios.get('/api/v1/radios')
          .then(function (response) {
            that.filteredRadios = response.data
          })
          .catch( function (error) {
            console.error(error)
          })

        return
      }

      this.$parent.filteredRadios = this.$parent.newRadios.filter(function(r) {
        const personality_ids = r.personalities.map(function(p) {
          return p.id
        })
        return (personality_ids.indexOf(id) !== -1)
      })
    }
  },
  props: {
    personalities: {
      type: Array,
      default: [],
      required: true
    },
  }
}
</script>

<style scoped>
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
  transition-duration: 100ms;
}

.personality-icon:hover {
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
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