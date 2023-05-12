function promedio(){
    let inputs = document.querySelectorAll("div.campo > input");
    let puntaje = document.querySelector('.score');
    let suma = 0;
    inputs.forEach(function(e,i){
        let entero = parseInt(e.value)
        if (isNaN(entero) == false){
            suma = suma + entero; 
            puntaje.textContent = suma; 
        }
        else{
            alert("Solo se deben digitar numeros.");
            puntaje.textContent = 0;
        }
        e.value= ""
    })
}