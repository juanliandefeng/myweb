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
            if (URLdata.get('key')){
                this.title = URLdata.get('key').toUpperCase()
            }
        }
    },
    mounted (){
        this.fn()
    }
})