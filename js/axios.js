axios.defaults.headers.common["Authorization"] = "mIsztIcWVzidlM4aidMUviCe";
// Buscar Quizz
function criarQuizz() {
  const paginaInicial = document.querySelector(".paginaInicial");
  const paginaCriancaoQuiz = document.querySelector(".paginaCriancaoQuiz");
  paginaInicial.classList.add("invisivel");
  paginaCriancaoQuiz.classList.remove("invisivel");
  console.log("Estou aqui");
}
function meusQuizzes() {
  const title = localStorage.getItem('titleArray')
  const img = localStorage.getItem('imgArray')
  const titlePronto = JSON.parse(title)
  const imgPronto = JSON.parse(img)
  console.log(img, title)
  if(localStorage.length > 0){
    for (let i = 0; i < titlePronto.length && imgPronto.length; i++) {
      const tudoDentro = document.querySelector(".tudoDentro");
      tudoDentro.innerHTML += `
    <div class="quizzes" >
        <img src="${imgPronto[i]}" alt="" />
        <div>
           <p>${titlePronto[i]}</p>
        </div>
    </div>
    
    `;
    }
  }
 
}
meusQuizzes();
function todosOsQuizzes() {
  const criacaoQuizz = document.querySelector(".criacaoQuizz");
  const comQuizzJaFeito = document.querySelector(".comQuizzJaFeito");
  if (localStorage.length === 0) {
    console.log("funciona");
  } else {
    criacaoQuizz.classList.add("invisivel");
    comQuizzJaFeito.classList.remove("invisivel");
  }
  const todosOsQuizzesRenderizar = document.querySelector(
    ".todosOsQuizzesRenderizar"
  );
  axios
    .get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes")
    .then((response) => {
      console.log(response.data.length);
      for (let i = 0; i < response.data.length; i++) {
        const title = response.data[i].title;
        const image = response.data[i].image;
        const id = response.data[i].id;
        todosOsQuizzesRenderizar.innerHTML += `
        <div class="quizzes ${id}" >
          <img src="${image}" alt="" />
          <div>
            <p>${title}</p>
          </div>
        </div>
        
        `;
      }
    })
    .catch((erro) => {
      console.log("deu errado");
    });
  //pegar a div que ficar todos os quizzes
  //pega as informações no servidor
  // depois localizar todas as informações que eu preciso
  // imprimir no innerHtml
}
todosOsQuizzes();

function buscarQuizz() {
  axios
    .get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes")
    .then((response) => {})
    .catch((error) => {});
}

buscarQuizz();

// Buscar Quizz por ID

function buscarQuizzID(ID) {
  axios
    .get(`https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes/${ID}`)
    .then((response) => {})
    .catch((error) => {});
}
buscarQuizzID(2);

let quizzNovo = axios
  .get("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes")
  .then((response) => {})
  .catch((error) => {});

function buscarInfo() {
  if (numPerg > 4) {
    alert("esse numero é muito alto");
  }
}
let title;
let urlImg;
let numPerg;
let objFinal;
let obj;
let objLevel;
let level;
let idArray = [];
let titleArray = [];
let imgArray = [];
// Recupera os arrays armazenados no localStorage (se existirem)
let storedIdArray = JSON.parse(localStorage.getItem("idArray")) || [];
let storedTitleArray = JSON.parse(localStorage.getItem("titleArray")) || [];
let storedImgArray = JSON.parse(localStorage.getItem("imgArray")) || [];

