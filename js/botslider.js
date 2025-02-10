var botbox = document.querySelector('.botbanner_box')
        var ul = document.querySelector('.banner_scroll')
        var botbanner = document.querySelector('.botbanner')
        botbanner.style.width = 322 * 5 + 'px'
        var imgUrl = [
            'img/home/1.jpg',
            'img/home/2.jpg',
            'img/home/3.jpg',
            'img/home/4.jpg',
            'img/home/5.jpg',
            'img/home/6.jpg',
            'img/home/7.jpg',
        ]
        for(let i = 0; i < imgUrl.length; i ++){
            let lison = document.createElement('li')
            let imgs = document.createElement('img')
            imgs.src = imgUrl[i]
            lison.appendChild(imgs)
            ul.appendChild(lison)
        }
        var left = 0
        ul.style.left = 0
        setInterval(function(){
            left -= 322
            ul.style.left = left + 'px'
            ul.style.transition = 'left 1s'
            ul.addEventListener('transitionend',function(){
                left = 0
                ul.style.left = left
                ul.style.transition = 'none'
                //console.log(ul)
                if (ul.firstChild) {
                    //console.log(ul.firstChild)
                    ul.removeChild(ul.firstChild);
                    //console.log(ul.firstChild)
                    let firsturl = imgUrl.shift()
                    let newLi = document.createElement('li')
                    let newImg = document.createElement('img')
                    newImg.src = firsturl
                    newLi.append(newImg)
                    ul.append(newLi)
                    imgUrl.push(firsturl)
                }
                
            },{once: true})
        },3000)