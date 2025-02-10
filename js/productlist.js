const app = new Vue({
    el: '#productList',
    data: {
        products: [],
        listMessage: '',
        currentPage: 1,
        perPage: 2,
        pageList: '',
        pageNum: '',
        url: 'detail.html?id=',
        parameter: '&name='
    },
    methods: {
        setMessage(){
            var URLdata = new URLSearchParams(window.location.search)
            var URLdata1 = URLdata.get('key')
            this.productName = URLdata1
            console.log(URLdata1)
            if(URLdata1){
                var URLdata2 = URLdata1.split(' ')
                console.log(URLdata2[0] + '1')
                this.products = tongdata.filter(item => {
                    console.log(item)
                return item.type.toLowerCase().includes(URLdata2[0].toLowerCase()) &&
                item.type.toLowerCase().includes(URLdata2[1].toLowerCase()) ||
                item.type.toLowerCase().includes(URLdata2[2].toLowerCase())
            })
                this.listMessage = this.products
            }else {
                this.listMessage = tongdata
            }
            
        },
        //creat
        creatPage(){
            console.log(this.listMessage)
            this.pageNum =  Math.ceil(this.listMessage.length / this.perPage)
            //console.log(this.pageNum)
            
            const start = (this.currentPage - 1) * this.perPage
            const end = start + this.perPage
            this.pageList = this.listMessage.slice(start, end)
        },
        searchPage(index){
            this.currentPage = index
            console.log(index)
            //window.location.href = '分页器.html?page=' + index
            this.creatPage()
        },
        // refreshWithParam(lis) {
        //     // 创建新 URL 对象
        //     const url = new URL(window.location.href);
        //     // 设置/更新参数
        //     url.searchParams.set('page', lis);
        //     // 跳转到新 URL 实现刷新
        //     window.location.href = url.toString();
        // }
    },
    mounted (){
        this.setMessage()
        this.creatPage()
        // window.addEventListener('load',() => {
        //         const params = new URLSearchParams(window.location.search)
        //         var theme = params.get('page')
        //         //console.log(theme)
        //         this.currentPage = theme
        //         alert(this.currentPage)
        //     })
    }
})
