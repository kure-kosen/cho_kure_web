<template>
  <div class="pusher">
    <div>
      <h2 class="ui header">高専のススメ一覧</h2>
       <jargon-card v-for="jargon in jargons"
        :key="jargon.id"
        :id="jargon.id"
        :name="jargon.name"
        :description="jargon.description"
        :major="jargon.major.label"
        :image-path="jargon.image">
      </jargon-card>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      jargons: []
    }
  },
  mounted: function () {
    var that = this
    this.axios.get('/api/v1/jargons')
      .then(function(response) {
        that.jargons = response.data
        console.log(that.jargons)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>
