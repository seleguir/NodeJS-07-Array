// Filtrando números 
const fs = require('fs');

fs.readFile('numeros.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    // El método split() divide el archivo en líneas, y en la primera se obtiene el total de los números que cumplen con la propiedad
    const lineas = data.split('\n'); 
    // Se obtiene la segunda línea con los números a evaluar y se convierten en un vector de números, con el método map(Number)
    const numeros = lineas[1].split(' ').map(Number);

    function filtranum(numeros, resultado) {
        let count = 0; // Devuelve el total de números que cumplen la propiedad
        for (let num of numeros) { 
        // Para verificar la pp, se convierten los números a una cadena con "toString" y se obtiene el primer dígito "charAt(0)" y el último "charAt(num.toString().length - 1"
        if (num.toString().charAt(0) === num.toString().charAt(num.toString().length - 1)) { 
            resultado.push(num); // si el número cumple con la propiedad, se agrega al vector con "push()"
            count++;
         }
    }
        return count;
}
    let resultado = []; // almaceno los números resultantes
    const count = filtranum (numeros, resultado); 
    
    console.log(count);
    console.log(resultado.join(' ')); // muestro los números que cumplen con la condición separados por espacios
});
