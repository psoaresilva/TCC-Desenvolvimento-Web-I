let body = document.body;
let temaSalvo = localStorage.getItem("modo-escuro");

if (temaSalvo === "true"){
  body.classList.add("modo-escuro");
}

document.addEventListener("DOMContentLoaded", () => {
  const botaoTema = document.getElementById("toggle-tema");
  const body = document.body;
  const temaSalvo = localStorage.getItem("modo-escuro");

  if (temaSalvo === "true") {
    body.classList.add("modo-escuro");
    if (botaoTema) botaoTema.textContent = "☀️";
  }

  if (botaoTema) {
    botaoTema.addEventListener("click", () => {
      body.classList.toggle("modo-escuro");
      const escuroAtivo = body.classList.contains("modo-escuro");
      localStorage.setItem("modo-escuro", escuroAtivo);
      botaoTema.textContent = escuroAtivo ? "☀️" : "🌙";
    });
  }
});
