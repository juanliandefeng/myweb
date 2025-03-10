const app = new Vue({
    el: '#productList',
    data: {
        products: [],
        listMessage: '',
        currentPage: 1,
        perPage: 10,
        pageList: '',
        pageNum: '',
        url: 'detail.html?id=',
        parameter: '&name='
    },
    methods: {
        setMessage(){
            var URLdata = new URLSearchParams(window.location.search)
            var URLdata1 = URLdata.get('key')
            var URLdata3 = URLdata.get('type')
            //console.log(URLdata1)
            
            if(URLdata1){
                var URLdata2 = URLdata1.split(' ')
                if(URLdata3 == 1){
                    this.products = tongdata.filter(item => {
                        return item.type.toLowerCase().includes( URLdata2[0].toLowerCase())
                    })
                }
                if(URLdata3 == 2){
                    
                    //console.log(URLdata2[0] + '1')
                    this.products = tongdata.filter(item => {
                        return item.type.toLowerCase().includes( URLdata2[1].toLowerCase())
                    })
                }
                
                this.listMessage = this.products
                if(this.listMessage.length <= 0){
                    alert("No Data")
                    return window.history.back()
                }
            }else {
                this.listMessage = tongdata
            }
            
        },
        //creat
        creatPage(){
            //console.log(this.listMessage)
            this.pageNum =  Math.ceil(this.listMessage.length / this.perPage)
            //console.log(this.pageNum)
            
            const start = (this.currentPage - 1) * this.perPage
            const end = start + this.perPage
            this.pageList = this.listMessage.slice(start, end)
        },
        searchPage(index){
            this.currentPage = index
            //console.log(index)
            //window.location.href = '分页器.html?page=' + index
            this.creatPage()
        },
    },
    mounted (){
        this.setMessage()
        this.creatPage()
    }
})
