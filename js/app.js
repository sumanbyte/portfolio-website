
    let toggleStatus = 1

    function showMenu(){
        if(toggleStatus ==1){
            document.getElementById('fa_bars').classList.add('none')
            document.getElementById('fa_times').classList.add('block')
            document.getElementById('navLinks').classList.add('touch-action');
            document.getElementById('navLinks').style.left = '0';
            toggleStatus = 0;
        }
    }
    
    function hideMenu(){
        if(toggleStatus == 0){
            document.getElementById('fa_bars').classList.remove('none')
            document.getElementById('fa_times').classList.remove('block');
            document.getElementById('navLinks').style.left = '-100%';
            toggleStatus =1;
        }
    }

    let navLinks = document.getElementById('navLinks');
    for(let i=0; i<navLinks.childNodes.length; i++){
        navLinks.childNodes[i].addEventListener('click', function(){
            hideMenu();
        })
    }
    
