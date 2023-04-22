axios.defaults.headers.common['Authorization'] = 'mIsztIcWVzidlM4aidMUviCe'
// Buscar Quizz
function buscarQuizz() {
  axios
    .get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes')
    .then(response => {})
    .catch(error => {})
}

buscarQuizz()

// Buscar Quizz por ID

function buscarQuizzID(ID) {
  axios
    .get(`https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes/${ID}`)
    .then(response => {})
    .catch(error => {})
}
buscarQuizzID(2)

let quizzNovo = axios
  .get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes')
  .then(response => {})
  .catch(error => {})

function buscarInfo() {
  const title = document.getElementById('title').value
  const urlImg = document.getElementById('urlImg').value
  const numPerg = document.getElementById('numPerg').value
  const level = document.getElementById('level').value
}
let title
let urlImg
let numPerg
let objFinal
let obj
let objLevel
let level
function gerarPergunta() {
  title = document.getElementById('title').value
  urlImg = document.getElementById('urlImg').value
  // pega elemento
  const paginaCriancaoQuiz = document.querySelector('.paginaCriancaoQuiz')
  paginaCriancaoQuiz.classList.add('invisivel')
  const criarPerguntas = document.querySelector('.criar-perguntas')
  criarPerguntas.classList.remove('invisivel')
  numPerg = document.getElementById('numPerg').value
  //pega a quantidade

  for (let i = 1; i <= numPerg; i++) {
    const criarPergunta = document.querySelector('.criar-pergunta')
    // pega a div que embloba tudo
    criarPergunta.innerHTML += `
    <div class="perguntas">
          <p  class="pergunta">Pergunta ${i}</p>
          <input id="textoPergunta${i}" type="text" placeholder="Texto da pergunta" name="title_${i}">
          <input id="CorPergunta${i}" type="text" placeholder="Cor de fundo da pergunta" name="color_${i}">
          <p class="respostaCorreta">Resposta Correta</p>
          <input id="respostaCorreta${i}" type="text" placeholder="Resposta correta" name="text_T_${i}">
          <input id="cachorroMijando${i}" type="url " placeholder="URL da imagem" name="image_T_${i}">
          <p class="respostaIncorreta">Respostas incorretas</p>
          <input id="primeiraRespostaIncorreta${i}" type="text" placeholder="Resposta incorreta 1" name="text1_${i}">
          <input id="urlPrimeiraRespostaIncorreta${i}" type="url" placeholder="URL da imagem 1" name="image1_${i}">
          <input id="segundaRespostaIncorreta${i}" type="text" placeholder="Resposta incorreta 2" name="text2_${i}">
          <input id="urlSegundaRespostaIncorreta${i}" type="url " placeholder="URL da imagem 2" name="image2_${i}">
          <input  id="terceiraRespostaIncorreta${i}" type="text" placeholder="Resposta incorreta 3" name="text3_${i}">
          <input id="urlTerceiraRespostaIncorreta${i}" type="url" placeholder="URL da imagem 3"name="image3_${i}">
    </div>
    
    
    
    
    `
  }
}
const algumaCoisa = document.getElementById('form')
algumaCoisa.addEventListener('submit', e => {
  e.preventDefault()
  const formData = {}
  Array.from(e.currentTarget.elements).map(item => {
    if (!item.name) return null
    formData[item.name] = item.value
  })

  obj = {
    title: title,
    image: urlImg,
    questions: Array.from(Array(parseInt(numPerg)).keys()).map(value => ({
      title: formData[`title_${value + 1}`],
      color: formData[`color_${value + 1}`],
      answers: [
        {
          text: formData[`text_T_${value + 1}`],
          image: formData[`image_T_${value + 1}`],
          isCorrectAnswer: true
        },
        {
          text: formData[`text1_${value + 1}`],
          image: formData[`image1_${value + 1}`],
          isCorrectAnswer: false
        },
        {
          text: formData[`text2_${value + 1}`],
          image: formData[`image2_${value + 1}`],
          isCorrectAnswer: false
        },
        {
          text: formData[`text3_${value + 1}`],
          image: formData[`image3_${value + 1}`],
          isCorrectAnswer: false
        }
      ]
    }))
  }
  console.log(obj)

  const criarPerguntas = document.querySelector('.criar-perguntas')
  const decisaoDosNiveis = document.querySelector('.decisao-dos-niveis')
  criarPerguntas.classList.add('invisivel')
  decisaoDosNiveis.classList.remove('invisivel')
  const level = document.getElementById('level').value
  // preciso gerar esse elemento quantas vezes for necessario
  for (let i = 1; i <= level; i++) {
    const gerarNiveis = document.querySelector('.gerarNiveis')
    gerarNiveis.innerHTML += `
    <div class="segura-nivel">
        <p>Nível ${i}</p>
        <input id='tituloNivel' type="text" placeholder="Título do nível" name='tituloNivel${i}' >
        <input type="text" placeholder="% de acerto mínima" name='porcentagemAcertos${i}' >
        <input type="url" placeholder="URL da imagem do nível" name='urlImagem${i}' >
        <input type="text" placeholder="Descrição do nível" name='descricaoNivel${i}'>
    </div>
    `
  }
})
function gerarLevels() {}

// Levels OBJ

const formLevels = document.getElementById('form-levels')
formLevels.addEventListener('submit', e => {
  e.preventDefault()
  const formDataLevels = {}
  const level = document.getElementById('level').value
  Array.from(e.currentTarget.elements).map(item => {
    if (!item.name) return null
    formDataLevels[item.name] = item.value
  })
  objLevel = {
    levels: Array.from(Array(parseInt(level)).keys()).map(value => ({
      title: formDataLevels[`tituloNivel${value + 1}`],
      image: formDataLevels[`urlImagem${value + 1}`],
      text: formDataLevels[`descricaoNivel${value + 1}`],
      minValue: parseInt(formDataLevels[`porcentagemAcertos${value + 1}`])
    }))
  }
  objFinal = { ...obj, ...objLevel }
  console.log(objFinal)
  axios
    .post('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes', objFinal)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })
})
