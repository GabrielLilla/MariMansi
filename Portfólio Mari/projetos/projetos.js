// Ícone que faz scroll para a seção de projetos
const scrollIcon = document.getElementById('scrollIcon');
const projectsSection = document.getElementById('projectsSection');

// Ao clicar na setinha, rola suave até a seção de projetos
scrollIcon.addEventListener('click', () => {
  projectsSection.scrollIntoView({ behavior: 'smooth' });
});

// Lógica para sumir com o texto gradualmente
const introText = document.querySelector('.intro-text');
const projectsOffsetTop = projectsSection.offsetTop;

window.addEventListener('scroll', () => {
  // "window.scrollY" diz o quanto a página foi rolada em pixels
  const scrollPos = window.scrollY;

  // Calcula a opacidade e o deslocamento do texto
  const fadeStart = 0; // Início do fade-out
  const fadeEnd = projectsOffsetTop - 100; // Termina antes de chegar às imagens

  // Opacidade diminui linearmente conforme o usuário rola
  let opacity = 1 - (scrollPos - fadeStart) / (fadeEnd - fadeStart);
  if (opacity < 0) opacity = 0; // Garante que não fique negativo
  if (opacity > 1) opacity = 1; // Garante que não ultrapasse 1

  introText.style.opacity = opacity;

  // Faz o texto "subir" para fora da tela
  introText.style.transform = `translateY(${scrollPos * -0.2}px)`;
});

// Menu hamburguer
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
