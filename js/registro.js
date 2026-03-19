function registrar(){

    fetch('/registro', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            senha: document.getElementById('senha').value
        })
    })
   
    .then(res => {
    if (!res.ok) {
        throw new Error("Erro no servidor")
    }
    return res.json()
})
.then(data => alert(data.mensagem))
.catch(err => {
    alert("Erro ao registrar")
    console.log(err)
})
}