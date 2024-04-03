let array = [["", "", ""],
["", "", ""],
["", "", ""]]

const tabContainer = document.querySelector('#tabContainer')
const circleScore = document.querySelector('#circleScore')
const croixScore = document.querySelector('#croixScore')
const player = document.querySelector('#player')
const bot = document.querySelector('#bot')
let cpuMode = null
let gameOver = false
let lap = 1
let circleWin = 0
let croixWin = 0

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mapAffich() {
    tabContainer.innerHTML = ""

    array.forEach((rows, index) => {
        let column = document.createElement('div')
        column.classList.add("column")
        tabContainer.appendChild(column)

        rows.forEach((cell, indey) => {
            let lign = document.createElement('div')
            lign.classList.add('cell')
            column.appendChild(lign)
            lign.addEventListener('click', () => {
                replace(lign, index, indey)

            }, { once: true })
        });

    });
}


function replace(lign, index, indey) {
    if (gameOver == false) {
        if (lap % 2 == 0) {
            const image = document.createElement('img')
            image.classList.add('rond')
            lign.appendChild(image)
            image.src = `./assets/image/rond.png`
            array[index][indey] = "o"
            win()


        }
        else if (lap % 2 != 0) {
            const image = document.createElement('img')
            image.classList.add('croix')
            lign.appendChild(image)
            image.src = `./assets/image/croix.jpg`
            array[index][indey] = "x"
            win()
            if (cpuMode == true && gameOver == false) {
                lap++
                cpuPlay()

                lap++
            }
        }

    }

    if (!cpuMode) {
        lap++

    }


}


function cpuPlay() {
    if (lap <= 9) {
        let randoma = random(0, 8)
        while (document.querySelectorAll(".cell")[randoma].innerHTML != "") {
            randoma = random(0, 8)

        }
        document.querySelectorAll(".cell")[randoma].click()
    }



}

function win() {

    const winText = document.querySelector('#winText')
    for (let i = 0; i < 3; i++) {
        if (array[i][0] != "" && array[i][0] == array[i][1] && array[i][1] == array[i][2]) {
            if (array[i][0] == "o") {
                circleWin++
                winText.textContent = ` L'équipe des ronds à gagner cette manche , +1 points pour eux !`
                circleScore.textContent = `score équipe des ronds = ${circleWin}`
                gameOver = true
                return

            } else {

                croixWin++
                winText.textContent = ` L'équipe des croix à gagner cette manche , +1 points pour eux !`
                croixScore.textContent = `score équipe des croix = ${croixWin}`
                gameOver = true
                return

            }
        }
        if (array[0][i] != "" && array[0][i] == array[1][i] && array[1][i] == array[2][i]) {
            if (array[0][i] == "o") {

                circleWin++
                winText.textContent = ` L'équipe des ronds à gagner cette manche , +1 points pour eux !`
                circleScore.textContent = `score équipe des ronds = ${circleWin}`
                gameOver = true
                return
            } else {

                croixWin++
                winText.textContent = ` L'équipe des croix à gagner cette manche , +1 points pour eux !`
                croixScore.textContent = `score équipe des croix = ${croixWin}`
                gameOver = true
                return
            }
        }

    }
    if (array[0][2] != "" && array[0][2] == array[1][1] && array[1][1] == array[2][0]) {
        if (array[0][2] == "o") {

            circleWin++
            winText.textContent = ` L'équipe des ronds à gagner cette manche , +1 points pour eux !`
            circleScore.textContent = `score équipe des ronds = ${circleWin}`
            gameOver = true
            return
        } else {

            croixWin++
            winText.textContent = ` L'équipe des croix à gagner cette manche , +1 points pour eux !`
            croixScore.textContent = `score équipe des croix = ${croixWin}`
            gameOver = true
            return
        }
    }
    if (array[0][0] != "" && array[0][0] == array[1][1] && array[1][1] == array[2][2]) {
        if (array[0][0] == "o") {

            circleWin++
            winText.textContent = ` L'équipe des ronds à gagner cette manche , +1 points pour eux !`
            circleScore.textContent = `score équipe des ronds = ${circleWin}`
            gameOver = true
            return
        } else {

            croixWin++
            winText.textContent = ` L'équipe des croix à gagner cette manche , +1 points pour eux !`
            croixScore.textContent = `score équipe des croix = ${croixWin}`
            gameOver = true
            return

        }

    }
    if (lap >= 9) {
        winText.textContent = ` Egalité , recommencez une parti pour tenter de determiner le gagnant !`
        gameOver = true
    }
}

function resetScore() {

    circleScore.textContent = "score équipe des ronds = 0"
    croixScore.textContent = "score équipe des croix = 0"
    circleWin = 0
    croixWin = 0

}

function retry() {
    lap = 1
    winText.textContent = ""
    gameOver = false
    array = [["", "", ""],
    ["", "", ""],
    ["", "", ""]]


    mapAffich()
}



player.addEventListener('click', () => {
    lap = 1
    winText.textContent = ""
    gameOver = false
    array = [["", "", ""],
    ["", "", ""],
    ["", "", ""]]
    cpuMode = false
    mapAffich()
})
bot.addEventListener('click', () => {
    lap = 1
    winText.textContent = ""
    gameOver = false
    array = [["", "", ""],
    ["", "", ""],
    ["", "", ""]]
    cpuMode = true
    mapAffich()
})

