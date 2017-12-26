<template>
  <div id="body">
    <app-header/>
    <main id="main">
      <router-view/>
    </main>
    <app-footer/>
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
