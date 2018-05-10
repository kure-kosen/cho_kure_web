<template>
  <div class="item" v-bind:class="type">
    <router-link class="image" v-bind:to="{ name: 'radios', params: { id: itemId }}">
      <img v-bind:src="imagePath">
    </router-link>
    <div class="content">
      <router-link class="header" v-bind:to="{ name: 'radios', params: { id: itemId }}">{{ title }}</router-link>
      <div v-html="description" class="description"></div>
      <div class="personality-icons">
        <router-link v-for="personality in personalities" :key="personality.id" :to="{ name: 'personality', params: { id: personality.id }}">
          <span :data-tooltip="personality.name">
            <img :src="personality.image" class="personality-icon">
          </span>
        </router-link>
      </div>
      <div class="mp3" v-if="digestMp3Url">
        <div class="ui label">
          <p>ダイジェスト版:</p>
          <audio controls="controls" v-bind:src="digestMp3Url" preload="metadata"></audio>
        </div>
      </div>
      <div class="mp3">
        <div class="ui label">
          <p>本編はこちら！({{ playTime }})</p>
          <audio controls="controls" v-bind:src="mp3Url" preload="none"></audio>
        </div>
      </div>
      <div class="meta">
        <span class="date">{{ date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
var includes = require('array-includes')

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
        return includes(['radio', 'community', 'other'], value)
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
      required: true
    },
    digestMp3Url: {
      type: String,
    },
    date: {
      type: String,
      default: "2017/12/03 1:08",
      required: true,
    },
    playTime: {
      type: String,
      default: "--:--",
      required: true,
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

.mp3 {
  margin: 10px;
}
</style>
