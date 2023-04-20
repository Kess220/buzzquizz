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

  console.log(title, urlImg, numPerg, level);
}
