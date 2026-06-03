// DATA DO NAMORO
const dataNamoro = new Date("2025-10-29");

function atualizarContador(){

  const hoje = new Date();

  const diferenca = hoje - dataNamoro;

  const dias = Math.floor(
    diferenca / (1000 * 60 * 60 * 24)
  );

  const contador = document.getElementById("contador");
  if (contador) {
    contador.innerHTML = `Nos conhecemos há ${dias} dias ❤️`;
  }
}

atualizarContador();

function mostrarSurpresa(){
  document.getElementById("surpresa").style.display = "block";
}

function mostrarPagina(pageId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.toggle('active', section.id === pageId);
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// CORAÇÕES
function criarCoracao(){

  const heart = document.createElement("div");

  heart.classList.add("heart");

  const emojis = ["❤️", "🌻", "🌻", "🍬", "✨"];
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  const largura = window.innerWidth;
  const x = Math.random() * largura;
  const centro = largura / 2;
  const dx = centro - x;

  heart.style.left = x + "px";
  heart.style.setProperty('--dx', dx + 'px');
  heart.style.fontSize = (Math.random() * 18 + 16) + "px";

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },15000);
}
// QUANTIDADE DE CORAÇÕES
for(let i = 0; i < 10; i++){
  criarCoracao();
}

setInterval(criarCoracao,250);

// TROCA DE FOTOS
const fotos = [
  "img/Foto1.jpg",
  "img/foto2.png",
  "img/foto3.webp",
  "img/foto4.jpeg",
  "img/foto5.png",
  "img/foto6.png",
];

let fotoAtual = 0;

setInterval(() => {

  fotoAtual++;

  if(fotoAtual >= fotos.length){
    fotoAtual = 0;
  }

  document.getElementById("foto").src =
    fotos[fotoAtual];

}, 3000);

function toggleMusica(){
  console.log("toggleMusica chamado");
  const musica = document.getElementById("musica");
  const botao = document.getElementById("botaoPlayPause");

  if(musica.paused){
    musica.play();
    botao.innerHTML = "⏸";
  }else{
    musica.pause();
    botao.innerHTML = "▶";
  }
}

function inicializarPlayer(){
  const musica = document.getElementById("musica");
  const botao = document.getElementById("botaoPlayPause");
  // Se autoplay, começa tocando, então botão ⏸
  if(!musica.paused){
    botao.innerHTML = "⏸";
  }else{
    botao.innerHTML = "▶";
  }
}

// Chamar após o DOM carregar
document.addEventListener("DOMContentLoaded", inicializarPlayer);

function abrirPlayer(){
  console.log("abrirPlayer chamado");
  const menu = document.getElementById("menuMusica");

  if(menu.style.display === "flex"){
    menu.style.display = "none";
  }else{
    menu.style.display = "flex";
  }
}

function mudarVolume(valor){

  const musica = document.getElementById("musica");

  musica.volume = valor;
}

function iniciarExperiencia() {
  const reveal = document.getElementById("reveal-screen");
  const musica = document.getElementById("musica");
  const botaoPlay = document.getElementById("botaoPlayPause");
  
  // Esconde a tela de reveal
  reveal.classList.add("hidden");
  
  // Toca a música e ajusta o botão
  musica.play().catch(e => console.log("Erro ao tocar música:", e));
  botaoPlay.innerHTML = "⏸";
}
