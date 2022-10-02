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

let num;
incrementUserScore = () => {
    num = parseInt(document.getElementById('score-user').innerHTML) + 1;
    document.getElementById('score-user').innerHTML = num;
    return;
}

incrementMachineScore = () => {
    num = parseInt(document.getElementById('score-machine').innerHTML) + 1;
    document.getElementById('score-machine').innerHTML = num;
    return;
}

gameScore = () => {
    let selectUser, selectMachine;
    selectUser = document.getElementById('img-user').value;
    selectMachine = document.getElementById('img-machine').value;

    if(selectUser == '0' && selectMachine == '2'){
        incrementUserScore();

    } else if(selectUser == '1' && selectMachine == '0'){
        incrementUserScore();
    
    }else if(selectUser == '2' && selectMachine == '1'){
        incrementUserScore();
    
    }else  if(selectMachine == '0' && selectUser == '2'){
        incrementMachineScore();

    } else if(selectMachine == '1' && selectUser == '0'){
        incrementMachineScore();
    
    }else if(selectMachine == '2' && selectUser == '1'){
        incrementMachineScore();   
    }
    return;
}

controlWiner = () => {
    let counter = parseInt(document.getElementById('score-user').innerHTML);
    if(counter === 3){
        document.getElementById('result-message').innerHTML = "You Win! 🤩";
        resetCounters();
        return;
    
    } counter = parseInt(document.getElementById('score-machine').innerHTML);
    if(counter === 3){
        document.getElementById('result-message').innerHTML = "You Lose! 👻";
        resetCounters();
        return;
}
return;
}

resetCounters = () => {
    document.getElementById('score-user').innerHTML = '0';
    document.getElementById('score-machine').innerHTML = '0';
}

runLogic = () => {
    showRandomImage();
    gameScore();
    setInterval(controlWiner, 1000)
}





