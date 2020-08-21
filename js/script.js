document.getElementById("hamburger-icon").addEventListener('click',()=>{
    if(document.getElementById("hamburger-menu").style.display=='block'){
        document.getElementById("hamburger-menu").style.display='none';
    }
    else{
        document.getElementById("hamburger-menu").style.display='block';
    }
})