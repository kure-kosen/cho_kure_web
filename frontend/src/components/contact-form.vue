<template>
<form class="ui form" @submit="postContact">
  <div class="grouped fields">
    <label for="corner">コーナー名</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="corner" v-bind:value="0" v-model="newContact.corner" checked="checked" tabindex="0" class="hidden">
        <label>普通のお便り</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="corner" v-bind:value="10" v-model="newContact.corner" tabindex="0" class="hidden">
        <label>ラジオへの感想・意見</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input type="radio" name="corner" v-bind:value="20" v-model="newContact.corner" tabindex="0" class="hidden">
        <label>ラジオ出演</label>
      </div>
    </div>
  </div>
  <div class="field">
    <label>メッセージ</label>
    <textarea placeholder="メッセージ" name="message" v-model="newContact.message"></textarea>
  </div>
  <div class="field">
    <label>ラジオネーム</label>
    <input type="text" name="nickname" placeholder="(例) ちょっくれくん" v-model="newContact.nickname">
  </div>
  <div class="field">
    <label>お名前</label>
    <input type="text" name="name" placeholder="(例) 高専太郎" v-model="newContact.name">
  </div>
  <div class="field">
    <label>所属</label>
    <select class="ui selection dropdown" v-model="newContact.department">
      <option value="">所属</option>
      <option v-bind:value="10">M</option>
      <option v-bind:value="20">E</option>
      <option v-bind:value="30">C</option>
      <option v-bind:value="40">A</option>
      <option v-bind:value="50">専攻科</option>
      <option v-bind:value="60">OB, OG</option>
      <option v-bind:value="70">保護者</option>
      <option v-bind:value="80">教員</option>
      <option v-bind:value="90">その他</option>
    </select>
  </div>
  <div class="field">
    <label>学年</label>
    <select class="ui selection dropdown" v-model="newContact.grade">
      <option value="">学年</option>
      <option v-bind:value="10">本科1年</option>
      <option v-bind:value="20">本科2年</option>
      <option v-bind:value="30">本科3年</option>
      <option v-bind:value="40">本科4年</option>
      <option v-bind:value="50">本科5年</option>
      <option v-bind:value="60">専攻科1年</option>
      <option v-bind:value="70">専攻科2年</option>
      <option v-bind:value="80">OB, OG</option>
      <option v-bind:value="90">その他</option>
    </select>
  </div>
  <button class="ui button" type="submit">送信</button>
</form>
</template>

<script>
module.exports = {
    data: function() {
        return {
            newContact: {
                corner: 0,
                message: '',
                nickname: '',
                name: '',
                department: '',
                grade: '',
            },
            validation: {
                corner: false,
                message: false,
                nickname: false,
                name: false,
                department: false,
                grade: false,
            }
        }
    },
    mounted: function() {
        $('.ui.radio.checkbox').checkbox();
        $('.ui.selection.dropdown').dropdown();
    },
    methods: {
        postContact: function() {
            this.axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content')
            this.axios.post(
                '/api/v1/contacts',
                {
                    'corner': this.newContact.corner,
                    'message': this.newContact.message,
                    'nickname': this.newContact.nickname,
                    'name': this.newContact.name,
                    'department': this.newContact.department,
                    'grade': this.newContact.grade,
                },
            )
                .then(function (response) {
                    console.log(this.newContact)
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
    },
}
</script>

<style scoped>
h2.ui.header {
  font-size: 1.28571429em;
}

.main {
  padding-top: 80px;
  padding-bottom: 40px;
}
</style>
