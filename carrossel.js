let contador = 1;

document.getElementById("radio1").checked = true;

setInterval(function(){
    tempo()
},2000);

function tempo() {
    contador++;
    if(contador > 4 ){
        contador = 1;
    }
    document.getElementById("radio1").checked = true;
}

