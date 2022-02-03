
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
/*
* Recaptcha
* name should be more than 7 character(customizeable).
* email should be in well format
* message should be more than 30 words(customizeable)
*/
let fname = document.getElementById('name');
let fnamespan = document.getElementById('name-span')
let email = document.getElementById('email');
let emailspan = document.getElementById('email-span');
let textarea = document.getElementById('textarea');
let textareaspan = document.getElementById('textarea-span');



let send = document.getElementById('send');
send.addEventListener('click', sendFunc);

function sendFunc(){
    if(!(isEmail(email.value))){
        emailspan.innerText = '**Please Enter a valid email address**';
        event.preventDefault();
        email.addEventListener('keyup', function(){
            if((isEmail(email.value)) || isEmpty(email)){
                emailspan.innerText = 'E-mail'
            }
        })
    }

    if(isName(fname.value)){
        fnamespan.innerText = '**Please enter a valid full name**'
        event.preventDefault();
        fname.addEventListener('keyup', function(){
            if((isName(fname.value)) || isEmpty(fname)){
                fnamespan.innerText = "Full Name";
            }
        })
    }

    
    if(isMessage(textarea.value) == false){
        textareaspan.innerText = '**Message word count should be between 20-200**';
        event.preventDefault()
        textarea.addEventListener('keyup', function(){
            if((isMessage(textarea.value)) || isEmpty(textarea)){
                textareaspan.innerText = 'Type your Message Here...';
            }
        })
       
    }
}




// utility functions
function isEmpty(text){
    let textval = text.value;
    if(textval === ''){
        return true
    }
    return false
}

function isMessage(message){
    if((message.split(' ').length < 20) || (message.split(' ').length > 200)){
        return false;
    }
    return true;
}

function isName(name){
    let namelen = name.length;
    if((namelen <= 6) || (namelen >= 18)){
        return true
    }
    return false
}


function isEmail(email){
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


//Dom Cache
$header = $('header');
$navLink = $header.find('nav a')
$logo = $header.find('.nav-head')

// implementing jquery to smooth scroll.
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

// Calculation of user scrolling to hide and show navbar
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


// Sending Email Function


