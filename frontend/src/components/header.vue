<template>
  <header>
    <nav>
      <div class="ui blue right sidebar inverted borderless vertical menu">
        <div id="js-sidebar" class="item close" @click="hideMenu"><i class="icon remove"/></div>
        <div class="items">
          <router-link class="item" to="/">トップ</router-link>
          <router-link class="item" to="/about">ちょっくれとは？</router-link>
          <router-link class="item" to="/personalities">パーソナリティ紹介</router-link>
          <router-link class="item" to="/contact">投稿フォーム・お問い合わせ</router-link>
        </div>
      </div>
      <div class="ui blue inverted fixed menu" id="computer">
        <div class="ui container">
          <router-link class="header item" to="/"><img src="../../images/logo_mini.png">ちょっときいて呉高専</router-link>
          <div class="right menu">
            <router-link class="item" to="/about">ちょっくれとは？</router-link>
            <router-link class="item" to="/personalities">パーソナリティ紹介</router-link>
            <router-link class="item" to="/contact">投稿フォーム・お問い合わせ</router-link>
          </div>
        </div>
      </div>
      <div class="ui blue inverted fixed borderless menu" id="mobile">
        <div class="ui container">
          <router-link class="header item" to="/"><img src="../../images/logo_mini.png">ちょっときいて呉高専</router-link>
          <div class="right menu">
            <div id="js-sidebar" class="item" @click="showMenu"><i class="icon large content"/>
              Menu
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
module.exports = {
  methods: {
    showMenu: function () {
      $('.ui.sidebar')
        .sidebar('show')
        .sidebar('setting', 'mobileTransition', 'push')
    },
    hideMenu: function () {
      $('.ui.sidebar')
        .sidebar('hide')
        .sidebar('setting', 'mobileTransition', 'push')
    }
  }
}
</script>

<style scoped>

.close {
  padding: 10px 0;
}

.items {
  margin-top: 50px
}

nav {
    background-color: #7ec7d8;
}

.ui.inverted.blue.menu, .ui.inverted.menu.blue.active.item {
    background-color: #7ec7d8;
}

.ui.inverted.menu .item.disabled, .ui.inverted.menu .item.disabled:hover {
    color: rgba(225,225,225,.8);
}

a.header.item {
    font-size: 1.28571429em;
}

.ui.menu .item {
    padding: 0.5em 0.8em;
}

#computer {
    display: block;
}

#mobile {
    display: none;
}

@media screen and (max-width: 768px) {
    #computer {
        display: none;
    }
    #mobile {
        display: block;
    }
}

@media screen and (max-width: 480px) {
    #computer {
        display: none;
    }
    #mobile {
        display: block;
    }
}

.ui.blue.right.sidebar.inverted.vertical.menu {
    font-size: 1.2em;
}
</style>
