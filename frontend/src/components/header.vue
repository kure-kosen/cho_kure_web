<template>
  <header>
    <nav>
      <div class="ui blue right sidebar inverted borderless vertical menu">
	<div id="js-sidebar" class="item close" v-on:click="hideMenu"><i class="icon remove"></i></div>
	<div class="items">
	  <a class="item">ラジオ</a>
          <a class="disabled item" href="#">コミュニティ</a>
          <a class="disabled item" href="#">カレンダー</a>
          <a class="item" href="#">ちょっくれとは？</a>
          <a class="disabled item" href="#">メンバー紹介</a>
	  <a class="item" href="#">お問い合わせ</a>
	</div>
      </div>
      <div class="ui blue inverted fixed menu" id="computer">
        <div class="ui container">
          <a class="header item" href="#"><img  src="img/logo_mini.png">ちょっときいて呉高専</a>
          <a class="item">ラジオ</a>
          <a class="disabled item" href="#">コミュニティ</a>
          <a class="disabled item" href="#">カレンダー</a>
          <div class="right menu">
            <a class="item" href="#">ちょっくれとは？</a>
            <a class="disabled item" href="#">メンバー紹介</a>
            <a class="item" href="#">お問い合わせ</a>
          </div>
        </div>
      </div>
      <div class="ui blue inverted fixed borderless menu" id="mobile">
        <div class="ui container">
          <a class="header item" href="#"><img  src="img/logo_mini.png">ちょっときいて呉高専</a>
          <div class="right menu">
            <div id="js-sidebar" class="item" v-on:click="showMenu"><i class="icon large content"></i>
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
      ;
    },
    hideMenu: function() {
      $('.ui.sidebar')
        .sidebar('hide')
        .sidebar('setting', 'mobileTransition', 'push')
      ;
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
