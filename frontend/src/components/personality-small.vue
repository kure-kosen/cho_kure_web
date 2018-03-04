<template>
  <div class="item">
    <router-link class="ui tiny image" :to="{ name: 'personality', params: { id: id }}">
      <img :src="imagePath">
    </router-link>
    <div class="middle aligned content">
      <router-link class="header" :to="{ name: 'personality', params: { id: id }}">
        <div class="names">
          <h2 class="name">{{ name }}</h2>
          <div class="nickname">{{ nickname }}</div>
        </div>
      </router-link>
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
    nickname: {
      type: String
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

<style scoped>
.name {
  font-size: 20px;
  display: inline-block;
  margin-bottom: 0;
}

.nickname {
  font-size: 16px;
  font-weight: normal;
  display: inline-block;
  color: #888888;
}
</style>
