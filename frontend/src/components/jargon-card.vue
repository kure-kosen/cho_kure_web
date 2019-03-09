<template>
  <div class="ui cards">
    <div class="card">
      <div class="content">
        <div class="header">{{ name }}</div>
        <div class="description">{{ description }}</div>
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
      default: '説明文を取得できませんでした',
      required: true
    },
    major: {
      type: String,
      default: 'M',
      required: true
    },
  }
} 
</script>
