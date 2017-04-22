/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData(){
    if(!document.getElementById)return false;
    if(!document.getElementsByTagName)return false;
    var source=document.getElementById("source");
    var list=source.getElementsByTagName("li");
    var data=new Array();
    for(var i=0;i<list.length;i++){
        var city=list[i].innerText.slice(0,7);
        var num=parseInt(list[i].getElementsByTagName("b")[0].innerHTML);
        data.push([city,num]);
    }
    return data;
}
/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
    data.sort(function (a,b) {
        return a[1]-b[1];
    });
    return data;
}
/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
    if(!document.getElementById)return false;
    if(!document.createElement)return false;
    var resort=document.getElementById("resort");
    for(var i=0;i<data.length;i++){
        var li=document.createElement("li");
        //var text=document.createTextNode(data[i]);
        //li.appendChild(text);
        li.innerHTML="第"+[i+1]+"名："+data[i][0]+"<b>"+data[i][1]+"</b>";
        resort.appendChild(li);
}
}

function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}

function init() {

    // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    if(!document.getElementById)return false;
    var button=document.getElementById("sort-btn");
    button.onclick=function(){
        btnHandle();
}
}
window.onload=init;