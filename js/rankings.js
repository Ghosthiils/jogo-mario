const rankingDiv = document.getElementById('ranking')

fetch('/ranking')
.then(response => response.json())
.then(data => {

    rankingDiv.innerHTML = ''

    data.forEach((player, index) => {

        const playerElement = document.createElement('div')

        playerElement.classList.add('player')

        playerElement.innerHTML = `
        ${index + 1} - ${player.nome} : ${player.pontos} pontos`

        rankingDiv.appendChild(playerElement)
    })
})

.catch(error => {

    rankingDiv.innerHTML = 'Erro ao carregar os rankings'

    console.log(error)
})