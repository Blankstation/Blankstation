function addEvent(fun){
    var add=window.onload;
    if(typeof window.onload!='function'){
        window.onload=fun;
    }else{
        window.onload=function () {
            add();
            fun;
        }
    }
}
var aqiData=[
    ["北京",90],
    ["上海",50],
    ["福州",10],
    ["广州",50],
    ["成都",90],
    ["西安",100]
];
function NumShow(){
    if(!document.getElementById) return false;
    if(!document.createElement) return false;
    if(!document.getElementById("aqi-list")) return false;
    var num=aqiData.filter(function (a) {
        return a[1]>60;
    });
    num.sort(function(a,b){
        return b[1]-a[1];
    });
    var list=document.getElementById("aqi-list");
    for(var i=0;i<num.length;i++){
        var n=document.createElement("li");
        var text=document.createTextNode(num[i]);
        n.appendChild(text);
        list.appendChild(n);
    }
}
addEvent(NumShow);

