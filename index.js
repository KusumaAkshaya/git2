function func(){
   var x= document.getElementById("num").value;
    document.getElementById("para").style.fontSize = "50px";
    document.getElementById("para").innerHTML = "Hello " + x ;
    document.getElementById("para").style.color = "red";
    document.getElementById("num").value="";
    alert("hello "+ x)
}

function table(){
    var n = document.getElementById("num").value;
    for( var i=1; i<=10; i++){
        document.getElementById("para").innerHTML = n + "X" + i  + "=" + i*n ;
        }
}