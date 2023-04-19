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

function criarQuizz() {
  let quizzNovo = axios
    .get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
