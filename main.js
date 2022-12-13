let screen="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
        try{
        screen=eval(screen);
        document.querySelector('input').value=screen;
        }catch{
            document.querySelector('input').value="Error!"; 
        }

 
    }
    else if(e.target.innerHTML=='C'){
        screen="";
        document.querySelector('input').value=screen;
    }
    else{
console.log(e.target)
screen=screen+e.target.innerHTML;
document.querySelector('input').value=screen;
    }
})
})