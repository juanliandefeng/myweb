var blog = new Vue({
    el: '#productList',
    data: {
        blogs: blogList,
        url: 'blogDetail.html?id=',
        currentPage: 1,
        perPage: 2,
        pageNum: '',
        pageList: ''
    },
    methods: {
        pages (){
            this.pageNum =  Math.ceil(this.blogs.length / this.perPage)

            const start = (this.currentPage - 1) * this.perPage
            const end = start + this.perPage

            this.pageList = this.blogs.slice(start, end)
            console.log(this.pageList)
        },
        searchPage(index){
            this.currentPage = index
            this.pages()

        },
    },
    mounted (){
        this.pages()
    }
})