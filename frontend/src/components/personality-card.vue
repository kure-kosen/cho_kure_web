<template>
  <div class="card">
    <div class="image">
      <img v-bind:src="imagePath">
    </div>
    <div class="content">
      <div class="header">{{ name }}</div>
      <div class="meta">
        <span v-for="tag in tags">
          {{ tag }}
        </span>
      </div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
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
      default: 'https://placehold.jp/200x200.png',
      required: true,
    },
    tags: {
      type: Array,
      default: [],
      required: true,
    },
  }
}
</script>

<style></style>
