axios.defaults.headers.common["Authorization"] = "mIsztIcWVzidlM4aidMUviCe";

// Buscar Quizz
function buscarQuizz() {
  axios
    .get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

buscarQuizz();

// Buscar Quizz por ID

function buscarQuizzID(ID) {
  axios
    .get(`https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes/${ID}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
buscarQuizzID(2);

let quizzNovo = axios
  .get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

function buscarInfo() {
  const title = document.getElementById("title").value;
  const urlImg = document.getElementById("urlImg").value;
  const numPerg = document.getElementById("numPerg").value;
  const level = document.getElementById("level").value;
  if (numPerg > 4) {
    alert("esse numero é muito alto");
  }

  console.log(title, urlImg, numPerg, level);
  obj = {
    title: title,
    image: urlImg,
    questions: [
      {
        title: "Título da pergunta 1",
        color: "#123456",
        answers: [
          {
            text: "Texto da resposta 1",
            image: "https://http.cat/411.jpg",
            isCorrectAnswer: true,
          },
          {
            text: "Texto da resposta 2",
            image: "https://http.cat/412.jpg",
            isCorrectAnswer: false,
          },
        ],
      },
      {
        title: "Título da pergunta 2",
        color: "#123456",
        answers: [
          {
            text: "Texto da resposta 1",
            image: "https://http.cat/411.jpg",
            isCorrectAnswer: true,
          },
          {
            text: "Texto da resposta 2",
            image: "https://http.cat/412.jpg",
            isCorrectAnswer: false,
          },
        ],
      },
      {
        title: "Título da pergunta 3",
        color: "#123456",
        answers: [
          {
            text: "Texto da resposta 1",
            image: "https://http.cat/411.jpg",
            isCorrectAnswer: true,
          },
          {
            text: "Texto da resposta 2",
            image: "https://http.cat/412.jpg",
            isCorrectAnswer: false,
          },
        ],
      },
    ],
    levels: [
      {
        title: "Título do nível 1",
        image: "https://http.cat/411.jpg",
        text: "Descrição do nível 1",
        minValue: 0,
      },
      {
        title: "Título do nível 2",
        image: "https://http.cat/412.jpg",
        text: "Descrição do nível 2",
        minValue: 50,
      },
    ],
  };
}
function gerarPergunta() {
  // pega elemento
  const paginaCriancaoQuiz = document.querySelector(".paginaCriancaoQuiz");
  paginaCriancaoQuiz.classList.add("invisivel");
  const criarPerguntas = document.querySelector(".criar-perguntas");
  criarPerguntas.classList.remove("invisivel");
  const numPerg = document.getElementById("numPerg").value;
  //pega a quantidade
  for (let i = 1; i <= numPerg; i++) {
    const criarPergunta = document.querySelector(".criar-pergunta");
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
    
    
    
    
    `;
    // renderizar o html
  }
  // fazer um loop para criar tantas perguntas que o cliente desejá

  // Buscando Info para colocar no OBJCT
}

// let answers = []

// for (let i = 1; i <= 5; i++) {
//   let perguntaCorreta = i == 1
//   let answer = {
//     text: texto1,
//     image: corPerg1,
//     perguntaCorreta: perguntaCorreta
//   }
//   answers.push(answer)
// }
// console.log(answers)
