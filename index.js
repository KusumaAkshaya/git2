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
    var arr=[] 
    for( var i=1; i<=10; i++){
        arr.push( n + "X" + i  + "=" + i*n );
        }
    document.getElementById("para").innerHTML = arr;    
}

function oddOrEven(){
    var n = document.getElementById("num").value;
    if(n%2) {
        document.getElementById("para").innerHTML = n + " is odd";
        document.getElementById("para").style.color = "RED";
        document.getElementById("num").value="";
        document.getElementById("para").style.fontSize = "29px";
    } 
    else{
        document.getElementById("num").value="";
        document.getElementById("para").innerHTML = n + " is even";
        document.getElementById("para").style.color = "blue";
        document.getElementById("para").style.fontSize = "29px";
    }
}