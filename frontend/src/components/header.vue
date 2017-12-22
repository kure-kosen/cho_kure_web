<template>
  <header>
    <nav>
      <div class="ui blue right sidebar inverted vertical menu">
        <a class="item">ラジオ</a>
        <a class="disabled item" href="#">コミュニティ</a>
        <a class="disabled item" href="#">カレンダー</a>
        <a class="item" href="#">ちょっくれとは？</a>
        <a class="disabled item" href="#">メンバー紹介</a>
        <router-link class="item" to="/contact">お問い合わせ</router-link>
      </div>
      <div class="ui blue inverted fixed menu" id="computer">
        <div class="ui container">
          <router-link class="header item" to="/"><img src="img/logo_mini.png">ちょっときいて呉高専</router-link>
          <a class="item">ラジオ</a>
          <a class="disabled item" href="#">コミュニティ</a>
          <a class="disabled item" href="#">カレンダー</a>
          <div class="right menu">
            <a class="item" href="#">ちょっくれとは？</a>
            <a class="disabled item" href="#">メンバー紹介</a>
            <router-link class="item" to="/contact">お問い合わせ</router-link>
          </div>
        </div>
      </div>
      <div class="ui blue inverted fixed borderless menu" id="mobile">
        <div class="ui container">
          <router-link class="header item" to="/"><img src="img/logo_mini.png">ちょっときいて呉高専</router-link>
          <div class="right menu">
            <div id="js-sidebar" class="item"><i class="icon large content"></i>
              Menu
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
module.export = {
  methods: {
    showMenu: function () {
      // TODO: いい感じにする
      // $('.ui.sidebar')
      //   .sidebar('setting', 'transition', 'push')
      //   .sidebar('setting', 'mobileTransition', 'push')
      //   .sidebar('toggle')
      // ;
    }
  } 
}
</script>

<style scoped>
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
