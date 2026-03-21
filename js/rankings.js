const rankingBody = document.getElementById('rankingBody')

fetch('/ranking')
.then(response => response.json())
.then(data => {

    rankingBody.innerHTML = ''

    data.forEach((player, index) => {

        const tr = document.createElement('tr')


        let medalha = ''


        if(index === 0) medalha = '🥇'
        else if (index === 1) medalha = '🥈'
        else if (index === 2) medalha = '🥉'

        tr.innerHTML = `
        <td>${medalha} ${index + 1}</td>
        <td>${player.nome}</td>
        <td>${player.pontos}</td>

      `



        rankingBody.appendChild(tr)
    })
})

.catch(err => {
    rankingBody.innerHTML = '<tr><td colspan="3">Erro ao carregar ranking</td></tr>'
    console.log(err)
})