// Dados dos verbetes
const verbetes = [
  {
    "id": "1",
    "palavra": "Arretado",
    "categoria": "Gírias",
    "imagem": "https://placehold.co/300x200/orange/white?text=Arretado",
    "definicao": "Que é muito bom, forte, corajoso. Usado como elogio: 'Esse cabra é arretado!'",
    "exemplo": "— Ôxe, o baile foi arretado ontem!",
    "curiosidade": "Muito usado no Nordeste como expressão de intensidade."
  },
  {
    "id": "2",
    "palavra": "Cabra da peste",
    "categoria": "Gírias",
    "imagem": "https://placehold.co/300x200/green/white?text=Cabra",
    "definicao": "Expressão usada para se referir a alguém ou algo que é muito ruim, chato ou problemático.",
    "exemplo": "Essa moto é cabra da peste, não pega nunca.",
    "curiosidade": "Tem origem em histórias populares e é uma expressão carismática do sertão."
  },
  {
    "id": "3",
    "palavra": "Mucuripe",
    "categoria": "Lugares",
    "imagem": "https://placehold.co/300x200/blue/white?text=Mucuripe",
    "definicao": "Bairro de Fortaleza conhecido por sua praia e cultura popular.",
    "exemplo": "Vamos pro mucuripe no final de semana?",
    "curiosidade": "O nome vem do tupi e significa 'lugar onde há muito peixe'."
  },
  {
    "id": "4",
    "palavra": "Mandacaru",
    "categoria": "Natureza",
    "imagem": "https://placehold.co/300x200/yellow/black?text=Mandacaru",
    "definicao": "Planta espinhosa típica do sertão nordestino, usada como cerca viva.",
    "exemplo": "O sertão é coberto de mandacaru.",
    "curiosidade": "Sua flor é símbolo da caatinga e floresce raramente."
  },
  {
    "id": "5",
    "palavra": "Buchada",
    "categoria": "Comidas",
    "imagem": "https://placehold.co/300x200/brown/white?text=Buchada",
    "definicao": "Prato tradicional feito com vísceras de bode ou carneiro, temperado e cozido.",
    "exemplo": "Hoje tem buchada no restaurante da praça.",
    "curiosidade": "Prato típico de festas no interior do Ceará."
  },
  {
    "id": "6",
    "palavra": "Cariri",
    "categoria": "Regiões",
    "imagem": "https://placehold.co/300x200/purple/white?text=Cariri",
    "definicao": "Região do sul do Ceará, conhecida por suas cidades históricas e clima ameno.",
    "exemplo": "Vou visitar o Cariri mês que vem.",
    "curiosidade": "A região é rica em sítios arqueológicos e paleontológicos."
  },
  {
    "id": "7",
    "palavra": "Ceará, ôxe",
    "categoria": "Expressões",
    "imagem": "https://placehold.co/300x200/red/white?text=Ceará",
    "definicao": "Expressão usada para demonstrar orgulho ou identificação com o estado do Ceará.",
    "exemplo": "Ceará, ôxe! Aqui a gente é feliz!",
    "curiosidade": "Usada em canções e manifestações culturais."
  },
  {
    "id": "8",
    "palavra": "Ruma",
    "categoria": "Quantificador",
    "imagem": "https://placehold.co/300x200/gray/white?text=Ruma",
    "definicao": "Muitos, uma grande quantidade.",
    "exemplo": "Tem ruma gente aqui hoje.",
    "curiosidade": "Expressão popular em todo o Nordeste."
  },
  {
    "id": "9",
    "palavra": "Inham",
    "categoria": "Carinho",
    "imagem": "https://placehold.co/300x200/pink/black?text=Inham",
    "definicao": "Forma carinhosa de chamar alguém, semelhante a 'filho' ou 'meu bem'.",
    "exemplo": "Vem cá, inham.",
    "curiosidade": "Expressão afetuosa muito usada entre familiares."
  },
  {
    "id": "10",
    "palavra": "Forró",
    "categoria": "Música/Festa",
    "imagem": "https://placehold.co/300x200/orange/black?text=Forró",
    "definicao": "Gênero musical e dança popular do Nordeste brasileiro.",
    "exemplo": "Vamos dançar forró sábado?",
    "curiosidade": "Originou-se do baião e é acompanhado de sanfona, zabumba e triângulo."
  },
  {
    "id": "11",
    "palavra": "Quadrilha",
    "categoria": "Festa junina",
    "imagem": "https://placehold.co/300x200/red/white?text=Quadrilha",
    "definicao": "Dança típica das festas juninas, com coreografia e roupas tradicionais.",
    "exemplo": "A quadrilha da escola foi a melhor do arraial.",
    "curiosidade": "Tem raízes europeias e foi adaptada ao Nordeste."
  },
  {
    "id": "12",
    "palavra": "Pé de serra",
    "categoria": "Música/Local",
    "imagem": "https://placehold.co/300x200/green/black?text=Pé+de+serra",
    "definicao": "Estilo musical do sertão nordestino, também pode se referir a moradores do pé das serras.",
    "exemplo": "Toca um pé de serra aí, violeiro!",
    "curiosidade": "Tem ritmo mais lento e melodias tristes."
  }
  
];

