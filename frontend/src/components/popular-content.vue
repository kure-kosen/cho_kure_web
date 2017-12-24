<template>
  <div class="ui card">
    <div class="ui image">
      <img v-bind:src="imagePath" class="content">
    </div>
    <div class="content">
      <a class="header">{{ title }}</a>
      <div class="meta">
        <span class="date">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    imagePath: {
      type: String,
      default: 'https://placehold.jp/640x480.png',
      required: true
    },
    title: {
      type: String,
      default: 'タイトルを取得できませんでした',
      required: true,
    },
    date: {
      type: String,
      default: '2017/12/03 1:08',
      required: true
    },
  }
}
</script>
