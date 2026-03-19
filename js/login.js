function logar(){

    fetch('/login', {
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