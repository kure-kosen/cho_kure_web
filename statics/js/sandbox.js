var app = new Vue({
    el: '#app',
    data: {
	message: 'Hello Vue!'
    }
})

Vue.component('item', {
    template: '<p>hogehoge</p>'
})
