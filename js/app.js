// window.alert('prueba');
//setTimeout
function saludar(){
    document.write(`<p>Hola mundo 😎</p>`)
}

// window.setTimeout( saludar, 5000);
setTimeout( saludar, 5000);
setTimeout( ()=>{
    document.write(`<p>Hoy es un dia de lluvia 🌧️ </p>`)
}, 6000);


// setInterval