const rankingBody = document.getElementById('rankingBody')

fetch('/ranking')
.then(response => response.json())
.then(data => {

    rankingBody.innerHTML = ''

    data.forEach((player, index) => {

        const row = document.createElement('tr')

  
        row.innerHTML= `
        <td>${index + 1}</td>
        <td>${player.nome}</td>
        <td>${player.pontos}</td>
        `

        rankingBody.appendChild(row)
    })
})

.catch(error => {
    rankingBody.innerHTML = `
    <tr>
    <td colspan="3">Erro ao carregar ranking</td>
    </tr>
    `


    console.log(error)
})