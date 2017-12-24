<template>
<div class="item" v-bind:class="type">
  <router-link class="image" v-bind:to="{ name: 'radios', params: { id: itemId }}">
    <img v-bind:src="imagePath">
  </router-link>
  <div class="content">
    <router-link class="header" v-bind:to="{ name: 'radios', params: { id: itemId }}">link</router-link>
    <div class="description" v-html="markedDescription"></div>
    <div class="meta">
      <span class="date">{{ date }}</span>
    </div>
  </div>
  <router-link class="image" v-bind:to="{ name: 'radios', params: { id: itemId }}">link</router-link>
  <router-link class="image" to="1">link</router-link>
  <router-link class="item" to="/about">ちょっくれとは？</router-link>
</div>
</template>

<script>
var marked = require('marked');
module.exports = {
    props: {
        imagePath: {
            type: String,
            default: 'https://placehold.jp/640x480.png',
            required: true
        },
        itemId: {
            type: String,
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
        date: {
            type: String,
            default: '2017/12/03 1:08',
            required: true
        },
    },
    computed: {
        markedDescription: function () {
            return marked(this.description, { sanitize: true })
        }
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
