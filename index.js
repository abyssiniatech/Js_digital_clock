let hrs=document.querySelector("#hrs");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");
// let micro=document.querySelector('#micro');



setInterval(function(){
    let currenttime=new Date();
    hrs.innerHTML=(currenttime.getHours()<10? "0": "" )+ currenttime.getHours();
    min.innerHTML=(currenttime.getMinutes()<10? "0": "" )+ currenttime.getMinutes();
    sec.innerHTML=(currenttime.getSeconds()<10? "0": "" )+ currenttime.getSeconds();
    // micro.innerHTML=(currenttime.getMilliseconds()<10? "0": "" )+ currenttime.getMilliseconds();

},1000)