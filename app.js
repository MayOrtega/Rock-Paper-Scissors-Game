//User game
//funciones para imprimir la opcion del usuario
//Cambiamos atributo y asignamos valor 0

showRock = () => {
    document.getElementById('img-user').src = "./img/asteroide.png";
    document.getElementById('img-user').value = '0';    
}

showPaper = () => {
    document.getElementById('img-user').src = "./img/papel-higienico.png";
    document.getElementById('img-user').value = '1';    
}

showScissors = () => {
    document.getElementById('img-user').src = "./img/tijeras.png";
    document.getElementById('img-user').value = '2';    
}

//Machine Game
//randomization
showRandomImage = () => {
    let image = Math.floor(Math.random()*3);
    switch(image){
        case 0:
            document.getElementById('img-machine').src = './img/asteroide.png';
            document.getElementById('img-machine').value = '0'; 
        break;
        case 1:
            document.getElementById('img-machine').src = './img/papel-higienico.png';
            document.getElementById('img-machine').value = '1'; 
        break;
        case 2:
            document.getElementById('img-machine').src = './img/tijeras.png';
            document.getElementById('img-machine').value = '2'; 
        break;
        default: alert("something has gone wrong")

    }
    return;
}
