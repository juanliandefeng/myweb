const hot = new Vue({
    el: '#hot',
    data: {
        hotList: '',
    },
    methods: {
        setMessage (){
            this.hotList = tongdata.slice( -9 ).reverse()
        },
    },
    mounted (){
        this.setMessage()
    }
})
