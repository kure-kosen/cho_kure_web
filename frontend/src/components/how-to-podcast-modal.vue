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
        </div>
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
  z-index: 9998;
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
  height: 100%;
  margin: 20px auto 0 auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
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
</style>
