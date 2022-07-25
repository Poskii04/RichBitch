
function playsound(nome){
    console.log('funziona');
    const audioElement = new Audio(); //ci ritorna un tag html di tipo audio
    audioElement.src = nome;
    audioElement.play();
}


