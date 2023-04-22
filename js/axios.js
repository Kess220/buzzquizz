axios.defaults.headers.common['Authorization'] = 'mIsztIcWVzidlM4aidMUviCe'
// Buscar Quizz
function buscarQuizz() {
  axios
    .get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes')
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })
}

buscarQuizz()

// Buscar Quizz por ID

function buscarQuizzID(ID) {
  axios
    .get(`https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes/${ID}`)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
}
buscarQuizzID(2)

let quizzNovo = axios
  .get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes')
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })

function buscarInfo() {
  const title = document.getElementById('title').value
  const urlImg = document.getElementById('urlImg').value
  const numPerg = document.getElementById('numPerg').value
  const level = document.getElementById('level').value
  if (numPerg > 4) {
    alert('esse numero é muito alto')
  }
}
function gerarPergunta() {
  // pega elemento
  const paginaCriancaoQuiz = document.querySelector('.paginaCriancaoQuiz')
  paginaCriancaoQuiz.classList.add('invisivel')
  const criarPerguntas = document.querySelector('.criar-perguntas')
  criarPerguntas.classList.remove('invisivel')
  const numPerg = document.getElementById('numPerg').value
  //pega a quantidade

  for (let i = 1; i <= numPerg; i++) {
    const criarPergunta = document.querySelector('.criar-pergunta')
    // pega a div que embloba tudo
    criarPergunta.innerHTML += `
    <div class="perguntas">
          <p  class="pergunta">Pergunta ${i}</p>
          <input id="textoPergunta${i}" type="text" placeholder="Texto da pergunta">
          <input id="CorPergunta${i}" type="text" placeholder="Cor de fundo da pergunta">
          <p class="respostaCorreta">Resposta Correta</p>
          <input id="respostaCorreta${i}" type="text" placeholder="Resposta correta">
          <input id="cachorroMijando${i}" type="url " placeholder="URL da imagem">
          <p class="respostaIncorreta">Respostas incorretas</p>
          <input id="primeiraRespostaIncorreta${i}" type="text" placeholder="Resposta incorreta 1">
          <input id="urlPrimeiraRespostaIncorreta${i}" type="url" placeholder="URL da imagem 1">
          <input id="segundaRespostaIncorreta${i}" type="text" placeholder="Resposta incorreta 2">
          <input id="urlSegundaRespostaIncorreta${i}" type="url " placeholder="URL da imagem 2">
          <input  id="terceiraRespostaIncorreta${i}" type="text" placeholder="Resposta incorreta 3">
          <input id="urlTerceiraRespostaIncorreta${i}" type="url" placeholder="URL da imagem 3">
    </div>
    
    
    
    
    `
  }

  setInterval(() => {
    for (let j = 1; j <= numPerg; j++) {
      const textoPergunta = document.getElementById(`textoPergunta${j}`).value
      const corPergunta = document.getElementById(`CorPergunta${j}`).value
      const respostaCorreta = document.getElementById(
        `respostaCorreta${j}`
      ).value
      const cachorroMijando = document.getElementById(
        `cachorroMijando${j}`
      ).value
      const primeiraRespostaIncorreta = document.getElementById(
        `primeiraRespostaIncorreta${j}`
      ).value
      const urlPrimeiraRespostaIncorreta = document.getElementById(
        `urlPrimeiraRespostaIncorreta${j}`
      ).value
      const segundaRespostaIncorreta = document.getElementById(
        `segundaRespostaIncorreta${j}`
      ).value
      const urlSegundaRespostaIncorreta = document.getElementById(
        `urlSegundaRespostaIncorreta${j}`
      ).value
      const terceiraRespostaIncorreta = document.getElementById(
        `terceiraRespostaIncorreta${j}`
      ).value
      const urlTerceiraRespostaIncorreta = document.getElementById(
        `urlTerceiraRespostaIncorreta${j}`
      ).value

      console.log(
        textoPergunta,
        corPergunta,
        respostaCorreta,
        cachorroMijando,
        primeiraRespostaIncorreta,
        urlPrimeiraRespostaIncorreta,
        segundaRespostaIncorreta,
        urlSegundaRespostaIncorreta,
        terceiraRespostaIncorreta,
        urlTerceiraRespostaIncorreta
      )
    }
  }, 30000) // 30 segundos em milissegundos
}
function gerarNiveis() {
  const criarPerguntas = document.querySelector('.criar-perguntas')
  const decisaoDosNiveis = document.querySelector('.decisao-dos-niveis')
  criarPerguntas.classList.add('invisivel')
  decisaoDosNiveis.classList.remove('invisivel')
  const level = document.getElementById('level').value
  console.log(level)
  // preciso gerar esse elemento quantas vezes for necessario
  for (let i = 1; i <= level; i++) {
    const gerarNiveis = document.querySelector('.gerarNiveis')
    gerarNiveis.innerHTML += `
    <div class="segura-nivel">
        <p>Nível ${i}</p>
        <input id='tituloNivel' type="text" placeholder="Título do nível"  >
        <input type="text" placeholder="% de acerto mínima" >
        <input type="url" placeholder="URL da imagem do nível" >
        <input type="text" placeholder="Descrição do nível" ></input>
    </div>
    `
  }
}
const niveis = {}
function pegarInformacoesNiveis() {}
