<template>
<form class="ui form" @submit.prevent="postContact">
  <div class="grouped required fields">
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
  <div class="required field">
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
  <div class="required field">
    <label>所属</label>
    <select class="ui selection dropdown" name="department" v-model="newContact.department">
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
    <select class="ui selection dropdown" name="grade" v-model="newContact.grade">
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
  <div v-if="validState === 'uncheck'">
  </div>
  <div v-else-if="validState === 'ckecking'">
    <div class="ui icon message">
      <i class="notched circle loading icon"></i>
      <div class="content">
        <div class="header">
          検証中
        </div>
        <p>入力が正しいか検証しています。</p>
      </div>
    </div>
  </div>
  <div v-else-if="validState === 'error'">
    <div class="ui icon error message">
      <i class="remove icon"></i>
      <div class="content">
        <div class="header">
          送信失敗
        </div>
        <p>入力に不備があります。</p>
      </div>
    </div>
  </div>
  <div v-else-if="validState === 'success'">
    <div class="ui icon success message">
      <i class="checkmark icon"></i>
      <div class="content">
        <div class="header">
          送信成功
        </div>
        <p>お問合わせ・投稿ありがとうございます！</p>
      </div>
    </div>
  </div>
  <div v-else>
    Not A/B/C
  </div>
  <button v-bind:class="{ ui: true, submit: true, button: true, disabled: validState === 'success' }" type="submit">Submit</button>
  <div class="ui error message"></div>
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
            validState: 'uncheck',
        }
    },
    mounted: function() {
        $('.ui.radio.checkbox').checkbox();
        $('.ui.selection.dropdown').dropdown();
        $('.ui.form')
            .form({
                on: 'blur',
                inline: true,
                fields: {
                    corner: {
                        identifier: 'corner',
                        rules: [
                            {
                                type: 'number',
                                prompt: 'コーナーを選択してください。'
                            }
                        ]
                    },
                    message: {
                        identifier: 'message',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'メッセージを入力してください。'
                            }
                        ]
                    },
                    department: {
                        identifier: 'department',
                        rules: [
                            {
                                type: 'empty',
                                prompt: '所属を入力してください。'
                            },
                            {
                                type: 'number',
                                prompt: '所属を入力してください。'
                            }
                        ]
                    }
                }
            })
        ;
    },
    methods: {
        postContact: function() {
            this.validState = 'ckecking'
            if ($('.ui.form').form('is valid')){
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
                    })
                    .catch(function (error) {
                        this.validState = 'error'
                        console.log(error)
                })
                this.validState = 'success'
            }
            else {
                this.validState = 'error'
            }
            console.log(this.validState)
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

.message {
  margin-bottom: 14px !important;
}
</style>
