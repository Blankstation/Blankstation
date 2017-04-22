function Num(){
    var text=document.getElementById("input");
    var btn=document.getElementsByTagName("button");
    var list=document.getElementById("num");
    var lilist=list.getElementsByTagName("li");
    btn[0].onclick=function () {
        if(text.value==""){
            alert("请输入一个数字");
        }else if(!isNaN(text.value)){
            var addLi=document.createElement("li");
            addLi.innerHTML=text.value;
            list.insertBefore(addLi,list.firstChild);
        }
    }
    btn[1].onclick=function (){
        alert("确认删除数字："+lilist[0].innerHTML);
        lilist[0].remove();
    }
    btn[2].onclick=function(){
        var addLi=document.createElement("li");
        addLi.innerHTML=text.value;
        insertAfter(addLi,list.lastChild);
    }
    btn[3].onclick=function () {
        alert("确认删除数字："+lilist[lilist.length-1].innerHTML);
        lilist[lilist.length-1].remove();
    }
}
function insertAfter(newElement,oldElement) {
   var parent=oldElement.parentNode;
   if(parent.lastChild==oldElement){
       parent.appendChild(newElement);
   }else{
       parent.insertBefore(newElement,oldElement.nextSibling);
   }
}
window.onload=Num;