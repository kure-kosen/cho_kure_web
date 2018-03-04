<template>
  <div>
    <transition name="fade">
      <div v-if="visible" class="how-to-podcast">
        <a @click="openModal()" class="how-to-podcast-link">
          <p>Podcastで聞いてみる？</p>
        </a>
        <a @click="visible = false" class="delete-link">
          <p>×</p>
        </a>
      </div>
    </transition>
    <how-to-podcast-modal v-if="showModal" @close="closeModal()"/>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {
      visible: true,
      showModal: false
    }
  },

  methods: {
    openModal: function () {
      this.showModal = true
      $('body').css('overflow', 'hidden')
    },
    closeModal: function () {
      this.showModal = false
      $('body').css('overflow', 'auto')
    }
  }
}
</script>

<style scoped>
.how-to-podcast {
  position: fixed;
  bottom: 5%;
  left:calc(50% - 270px/2);
  z-index: 10;
  color: #e4f5ff;
  width: 270px;
  margin: 0 auto;
  font-size: 18px;
}

.how-to-podcast-link {
  width: 235px;
  height: 40px;
  background-color: #40AEC7;
  border-right: solid 1px #C0E4F5;
  border-radius: 20px 0 0 20px;
  padding-left: 10px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}

.delete-link {
  width: 35px;
  height: 40px;
  background-color: #40AEC7;
  border-radius: 0 20px 20px 0;
  padding-right: 5px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .7s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
