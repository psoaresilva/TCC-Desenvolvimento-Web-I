document.getElementById("mensagem-dinamica").innerHTML =
  "Explore os projetos clicando nos botões!";

let botoes = document.querySelectorAll(".btn-primary");

botoes.forEach((botao) => {
  botao.addEventListener("click", function () {
    document.getElementById("mensagem-dinamica").innerHTML =
      "Carregando detalhes do projeto...";
  });
});

let formulario = document.querySelector("form");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  console.log("Nome:", nome);
  console.log("Email:", email);
  console.log("Mensagem", mensagem);

  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Digite um e-mail válido.");
    return;
  }

  let resumo = document.getElementById("resumo");
  resumo.classList.remove("d-none");
  resumo.innerHTML = `
  <h5>Mensagem recebida!</h5>
  <p><strong>Nome:</strong> ${nome}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Mensagem:</strong> ${mensagem}</p>
`;
});

let botaoTema = document.getElementById("toggle-tema");
let body = document.body;

let temaSalvo = localStorage.getItem("modo-escuro");

if (temaSalvo === "true") {
  body.classList.add("modo-escuro");
  botaoTema.textContent = "☀️";
}

botaoTema.addEventListener("click", () => {
  body.classList.toggle("modo-escuro");

  let escuroAtivo = body.classList.contains("modo-escuro");
  localStorage.setItem("modo-escuro", escuroAtivo);

  botaoTema.textContent = escuroAtivo ? "☀️" : "🌙";
});

const projetos = [
  {
    titulo: "Red Dead redemption 2",
    imagem:
      "https://cdn.glitch.global/bc8b67c9-2d54-437d-819e-0b66d26bb34b/rdr2.png?v=1743715095612",
    descricao: `Red Dead Redemption 2 é um épico de mundo aberto desenvolvido pela 
                Rockstar Games. Ambientado em 1899, você joga como Arthur Morgan, um
                membro da gangue Van der Linde que enfrenta o declínio do velho oeste.`,
    link: "https://rockstargames.com/br/reddeadredemption2",
  },
  {
    titulo: "The Last of Us 2",
    imagem:
      "https://cdn.glitch.global/bc8b67c9-2d54-437d-819e-0b66d26bb34b/tlou2.png?v=1743715293637",
    descricao: "Um jogo de sobrevivência e drama com uma história marcante.",
    link: "https://naughtydog.com/blog/the_last_of_us_part_ii",
  },
  {
    titulo: "Shadow of the Colossus",
    imagem:
      "https://cdn.glitch.global/bc8b67c9-2d54-437d-819e-0b66d26bb34b/SOTC.jpg?v=1744310417021",
    descricao: "Uma aventura épica com batalhas contra colossos gigantes.",
    link: "https://www.playstation.com/pt-br/games/shadow-of-the-colossus/",
  },
  {
    titulo: "Life is Strange",
    imagem:
      "https://cdn.glitch.global/bc8b67c9-2d54-437d-819e-0b66d26bb34b/LifeIsStrangeCapa.jpg?v=1749761043521",
    descricao:
      "Uma história de Max Caulfield, uma estudante de fotografia que descobre ser capaz de rebobinar o tempo.",
    link: "https://lifeisstrange-square--enix--games-com.translate.goog/en-us?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc&_x_tr_hist=true",
  },
  {
    titulo: "Gorogoa",
    imagem:
      "https://cdn.glitch.global/bc8b67c9-2d54-437d-819e-0b66d26bb34b/gorogoa.jpg?v=1749761048410",
    descricao:
      "Gorogoa não é só um jogo, é uma obra de arte, que se expressa por meio de ilustrações vivas e elegantes, e com mecânicas de quebra-cabeça totalmente únicas",
    link: "https://annapurnainteractive.com/en/games/gorogoa",
  },
  {
    titulo: "God Of War 3",
    imagem:
      "https://cdn.glitch.global/bc8b67c9-2d54-437d-819e-0b66d26bb34b/God_of_War_3_capa.png?v=1749761045957",
    descricao: "Uma grande carnificina da mitologia grega.",
    link: "https://www.playstation.com/pt-br/games/god-of-war-iii-remastered/",
  },
];

const container = document.getElementById("carousel-inner");

projetos.forEach((projeto, indice) => {
  const ativo = indice === 0 ? "active" : "";

  const slide = document.createElement("div");
  slide.className = `carousel-item ${ativo}`;

  slide.innerHTML = `
    <div class="text-center">
      <img src="${projeto.imagem}" class="d-block mx-auto img-fluid rounded mb-3" style="width: 300px; height: 300px; object-fit: cover;" alt="${projeto.titulo}">
      <h5>${projeto.titulo}</h5>
      <button class="btn btn-outline-primary mt-2" data-indice="${indice}" data-bs-toggle="modal" data-bs-target="#modalProjeto">
        Ver Detalhes
      </button>
    </div>
  `;

  container.appendChild(slide);

  const botao = slide.querySelector("button");
  botao.addEventListener("click", () => {
    document.getElementById("modalProjetoLabel").textContent = projeto.titulo;
    document.getElementById("modalImagem").src = projeto.imagem;
    document.getElementById("modalDescricao").textContent = projeto.descricao;
    document.getElementById("modalLink").href = projeto.link;
  });
});
