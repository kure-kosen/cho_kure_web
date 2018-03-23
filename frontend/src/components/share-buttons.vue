<template>
<div>
  <div class="ui divider"></div>
  <a class="ui image mini"
     v-bind:href="'http://www.facebook.com/share.php?u='+fullUrl"
     rel="nofollow"
     onclick="window.open(this.href, 'fbwindow', 'width=500, height=500, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;">
    <i class="big grey facebook icon"></i>
  </a>
  <a class="ui image mini"
     v-bind:href="'https://twitter.com/share?url='+fullUrl+'&via=cho_kure&related=cho_kure&hashtags=ちょっくれ&text='+''"
     rel="nofollow"
     target="_blank"
     onclick="window.open(this.href, 'twwindow', 'width=500, height=500, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;">
    <i class="big grey twitter icon"></i>
  </a>
  <a class="ui image share-size"
     v-bind:href="'http://line.me/R/msg/text/?'+fullUrl"
     rel="nofollow"
     target="_blank"
     onclick="window.open(this.href, 'linewindow', 'width=500, height=500, personalbar=0, toolbar=0, scrollbars=1, sizable=1'); return false;">
    <img src="../../images/share_buttons/share_line.png">
  </a>
</div>
</template>

<script>
module.exports = {
    data: () => {
        return {
            fullUrl: window.location.protocol + "//" + window.location.host + "/app" + this.$route.path,
        }
    }
}
</script>

<style scoped>
a.share-size > img {
    width: auto;
    height: 22px;
}

</style>
