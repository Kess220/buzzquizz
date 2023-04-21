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

function criePerguntas() {
  // Pergunta1
  const texto1 = document.getElementById("texto-pergunta").value;
  const corPerg1 = document.getElementById("corPerg").value;
  const perg1 = [texto1, corPerg1];
  // console.log(perg1);
  // Resposta correta
  const respostaCorreta = document.getElementById("res-correct").value;
  const urlCorreta = document.getElementById("url-correct").value;
  const correta = [respostaCorreta, urlCorreta];

  // console.log(correta);

  //Resposta incorretas
  const respostaIncorreta1 = document.getElementById("res-in1").value;
  const urlIncorreta1 = document.getElementById("url-in1").value;

  const respostaIncorreta2 = document.getElementById("res-in2").value;
  const urlIncorreta2 = document.getElementById("url-in2").value;

  const respostaIncorreta3 = document.getElementById("res-in3").value;
  const urlIncorreta3 = document.getElementById("url-in3").value;

  // console.log(
  //   respostaIncorreta1,
  //   urlIncorreta1,
  //   respostaIncorreta2,
  //   urlIncorreta2,
  //   respostaIncorreta3,
  //   urlIncorreta3
  // );

  let answers = [];

  for (let i = 1; i <= 5; i++) {
    let perguntaCorreta = i == 1;
    let answer = {
      text: texto1,
      image: corPerg1,
      perguntaCorreta: perguntaCorreta,
    };
    answers.push(answer);
  }
  console.log(answers);
}
