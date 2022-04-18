let counter = 60;
let timeout;
function startCount(){
    if(counter == 0) clearTimeout(timeout);
    document.getElementById("time").value = counter;
    counter--;
    timeout = setTimeout(startCount,1000);
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