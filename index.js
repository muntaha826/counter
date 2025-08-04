const incr= document.getElementById("binc");
const rese= document.getElementById("bres");
const decr= document.getElementById("bdec");
let count=0;

incr.onclick=function(){
count++;
document.getElementById("num").textContent=count;

}
rese.onclick=function(){
    count=0;
    document.getElementById("num").textContent=count;
}


decr.onclick=function(){
    count--;
    document.getElementById("num").textContent=count;
}