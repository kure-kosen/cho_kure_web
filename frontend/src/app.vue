<template>
  <div class="body">
    <div class="wrapper">
      <app-header></app-header>
      <main class="main">
      <router-view :key="$route.fullPath"></router-view>
      </main>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script></script>

<style>
.body {
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1 1 auto;
}
</style>
