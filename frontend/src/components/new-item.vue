<template>
<div class="item" v-bind:class="type">
  <router-link class="image" v-bind:href="itemPath" to="/about">
    <img v-bind:src="imagePath">
  </router-link>
  <div class="content">
    <a v-bind:href="itemPath" class="header">{{ title }}</a>
    <div class="description">
      <p>{{ description }}</p>
    </div>
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
    itemPath: {
      type: String,
      default: '/',
      required: true
    },
    type: {
      type: String,
      default: 'other',
      required: true,
      validator: function (value) {
        return ['radio', 'community', 'other'].includes(value)
      }
    },
    title: {
      type: String,
      default: 'タイトルを取得できませんでした',
      required: true,
    },
    description: {
      type: String,
      default: '詳細を取得できませんでした',
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

<style scoped>
.item {
  padding-left: 10px !important;
  border-left: solid 10px !important;
}

.radio {
  border-color: #7ec7d8 !important;
}

.community {
  border-color: #ffe200 !important;
}

.news {
  border-color: #999999 !important;
}

.other {
  border-color: #999999 !important;
}
</style>
