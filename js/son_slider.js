const imgs = document.querySelectorAll('.son_imgs li')
const dots = document.querySelectorAll('.son_dots li')
var sonIndex = 0
function imgshow(){
    
    for(let i = 0; i < imgs.length; i++){
        imgs[i].classList.remove('son_active_img')
        dots[i].classList.remove('active_dots')
    }
    imgs[sonIndex].classList.add('son_active_img')
    dots[sonIndex].classList.add('active_dots')
    sonIndex ++
    if(sonIndex >= imgs.length){
        sonIndex = 0
    }
}
window.onload = function(){
    let showimg = setInterval(imgshow,2500)
}

