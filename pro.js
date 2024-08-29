let current="";
let previous="";
let op="";
let display=document.querySelector(".display");
let numbers=document.querySelectorAll(".num");
let operations=document.querySelectorAll(".op");
let dot=document.querySelector("#dot");
let equal=document.querySelector("#equal");
let clear=document.querySelector("#clear");

for(let number of numbers){
    number.addEventListener("click",()=>{
        current=current+number.id;
        display.textContent=current;
    })
}

dot.addEventListener("click",()=>{
    if(current.includes(".")){
        return;
    }else{
        current=current+".";
        display.textContent=current;
    }
})

clear.addEventListener("click",()=>{
    op="";
    current="";
    previous="";
    display.textContent="0";
})

for(let operation of operations){
    operation.addEventListener("click",()=>{
        
            if(current===""){
                return;
            }else if(op===""){
                op=operation.id;
                previous=current;
                current="";
                display.textContent=previous;
            }else{
                calculate();
                op=operation.id;
                previous=current;
                current="";
                display.textContent=previous;
            }
        
    })
}

equal.addEventListener("click",()=>{
    if(current==="" || previous==="" || op===""){
        return;
    }else{
        calculate();
    }
})

function calculate(){
    let result=0;
    switch(op){
        case "+": result=parseFloat(previous)+parseFloat(current);
        break;
        case "-": result=parseFloat(previous)-parseFloat(current);
        break;
        case "*": result=parseFloat(previous)*parseFloat(current);
        break;
        case "/": result=parseFloat(previous)/parseFloat(current);
        break;
        default: result=NaN;
    }
    current=result+"";
    op="";
    previous="";
    display.textContent=current;
}