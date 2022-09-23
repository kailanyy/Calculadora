do{
    var a = Math.floor(Math.random() * 5) + 1;
    var b = Math.floor(Math.random() * 5) + 1;
    var sinal = ["+", "-"][Math.floor(Math.random()*2)];
    var resposta = eval(a + sinal + b)

}while(resposta<0 || resposta>9)

document.getElementById('n1').innerHTML = a
document.getElementById('n2').innerHTML = b
document.getElementById('sinal').innerHTML = sinal

document.onkeyup = function (evento){
    let tecla = Number(evento.key)

    document.getElementById('answer').value = tecla

    setTimeout(function() {
        window.location.reload(1);
    }, 2500);

    if(tecla == eval(a + sinal + b)){
        document.getElementById('p').innerHTML = "Uau, você é muito inteligente!"
        document.getElementById('img').src = 'https://thumbs.gfycat.com/WhisperedRipeAltiplanochinchillamouse-size_restricted.gif'
    } else {
        document.getElementById('p').innerHTML = `A resposta está errada, a resposta correta é ${resposta}`
        document.getElementById('img').src = 'https://i.pinimg.com/originals/a9/63/ec/a963ec81a4aa84c1df9529c3a83150f0.gif'
    }
}