function startCount(){
    
}
function clockTimer(){
    const date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    if(m < 10) m += "0";
    if(h>=0 && h<=12) {
        document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + " AM";
    }else{
        document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + " PM";
    }
    setTimeout(clockTimer,1000);
}