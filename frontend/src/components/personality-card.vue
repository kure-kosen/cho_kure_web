<template>
  <router-link class="card" :to="{ name: 'personality', params: { id: id }}">
    <div class="image">
      <img v-bind:src="imagePath">
    </div>
    <div class="content">
      <span class="name">{{ name }}</span>
      <span class="nickname">{{ nickname }}</span>
      <div class="ui tag labels">
        <span class="ui label" v-for="tag in tags">
          {{ tag }}
        </span>
      </div>
      <div class="description" v-html="description"></div>
    </div>
  </router-link>
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
      type: String,
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

<style scoped>
.name {
  color: #000000;
  font-weight: bold;
  font-size: 22px;
  margin-right: 10px;
}

.nickname {
  color: #888888;
}

.tag {
  margin-top: 5px;
}
</style>
