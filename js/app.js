
let toggleStatus = 1

function showMenu() {
    if (toggleStatus == 1) {
        document.getElementById('fa_bars').classList.add('none')
        document.getElementById('fa_times').classList.add('block')
        document.getElementById('navLinks').classList.add('touch-action');
        document.getElementById('navLinks').style.left = '0';
        toggleStatus = 0;
    }
}

function hideMenu() {
    if (toggleStatus == 0) {
        document.getElementById('fa_bars').classList.remove('none')
        document.getElementById('fa_times').classList.remove('block');
        document.getElementById('navLinks').style.left = '-100%';
        toggleStatus = 1;
    }
}





let navLinks = document.getElementById('navLinks');
Array.from(navLinks.children).forEach(function(element){
    element.addEventListener('click', function(){
        hideMenu();
    })
})

let a = document.getElementsByClassName('a');
for(var i=0; i<a.length; i++){
    a[i].addEventListener('click', function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', "")
        this.className += " active"
    })
}

// https://dev.to/areeburrub/change-nav-link-s-style-as-you-scroll-4p62

// const sections = document.querySelectorAll('section')
// let navItem = document.querySelectorAll('nav .nav_links a')
// window.onscroll = () =>{
//     var current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         if(pageYOffset >= sectionTop){
//             current = section.getAttribute('id')
//         }
//     });

//     navItem.forEach((a) =>{
//         a.classList.remove('active')
//         if(a.classList.contains(current)){
//             navLinks.classList.add('active')
//         }
//     })
// }



//Dom Cache
$header = $('header');
$navLink = $header.find('nav a')
$logo = $header.find('.nav-head')

$(document).ready(function(){
    smoothScrolling(200);
});

function smoothScrolling(duration){
    ($navLink).add($logo).on('click', function(event){
        var $this = $(this);
        $body = $('html, body');
        target = $($this.attr('href'))

        event.preventDefault();

        $body.animate({
            scrollTop:target.offset().top - 70
        })
    })
}


var prevScrollpos = window.pageYOffset;


window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    
    if(prevScrollpos > currentScrollPos){
        document.getElementById('navbar').style.top = "0";
    }else{
        document.getElementById('navbar').style.top = "-90px"
    }
    prevScrollpos = currentScrollPos;
}

