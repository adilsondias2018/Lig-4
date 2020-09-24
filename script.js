// Images
let colunas = document.getElementById('colunas').children // id do tbody
let count = 0
let empate = 0
let main = []

function addButton() {
  for (let i = 0; i < colunas.length; i++) {
    colunas[i].addEventListener("click", (e) => {
      play(e)
    })
  }
}
addButton()



function play(e) {
  const playerOne = document.createElement('img')
  const playerTwo = document.createElement('img')
  playerOne.src = './img/first.png'
  playerTwo.src = './img/second.png'
  let columnTarget = e.target.closest("tr")

  for (let i = 0; i < columnTarget.children.length; i++) {
    if (columnTarget.children[i].children.length === 0) {
      if (count % 2 === 0) {
        count++;
        columnTarget.children[i].classList.add("first")
        columnTarget.children[i].appendChild(playerOne)
        validate()
        return
      }
      else {
        count++;
        columnTarget.children[i].classList.add("second")
        columnTarget.children[i].appendChild(playerTwo)
        validate()
        return
      }
    }
  }

}

// Função adiciona array de td em cada indice do array main
function pushMain() {
  for (let i = 0; i < colunas.length; i++) {
    main.push(Array.from(colunas[i].children))
  }
}


// Função para validar as condições de vitória(diagonal, vertical, horizontal)
function validate() {

  // vertical
  for (let i = 0; i < main.length; i++) {
    for (let j = 0; j < main[i].length - 3; j++) {
      let elemento = main[i][j].classList[0];
      if (elemento !== undefined) {
        if (elemento === main[i][j + 1].classList[0] && elemento === main[i][j + 2].classList[0] && elemento === main[i][j + 3].classList[0]) {
          // Aqui vai a função para animar a box passando o "elemento" como parametro
          console.log(elemento)
        }
      }
    }
  }


  // horizontal
  for (let i = 0; i < main.length - 3; i++) {
    for (let j = 0; j < main[i].length; j++) {
      let elemento = main[i][j].classList[0];
      if (elemento !== undefined) {
        if (elemento === main[i + 1][j].classList[0] && elemento === main[i + 2][j].classList[0] && elemento === main[i + 3][j].classList[0]) {
          // Aqui vai a função para animar a box passando o "elemento" como parametro
          console.log(elemento)
        }
      }
    }
  }


  // diagonal esquerda -> direita
  for (let i = 0; i < main.length - 3; i++) {
    for (let j = 0; j < main[i].length - 3; j++) {
      elemento = main[i][j].classList[0];
      if (elemento !== undefined) {
        if (elemento === main[i + 1][j + 1].classList[0] && elemento === main[i + 2][j + 2].classList[0] && elemento === main[i + 3][j + 3].classList[0]) {
          // Aqui vai a função para animar a box passando o "elemento" como parametro
          console.log(elemento)
        }
      }
    }
  }



  // diagonal direita -> esquerda
  for (let i = 0; i < main.length; i++) {
    for (let j = 0; j < main[i].length - 3; j++) {
      elemento = main[i][j].classList[0];
      if (elemento !== undefined && i > 2) {
        if (elemento === main[i - 1][j + 1].classList[0] && elemento === main[i - 2][j + 2].classList[0] && elemento === main[i - 3][j + 3].classList[0]) {
          // Aqui vai a função para animar a box passando o "elemento" como parametro
          console.log(elemento)
        }
      }
    }
  }



  // empate
  for (let i = 0; i < main.length; i++) {
    for (let j = 0; j < main[i].length; j++) {
      if (main[i][j].classList.length !== 0) {
        empate++
        if (empate > 902) {
          // Aqui vai a função empate
          console.log("empate")
        }
      }
    }
  }



}


pushMain()



// let $btn = document.getElementById("btn")


// $btn.addEventListener("click", refresh)
// // apagar
// function refresh() {
//   for (let i = 0; i < colunas.length; i++) {
//     for (let j = 0; j < colunas[i].children.length; j++) {
//       colunas[i].children[j].removeChild("img")
//     }
//   }
// }