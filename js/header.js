const products = new Vue({
    el: '#nav',
    data: {
        // 导航栏数据
        navList: shuju,
        isTrue: false,
        isFalse: true,
        url: 'product.html?key='
    },
    methods: {
        show (){
            this.isTrue = true
            this.isFalse = false
            console.log(this.isTrue)
        },
        hide (){
            this.isTrue = false
            this.isFalse = true
        }
    }
})