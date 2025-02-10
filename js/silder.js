var box = $('.box');
            var prev = $('.prev');
            var next = $('.next');
            var lis = $('.lis li').toArray();
            var img = $('.imgli').toArray();
            var imgIndex = 0;
            // 轮播图运行效果
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
            // 上一页下一页点击事件
            $(next).click(function(){
              // 判断图片是否是最后一个，是的话显示第一张，不是的话递增
              imgIndex = imgIndex == img.length-1 ? 0 : ++imgIndex;
              play(imgIndex);
            });
            $(prev).click(function(){
              imgIndex = imgIndex == 0 ? images.length-1 : --imgIndex;
              play(imgIndex);
            });
            // 圆钮点击切换对应图片
            $(lis).click(function(){
              var liIndex = $(this).index();
              imgIndex = liIndex;
              play(imgIndex);
            })

            // 自动播放
            var timer = null;
            $(document).ready(function(){
              setInterval(function(){
                $(next).click();
              },3000)
            })