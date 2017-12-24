<template>
  <div class="pusher">
    <div class="ui black vertical masthead aligned segment">	
      <div class="ui container popular-contents">
        <h2 class="ui inverted header">今日のピックアップ</h2>
        <div class="ui four column doubling grid">
          <div class="column" v-for="radio in popularRadios">
            <popular-content
               :image-path="radio.imagePath"
               :title="radio.title"
               :date="radio.date">
            </popular-content>
          </div>
        </div>
      </div>
    </div>
    <div class="ui container news-contents">
      <h2 class="ui header">新着情報</h2>
      <h2>ほげほげほげ !!!!</h2>
      <div class="ui items" v-for="radio in newRadios">
        <new-item
          :image-path="radio.image"
          :item-path="radio.itemPath"
          type="radio"
          :title="radio.title"
          :description="radio.description"
          :date="radio.published_at">
        </new-item>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      newRadios: [],
      popularRadios: [
        {
          imagePath: 'https://placehold.jp/640x480.png',
          title: 'titlehogehoge',
          date: '2017/12/03 1:08'
        },
        {
          imagePath: 'https://placehold.jp/640x480.png',
          title: 'titlehogehoge',
          date: '2017/12/03 1:08'
        },
        {
          imagePath: 'https://placehold.jp/640x480.png',
          title: 'titlehogehoge',
          date: '2017/12/03 1:08'
        },
        {
          imagePath: 'https://placehold.jp/640x480.png',
          title: 'titlehogehoge',
          date: '2017/12/03 1:08'
        },
      ]

    }
  },
  mounted: function () {
    var that = this
    this.axios.get('api/v1/radios')
      .then(function (response) {
        that.newRadios = response.data
        console.log(that.newRadios)
      })
      .catch( function (error) {
        console.log(error)
      })
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

.news-contents {
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
