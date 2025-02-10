var leftNav = new Vue({
    el: '#nav-list',
    data: {
        navList: shuju
    }
})
var leftNav = new Vue({
    el: '#middle_top',
    data: {
        title: 'PRODUCT'
    },
    methods: {
        fn (){
            var URLdata = new URLSearchParams(window.location.search)
            var URLdata1 = URLdata.get('key').toUpperCase()
            this.title = URLdata1
        }
    },
    mounted (){
        this.fn()
    }
})