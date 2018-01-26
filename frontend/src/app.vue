<template>
  <div id="body">
    <div id="wrapper">
      <app-header></app-header>
      <main id="main">
      <router-view></router-view>
      </main>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script></script>

<style>
#body {
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
}

#wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1 1 auto;
}
</style>
