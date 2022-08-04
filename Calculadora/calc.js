var a = Math.floor(Math.random() * 5) + 1;
var b = Math.floor(Math.random() * 5) + 1;
var operation = ["+", "-"][Math.floor(Math.random()*2)];

document.getElementById('n1').innerHTML = a
document.getElementById('n2').innerHTML = b
document.getElementById('operation').innerHTML = operation


function ask() {
    var answer = document.getElementById('answer').value

    if(answer == ''){
        document.getElementById('p').innerHTML = "Por favor, digite uma resposta"
        document.getElementById('img').src = "https://static.wikia.nocookie.net/lifeinthedreamhouse/images/8/88/361.gif/revision/latest/scale-to-width-down/250?cb=20171030194352"
    } else if (answer == eval(a + operation + b)) {
        document.getElementById('p').innerHTML = "Você acertou!"
        document.getElementById('img').src = "https://thumbs.gfycat.com/WhisperedRipeAltiplanochinchillamouse-size_restricted.gif"
    } else if (answer != eval(a + operation + b)){
        document.getElementById('p').innerHTML = "Você errou!\nA resposta correta é: " + eval(a + operation + b)
        document.getElementById('img').src = "https://i.pinimg.com/originals/a9/63/ec/a963ec81a4aa84c1df9529c3a83150f0.gif"
        document.getElementById('button2').innerHTML = `<button onclick="window.location.reload()" id="newQuestion">Recarregar pergunta</button>`
    }
}