<template>
  <router-link class="item" :to="{ name: 'personality', params: { id: id }}">
    <div class="ui tiny image">
      <img :src="imagePath">
    </div>
    <div class="middle aligned content">
      <div class="header">{{ name }}</div>
      <div class="description">
        <p v-html="description"></p>
      </div>
    </div>
  </router-link>
</template>

<script>
module.exports = {
  props: {
    id: {
      type: Number,
      default: 0,
      required: true,
    },
    name: {
      type: String,
      default: '名前を取得できませんでした',
      required: true
    },
    description: {
      type: String,
      default: '自己紹介を取得できませんでした',
      required: true
    },
    imagePath: {
      type: String,
      default: 'https://placehold.jp/150x150.png',
      required: true
    },
  }
}
</script>
