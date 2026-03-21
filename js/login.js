const mensagemErro = document.getElementById('mensagem-erro')

mensagemErro.innerText = 'Emerson é gay'

function logar(){

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value
        })
    })
    .then(res => res.json())
    .then(data => {
        alert(data.mensagem)

        if(data.usuario){
            localStorage.setItem("usuario", JSON.stringify(data.usuario))
            window.location.href = "index.html"
        }
    })
}