function gerarPergunta() {
  title = document.getElementById("title").value;
  urlImg = document.getElementById("urlImg").value;
  numPerg = document.getElementById("numPerg").value;
  level = document.getElementById("level").value;
  if (numPerg < 3) {
    alert("O número de perguntas deve ser maior ou igual a 3 ");
    document.getElementById("numPerg").value = "";
  } else if (level < 2) {
    alert("O número de levels tem que ser maior ou igual a 2");
    document.getElementById("level").value = "";
  } else {
    imgArray = JSON.parse(localStorage.getItem("imgArray")) || [];
    imgArray.push(urlImg);
    localStorage.setItem("imgArray", JSON.stringify(imgArray));
    console.log(storedImgArray);
    titleArray = JSON.parse(localStorage.getItem("titleArray")) || [];
    titleArray.push(title);
    localStorage.setItem("titleArray", JSON.stringify(titleArray));

    // pega elemento
    const paginaCriancaoQuiz = document.querySelector(".paginaCriancaoQuiz");
    paginaCriancaoQuiz.classList.add("invisivel");
    const criarPerguntas = document.querySelector(".criar-perguntas");
    criarPerguntas.classList.remove("invisivel");
    numPerg = document.getElementById("numPerg").value;
    //pega a quantidade

    for (let i = 1; i <= numPerg; i++) {
      const criarPergunta = document.querySelector(".criar-pergunta");
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
    
    
    
    
    `;
    }
  }
}
const algumaCoisa = document.getElementById("form");
algumaCoisa.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {};
  Array.from(e.currentTarget.elements).map((item) => {
    if (!item.name) return null;
    formData[item.name] = item.value;
  });

  obj = {
    title: title,
    image: urlImg,
    questions: Array.from(Array(parseInt(numPerg)).keys()).map((value) => ({
      title: formData[`title_${value + 1}`],
      color: formData[`color_${value + 1}`],
      answers: [
        {
          text: formData[`text_T_${value + 1}`],
          image: formData[`image_T_${value + 1}`],
          isCorrectAnswer: true,
        },
        {
          text: formData[`text1_${value + 1}`],
          image: formData[`image1_${value + 1}`],
          isCorrectAnswer: false,
        },
        {
          text: formData[`text2_${value + 1}`],
          image: formData[`image2_${value + 1}`],
          isCorrectAnswer: false,
        },
        {
          text: formData[`text3_${value + 1}`],
          image: formData[`image3_${value + 1}`],
          isCorrectAnswer: false,
        },
      ],
    })),
  };
  console.log(obj);

  const criarPerguntas = document.querySelector(".criar-perguntas");
  const decisaoDosNiveis = document.querySelector(".decisao-dos-niveis");
  criarPerguntas.classList.add("invisivel");
  decisaoDosNiveis.classList.remove("invisivel");
  const level = document.getElementById("level").value;
  // preciso gerar esse elemento quantas vezes for necessario
  for (let i = 1; i <= level; i++) {
    const gerarNiveis = document.querySelector(".gerarNiveis");
    gerarNiveis.innerHTML += `
    <div class="segura-nivel">
        <p>Nível ${i}</p>
        <input id='tituloNivel' type="text" placeholder="Título do nível" name='tituloNivel${i}' >
        <input type="text" placeholder="% de acerto mínima" name='porcentagemAcertos${i}' >
        <input type="url" placeholder="URL da imagem do nível" name='urlImagem${i}' >
        <input type="text" placeholder="Descrição do nível" name='descricaoNivel${i}'>
    </div>
    `;
  }
});
function gerarLevels() {}

// Levels OBJ

const formLevels = document.getElementById("form-levels");
formLevels.addEventListener("submit", (e) => {
  e.preventDefault();
  const formDataLevels = {};
  const level = document.getElementById("level").value;
  Array.from(e.currentTarget.elements).map((item) => {
    if (!item.name) return null;
    formDataLevels[item.name] = item.value;
  });
  objLevel = {
    levels: Array.from(Array(parseInt(level)).keys()).map((value) => ({
      title: formDataLevels[`tituloNivel${value + 1}`],
      image: formDataLevels[`urlImagem${value + 1}`],
      text: formDataLevels[`descricaoNivel${value + 1}`],
      minValue: parseInt(formDataLevels[`porcentagemAcertos${value + 1}`]),
    })),
  };
  objFinal = { ...obj, ...objLevel };
  axios
    .post("https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes", objFinal)
    .then((response) => {
      let id = response.data.id;
      idArray = JSON.parse(localStorage.getItem("idArray")) || [];

      idArray.push(id);
      // Armazena os arrays atualizados no localStorage
      localStorage.setItem("idArray", JSON.stringify(idArray));
      console.log(storedIdArray);
    })
    .catch((error) => {
      console.error(error);
    });
  // Armazena os arrays atualizados no localStorage

  const decisaoDosNiveis = document.querySelector(".decisao-dos-niveis");
  const quisPronto = document.querySelector(".quis-pronto");
  const img = document.querySelector(".img");
  decisaoDosNiveis.classList.add("invisivel");
  quisPronto.classList.remove("invisivel");
  const storageImgArray = localStorage.getItem("imgArray");
  const arrayUltimaImg = JSON.parse(storageImgArray);
  const ultimaImg = arrayUltimaImg[arrayUltimaImg.length - 1];
  // title
  const storageTittle = localStorage.getItem("titleArray");
  const arrayTitle = JSON.parse(storageTittle);
  const ultimaTitle = arrayTitle[arrayTitle.length - 1];
  console.log(`teste ${ultimaImg} ${storageTittle}`);
  img.innerHTML += `
    
        <img class="foto-img" src='${ultimaImg}' />
        <p class="titulo-img">${ultimaTitle}</p>
    

    
    `;
});
