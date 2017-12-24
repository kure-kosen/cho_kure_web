<template>
<div class="item" v-bind:class="type">
  <router-link class="image" v-bind:to="{ name: 'radios', params: { id: itemId }}">
    <img v-bind:src="imagePath">
  </router-link>
  <div class="content">
    <router-link class="header" v-bind:to="{ name: 'radios', params: { id: itemId }}">{{ title }}</router-link>
    <div class="description" v-html="description"></div>
    <div class="personality-icons">
      <img v-bind:src="personality.image" class="personality-icon" v-for="personality in personalities">
    </div>
    <div><audio controls="controls" v-bind:src="mp3Url"></audio></div>
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
    itemId: {
      type: Number,
      default: 0,
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
    personalities: {
      type: Array,
      default: [],
    },
    mp3Url: {
      type: String,
      require: true,
    },
    date: {
      type: String,
      default: '2017/12/03 1:08',
      required: true
    },
  },
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

.personality-icons {
  display: inline-block;
}

.personality-icon {
  width: 50px;
  height: 50px;
  border: thin solid #999999;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  margin: 5px;
  display: inline;
}
</style>
