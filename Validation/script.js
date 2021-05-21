/* const btn = document.querySelector("#sub");
const inpt1= document.getElementById("firstName");
const inpt2= document.getElementById("lastName");
const txt = document.getElementById("validate");
const container = document.querySelector("FORM");
const welcome = document.getElementById("welcome");

let flag1=flag2=true;
btn.disabled=flag1&&flag2;

validate=()=>{
    if ( (flag1==false) && (flag2==false) )
    {
        btn.disabled=false;
        txt.innerHTML="";
    }
    else
    {
        btn.disabled=true;
        txt.innerHTML="requird at least 3 charcters for each input";
    }    
}

inpt1.onchange=()=>{
    flag1=inpt1.value.length<3;
    validate();
}
inpt2.onchange=()=>{
    flag2=inpt2.value.length<3;
    validate();
}

btn.onclick=()=>{
    container.remove();
    welcome.innerHTML=`Hello ${inpt1.value} ${inpt2.value} .`;
} */