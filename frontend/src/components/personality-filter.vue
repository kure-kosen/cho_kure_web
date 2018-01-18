<template>
<div class="personality-filters">
  <div class="personality-icon" @click="clickPersonalityIcon(0)">
    <img class="personality-icon-image" width="100%" src="../../images/filter_all.png">
    <p class="personality-name">全員</p>
  </div>
  <div class="personality-icon" @click="clickPersonalityIcon(personality.id)" v-for="personality in personalities">
    <img class="personality-icon-image" width="100%" :src="personality.image">
    <p class="personality-name">{{ personality.name }}</p>
    <p class="personality-nickname">{{ personality.nickname }}</p>
  </div>
</div>
</template>

<script>
module.exports = {
  methods: {
    clickPersonalityIcon: function(id) {
      this.$emit('click-personality-icon', id)
    }
  },
  props: {
    personalities: {
      type: Array,
      default: [],
      required: true
    },
  }
}
</script>

<style scoped>
.personality-filters {
  display: flex;
  flex-wrap: wrap;
}

.personality-icon {
  cursor : pointer;
  margin: 10px;
  width: 10%;
  border: thin solid #999999;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  transition-duration: 100ms;
}

.personality-icon:hover {
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.2);
}

@media only screen and (max-width: 450px) {
  .personality-icon {
    Width: 25%;
  }
}

.personality-icon-image {
  border-radius: 5px 5px 0px 0px;
}

.personality-name {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0;
}

.personality-nickname {
  font-size: 13px;
  color: #999999;
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
}
</style>