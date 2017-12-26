<template>
  <div class="item">
    <router-link class="ui tiny image" :to="{ name: 'personality', params: { id: id }}">
      <img :src="imagePath">
    </router-link>
    <div class="middle aligned content">
      <router-link class="header" :to="{ name: 'personality', params: { id: id }}">{{ name }}</router-link>
      <div class="description">
        <p v-html="description"/>
      </div>
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
      default: '自己紹介を取得できませんでした',
      required: true
    },
    imagePath: {
      type: String,
      default: 'https://placehold.jp/150x150.png',
      required: true
    }
  }
}
</script>
