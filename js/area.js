function area(width,length){
    
    return(width * length);
}

function areaUpdate(){
    const length = document.getElementById("length").valueAsNumber;
    const width = document.getElementById("width").valueAsNumber;
   document.getElementById("areaResult").textContent ="Area: "+ area(width,length);
}