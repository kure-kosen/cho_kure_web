<template>
  <div class="ui card">
    <div class="image">
      <img v-bind:src="imagePath">
    </div>
    <div class="content">
      <div class="header">{{ name }}</div>
      <div class="description" v-html="description"></div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    id: {
      type: Number,
      default: 0,
      required: true
    },
    name: {
      type: String,
      default: '名前を取得できませんでした',
      required: true
    },
    description: {
      type: String,
      default: '説明文を取得できませんでした',
      required: true
    },
    major: {
      type: String,
      default: 'M',
      required: true
    },
    imagePath: {
      type: String,
      default: 'https://placehold.jp/200x200.png',
      required: true,
    },
  }
} 
</script>
