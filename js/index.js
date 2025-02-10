
        var box = document.querySelector('.box')
        var lunbo = document.querySelector('.lunbo')
        var next = document.querySelector('.next')
        var prev = document.querySelector('.prev')
        var img = Array.from(document.querySelectorAll('.box img'))
        var lis = Array.from(document.querySelectorAll('.box li'))
        var imgIndex = 0
        next.addEventListener('click',function(){
            // 判断图片是否是最后一个，是的话显示第一张，不是的话递增
            imgIndex = imgIndex == img.length-1 ? 0 : ++imgIndex;
            play(imgIndex);
        })
        prev.addEventListener('click',function(){
            imgIndex = imgIndex == 0 ? images.length-1 : --imgIndex;
            play(imgIndex);
        })
        function play(index){
            // 遍历图片数组，去掉所有选中，再重新给当前图片添加选中
            img.forEach(item => {
            item.classList.remove('active');
            });
            img[index].classList.add('active');

            // 遍历圆钮数组，去掉所有选中，再重新给当前圆钮添加选中，圆钮事件和图片事件放在一起绑定运行
            lis.forEach(item => {
            item.classList.remove('active');
            });
            lis[index].classList.add('active');
        }
        window.onload = function(){
            setInterval(function(){
                next.click()
              },3000)
        }