<template>
  <div class="ui items">
    <!-- TODO: top.vueでAPIから取ってきたデータに応じてクラスを追加する -->
    <div class="item radio">
      <a class="image"  href="https://google.com">
        <img src="https://placehold.jp/640x480.png">
      </a>
      <div class="content">
        <a href="https://google.com" class="header">#1 呉高専ってなに〜？</a>
        <div class="description">
          <p>第1回となる、この放送。パーソナリティ 4 人による特別版。 高専生必聴の呉高専クイズあり。 ちょっくれの伝説がここから始まる!</p>
        </div>
        <div class="meta">
          <span class="date">2017/12/03 1:08</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radio {
  padding-left: 10px !important;
  border-left: solid 10px !important;
  border-color: #7ec7d8 !important;
}

.community {
  padding-left: 10px !important;
  border-left: solid 10px !important;
  border-color: #ffe200 !important;
}

.news {
  padding-left: 10px !important;
  border-left: solid 10px !important;
  border-color: #999999 !important;
}

.other {
  padding-left: 10px !important;
  border-left: solid 10px !important;
  border-color: #999999 !important;
}
</style>
