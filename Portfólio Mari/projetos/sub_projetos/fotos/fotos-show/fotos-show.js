// Toggle menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ----------------------------
// 🔹 Lightbox para galeria de fotos
// ----------------------------

// Criando elementos do lightbox dinamicamente
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const lightboxImg = document.createElement('img');
lightboxImg.id = 'lightbox-img';
lightbox.appendChild(lightboxImg);

const closeBtn = document.createElement('span');
closeBtn.id = 'close-lightbox';
closeBtn.innerHTML = '&times;';
lightbox.appendChild(closeBtn);

const prevBtn = document.createElement('span');
prevBtn.id = 'prev-lightbox';
prevBtn.innerHTML = '&#10094;';
lightbox.appendChild(prevBtn);

const nextBtn = document.createElement('span');
nextBtn.id = 'next-lightbox';
nextBtn.innerHTML = '&#10095;';
lightbox.appendChild(nextBtn);

// Obtendo todas as imagens da galeria
const galleryImages = document.querySelectorAll('.galeria-item img');
let currentIndex = 0;

// Abrir imagem no lightbox ao clicar
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
    lightbox.style.display = 'flex';
  });
});

// Exibir imagem no lightbox
function showImage(index) {
  if (index >= galleryImages.length) currentIndex = 0;
  if (index < 0) currentIndex = galleryImages.length - 1;
  lightboxImg.src = galleryImages[currentIndex].src;
}

// Fechar lightbox ao clicar no "X" ou fora da imagem
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Navegação entre imagens dentro do lightbox
prevBtn.addEventListener('click', () => {
  currentIndex--;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  showImage(currentIndex);
});

document.addEventListener("DOMContentLoaded", function () {
  const galeria = document.getElementById("galeria");
  const totalFotos = 321; // Quantidade total de fotos
  const horizontalFotos = []; // Fotos horizontais 

  for (let i = 1; i <= totalFotos; i++) {
      // Criar o container da imagem
      const div = document.createElement("div");
      div.classList.add("galeria-item");

      // Se a foto for horizontal, adiciona a classe correspondente
      if (horizontalFotos.includes(i)) {
          div.classList.add("horizontal");
      }

      // Criar a imagem
      const img = document.createElement("img");
      img.src = `../../../../assets/fotos-show/show${i}.jpg`;
      img.alt = `Foto Show ${i}`;

      // Adicionar a imagem ao container
      div.appendChild(img);
      galeria.appendChild(div);
  }
});

