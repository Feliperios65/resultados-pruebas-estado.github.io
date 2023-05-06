function promedio(){
    let inputs = document.querySelectorAll("div.campo > input");
    let puntaje = document.querySelector('.score');
    let suma = 0;
    inputs.forEach(function(e){
        suma = suma + parseInt(e.value);
    })
    puntaje.textContent = suma;
}
