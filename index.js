//Author : khaleel

const mybtn=document.getElementById("mybtn");
const mydiv=document.getElementById("logo");
const myh2=document.getElementById("myh2");

mybtn.addEventListener("mouseover", mouseover=(event)=>{
    mydiv.textContent="😢";
    myh2.textContent="Plj..Dont do that!!";
});

mybtn.addEventListener("mouseout", mouseout=(event)=>{
    mydiv.textContent="❤️";
    myh2.textContent="click to break";
});

mybtn.addEventListener("click", (event)=>{
    mydiv.textContent="💔";
    myh2.textContent="it's OkAy!!";
    mybtn.disabled=true;
    mybtn.removeEventListener("mouseover",mouseover);
    mybtn.removeEventListener("mouseout",mouseout);
});
