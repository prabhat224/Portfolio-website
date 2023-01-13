console.log("script running")

document.querySelector('.cross').style.display='none';

document.querySelector('.ham').addEventListener("click",()=>{
    document.querySelector('.menu_bar').classList.toggle('menu_go'); 
    if(document.querySelector('.menu_bar').classList.contains('menu_go')){
        document.querySelector('.bars').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        document.querySelector('.bars').style.display='none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display='inline'        

        },1000)
    }
})

document.querySelector('.switch-button').onclick=()=>{
    document.querySelector('.color-switcher').classList.toggle('active')
}

   

document.querySelector('.default').addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('default')
})
document.querySelector('.red').addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('red_toggle')
})

document.querySelector('.light-blue').addEventListener('click',()=>{
    document.querySelector('body').classList.toggle('lightblue_toggle')
})




 
