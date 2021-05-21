img=document.getElementById('hi');

document.onmousemove = function(e) { 
    var x = e.clientX; 
    var y = e.clientY; 
    img.style.marginLeft = x+"px";
    img.style.marginTop = y+"px";
}