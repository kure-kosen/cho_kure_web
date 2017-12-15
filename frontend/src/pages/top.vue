<template>
  <div class="pusher">
    <div class="ui black vertical masthead aligned segment">	
      <div class="ui container popular-contents">
        <h2 class="ui inverted header">今日のピックアップ</h2>
        <div class="ui four column doubling grid">
          <popular-content></popular-content>
        </div>
      </div>
    </div>
    <div class="ui container news-contents">
      <h2 class="ui header">新着情報</h2>
      <new-item></new-item>
    </div>
  </div>
</template>

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
