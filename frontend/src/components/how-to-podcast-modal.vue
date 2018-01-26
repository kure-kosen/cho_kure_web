<template>
<transition name="modal">
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-close" @click="$emit('close')">
          <span class="modal-close-large">×</span>
        </div>
        <div class="modal-body">
          <how-to-use-podcast></how-to-use-podcast>
        </div>

        <div class="modal-footer">
          <div class="modal-close" @click="$emit('close')">
            閉じる
          </div>
        </div>
        <a href="https://itunes.apple.com/jp/podcast/%E3%81%A1%E3%82%87%E3%81%A3%E3%81%A8%E3%81%8D%E3%81%84%E3%81%A6%E5%91%89%E9%AB%98%E5%B0%82-%E5%91%89%E9%AB%98%E5%B0%82%E3%81%AE%E4%BB%8A%E3%82%92%E3%81%8A%E4%BC%9D%E3%81%88%E3%81%97%E3%81%BE%E3%81%99/id1293031618?mt=2">
          <div class="move-podcast">
            <p class="move-podcast-text">
              Podcastを起動する
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
module.exports = {
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  overflow: auto;
  width: 90%;
  line-height: 20px;
  height: 95%;
  margin: 0 auto 0 auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

@media only screen and (min-width: 450px) {
  .modal-container {
    width: 60%;
    padding: 30px;
  }
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
 padding-bottom: 80px;
}

.modal-close {
  float: right;
}

.modal-close-large {
  font-size: 24px;
  font-weight: bold;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.move-podcast {
  position: fixed;
  -webkit-overflow-scrolling: auto;
  bottom: 5%;
  left:calc(50% - 270px/2);
  z-index: 10000;
  background-color: #40AEC7;
  color: #e4f5ff;
  width: 270px;
  margin: 0 auto;
  font-size: 18px;
  border-right: solid 1px #C0E4F5;
  border-radius: 20px;

  padding-left: 10px;
  text-align: center;
}

.move-podcast-text {
  height: 40px;
  line-height: 40px;
}
</style>
