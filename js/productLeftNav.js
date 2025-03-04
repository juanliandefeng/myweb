var leftNav = new Vue({
    el: '#nav-list',
    data: {
        navList: shuju
    }
})
var leftNav = new Vue({
    el: '#middle_top',
    data: {
        title: 'PRODUCT',
    },
    methods: {
        fn (){
            var URLdata = new URLSearchParams(window.location.search)
            const id = URLdata.get('id')
            if (id){
                this.title = tongdata.find( item => item.id == id).title.toUpperCase()
            }
        }
    },
    mounted (){
        this.fn()
    }
})
