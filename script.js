
function conversion(){
    var i=document.querySelector(".inp1");
    var p=document.querySelector(".p3");

    var s1=document.querySelector(".tp1");
    var t1 = s1.value;

    var s2=document.querySelector(".tp2");
    var t2 = s2.value;
    if(t1==="Cel1" && t2==="Far2")
    {
        var x=i.value;
        var y=((x*9)/5)+32;
        y=y.toFixed(2);
        p.innerHTML=y;
    }

    if(t1==="Cel1" && t2==="Kel2")
    {
        var x=i.value;
        var y=parseInt(x)+273.15;
        y=y.toFixed(2);
        p.innerHTML=y;
    }

    if(t1==="Far1" && t2==="Cel2")
    {
        var x=i.value;
        var y=((x-32)*5)/9;
        y=y.toFixed(2);
        p.innerHTML=y;
    }

    if(t1==="Far1" && t2==="Kel2")
    {
        var x=i.value;
        var y=(((x-32)*5)/9)+273.15;
        y=y.toFixed(2);
        p.innerHTML=y;
    }

    if(t1==="Kel1" && t2==="Cel2")
    {
        var x=i.value;
        var y=x-273.15;
        y=y.toFixed(2);
        p.innerHTML=y;
    }

    if(t1==="Kel1" && t2==="Far2")
    {
        var x=i.value;
        var y=(((x-273.15)*9)/5)+32;
        y=y.toFixed(2);
        p.innerHTML=y;
    }
}

function clear(){
    var i=document.querySelector(".inp1");
    var p=document.querySelector(".p3");

    var s1=document.querySelector(".tp1");
    var t1 = s1.value;

    var s2=document.querySelector(".tp2");
    var t2 = s2.value;
    i.value="";
    p.innerHTML="0";
    s1.value="Cel1";
    s2.value="Cel2";
}