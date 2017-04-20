/**
 * Created by 蛋 on 2017/4/20.
 */
function addLoad(fun){
    var add=window.onload;
    if(typeof  window.onload!='function'){
        window.onload=fun;
    }else{
        window.onload=function () {
            add();
            fun();
        }
    }
}
function put(){
    var aqi = document.getElementById("aqi-input");
    var text = document.getElementById("aqi-display");
    var button=document.getElementById("button");
    button.onclick=function () {
        var write=aqi.value;
        text.innerHTML=write;
    }
}
addLoad(put);