// Elementos do DOM
const dictionaryGrid = document.getElementById('dictionary-grid');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');
const printBtn = document.getElementById('print-btn');
const toggleThemeBtn = document.getElementById('toggle-theme');
const favoritesList = document.getElementById('favorites-list');

let currentData = [...verbetes];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  populateCategoryFilter();
  renderCards(currentData);
  setupEventListeners();
  loadFavorites();
});

// Função para popular o filtro de categorias
function populateCategoryFilter() {
  const categories = [...new Set(verbetes.map(v => v.categoria))];
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// Função para renderizar os cards
function renderCards(data) {
  dictionaryGrid.innerHTML = '';
  data.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Ver detalhes de ${item.palavra}`);
    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.palavra}">
      <div class="card-content">
        <h3>${item.palavra}</h3>
        <span class="categoria">${item.categoria}</span>
        <p class="resumo">${item.definicao.substring(0, 60)}...</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(item));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') openModal(item);
    });
    dictionaryGrid.appendChild(card);
  });
}

// Função para abrir o modal
function openModal(item) {
  modalBody.innerHTML = `
    <h2>${item.palavra}</h2>
    <span class="categoria">${item.categoria}</span>
    <img src="${item.imagem}" alt="${item.palavra}">
    <p>${item.definicao}</p>
    <div class="exemplo"><strong>Exemplo:</strong> ${item.exemplo}</div>
    <div class="curiosidade"><strong>Curiosidade:</strong> ${item.curiosidade}</div>
    <button id="favorite-btn" data-id="${item.id}">${isFavorited(item.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}</button>
  `;
  modalOverlay.style.display = 'flex';
  modalOverlay.setAttribute('aria-hidden', 'false');
  modalOverlay.focus();

  document.getElementById('favorite-btn').addEventListener('click', () => toggleFavorite(item.id));
}

// Função para fechar o modal
function closeModal() {
  modalOverlay.style.display = 'none';
  modalOverlay.setAttribute('aria-hidden', 'true');
}

// Função para alternar favorito
function toggleFavorite(id) {
  const index = favorites.findIndex(fav => fav.id === id);
  if (index === -1) {
    const item = verbetes.find(v => v.id === id);
    favorites.push(item);
    document.getElementById('favorite-btn').textContent = 'Remover dos favoritos';
  } else {
    favorites.splice(index, 1);
    document.getElementById('favorite-btn').textContent = 'Adicionar aos favoritos';
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  loadFavorites();
}

// Função para verificar se está favoritado
function isFavorited(id) {
  return favorites.some(fav => fav.id === id);
}

// Função para carregar favoritos
function loadFavorites() {
  if (favorites.length > 0) {
    favoritesList.style.display = 'block';
    const container = document.getElementById('favorites-content');
    container.innerHTML = '';
    favorites.forEach(item => {
      const div = document.createElement('div');
      div.textContent = item.palavra;
      div.style.cursor = 'pointer';
      div.addEventListener('click', () => openModal(item));
      container.appendChild(div);
    });
  } else {
    favoritesList.style.display = 'none';
  }
}

// Função para filtrar os dados
function filterData() {
  const query = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  currentData = verbetes.filter(item => {
    const matchesSearch = item.palavra.toLowerCase().includes(query) || item.definicao.toLowerCase().includes(query);
    const matchesCategory = category === '' || item.categoria === category;
    return matchesSearch && matchesCategory;
  });

  renderCards(currentData);
}

// Função para alternar tema
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  toggleThemeBtn.textContent = newTheme === 'dark' ? 'Modo Claro' : 'Modo Escuro';
}

// Configurar listeners
function setupEventListeners() {
  searchInput.addEventListener('input', filterData);
  categoryFilter.addEventListener('change', filterData);
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
      closeModal();
    }
  });
  printBtn.addEventListener('click', () => window.print());
  toggleThemeBtn.addEventListener('click', toggleTheme);
}