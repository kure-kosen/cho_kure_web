<template>
  <div id="body">
    <app-header></app-header>
    <main id="main">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script></script>

<style>
#body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}
</style>
