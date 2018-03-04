<template>
  <footer>
    <div class="ui black center aligned segment">
      <div class="ui text container">
        <p><a class="ui white" href="https://www.kure-nct.ac.jp/">呉高専HP</a></p>
        <p><router-link class="ui white" to="/policy">プライバシーポリシー</router-link></p>
        <p class="ui white">&copy;2017 ちょっときいて呉高専</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ui.black.center.aligned.segment {
  border: none !important;
}

.ui.black.segment {
  background-color: #999999;
  padding-top: 20px;
  padding-bottom: 20px;
}

.ui.white {
  color: #ffffff;
}

</style>
