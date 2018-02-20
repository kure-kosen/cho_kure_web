<template>
<form class="ui form" @submit.prevent="postContact">
  <div class="required field">
    <label>コーナー名</label>
    <select class="ui selection dropdown" name="corner" v-model="contact.corner">
      <option value="">コーナー名</option>
      <option v-bind:value="value" v-for="(value, key) in enum_pairs.corners">
        {{ key }}
      </option>
    </select>
  </div>
  <div class="required field">
    <label>メッセージ</label>
    <textarea placeholder="メッセージ" name="message" v-model="contact.message"></textarea>
  </div>
  <div class="field">
    <label>ラジオネーム</label>
    <input type="text" name="nickname" placeholder="(例) ちょっくれくん" v-model="contact.nickname">
  </div>
  <div class="field">
    <label>お名前</label>
    <input type="text" name="name" placeholder="(例) 高専太郎" v-model="contact.name">
  </div>
  <div class="required field">
    <label>所属</label>
    <select class="ui selection dropdown" name="department" v-model="contact.department">
      <option value="">所属</option>
      <option v-bind:value="value" v-for="(value, key) in enum_pairs.departments">
        {{ key }}
      </option>
    </select>
  </div>
  <div class="field">
    <label>学年</label>
    <select class="ui selection dropdown" name="grade" v-model="contact.grade">
      <option value="">学年</option>
      <option v-bind:value="value" v-for="(value, key) in enum_pairs.grades">
        {{ key }}
      </option>
    </select>
  </div>
  <div class="field">
    <label>ラジオでの読上げについて</label>
    <div class="ui checkbox">
      <input type="checkbox" name="readable" v-model="contact.readable">
      <label>ラジオ内でメッセージを読上げてもよい場合はチェックを付けてください。</label>
    </div>
  </div>
  <div v-if="validState === 'uncheck'">
  </div>
  <div v-else-if="validState === 'checking'">
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
    <div class="ui icon error message">
      <i class="question icon"></i>
      <div class="content">
        <div class="header">
          予期しないエラー
        </div>
        <p>申し訳ございません。予期しないエラーが発生しました。お手数ですが最初からやり直してください。</p>
      </div>
    </div>
  </div>
  <button v-bind:class="{ ui: true, submit: true, button: true, disabled: validState === 'success' }" type="submit">送信</button>
</form>
</template>

<script>
module.exports = {
    data: function() {
        return {
            contact: {
                corner: 0,
                message: '',
                nickname: '',
                name: '',
                department: 99,
                grade: 99,
                readable: false,
            },
            enum_pairs: {},
            validState: 'uncheck',
        }
    },
    mounted: function() {
        $('.ui.radio.checkbox').checkbox();
        $('.ui.selection.dropdown').dropdown();
        $('.ui.checkbox').checkbox();
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
        this.getEnumPairs();
    },
    methods: {
        getEnumPairs: function() {
            var that = this
            this.axios.get('/api/v1/contacts/enum')
                .then(function (response) {
                    that.enum_pairs = response.data
                    console.log(that.enum_pairs)
                })
                .catch( function (error) {
                    console.log(error)
                })
        },
        postContact: function() {
            this.validState = 'checking'
            if ($('.ui.form').form('is valid')){
                this.axios.defaults.headers['X-CSRF-TOKEN'] = $('meta[name=csrf-token]').attr('content')
                this.axios.post(
                    '/api/v1/contacts',
                    {
                        'corner': this.contact.corner,
                        'message': this.contact.message,
                        'nickname': this.contact.nickname,
                        'name': this.contact.name,
                        'department': this.contact.department,
                        'grade': this.contact.grade,
                        'readable': this.contact.readable,
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
