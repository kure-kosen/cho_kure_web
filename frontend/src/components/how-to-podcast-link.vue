<template>
<div class="how-to-podcast">
  <div class="how-to-podcast-link">
    <p>Podcastで聞いてみる？</p>
  </div>
  <div class="delete-link">
    <p>×</p>
  </div>
</div>
</template>

<script>
module.exports = {
  props: {},
}
</script>

<style scoped>
.how-to-podcast {
  color: #DCEEF7;
  width: 270px;
  margin: 0 auto;
  font-size: 18px;
}

.how-to-podcast-link {
  width: 235px;
  height: 40px;
  background-color: #40AEC7;
  border: solid 1px #C0E4F5;
  border-radius: 20px 0 0 20px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}

.delete-link {
  width: 35px;
  height: 40px;
  background-color: #40AEC7;
  border: solid 1px #C0E4F5;
  border-radius: 0 20px 20px 0;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
</style>
