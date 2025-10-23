const verbetes = [
  {
    "id": "1",
    "palavra": "Arretado",
    "categoria": "Gírias",
    "imagem": "IMG/IMG Arretado.png",
    "definicao": "Que é muito bom, forte, corajoso. Usado como elogio: 'Esse cabra é arretado!'",
    "exemplo": "— Ôxe, o baile foi arretado ontem!",
    "curiosidade": "Muito usado no Nordeste como expressão de intensidade."
  },
  {
    "id": "2",
    "palavra": "Cabra da peste",
    "categoria": "Gírias",
    "imagem": "IMG/IMG Cabra da peste.jpeg",
    "definicao": "Expressão usada para se referir a alguém ou algo que é muito ruim, chato ou problemático.",
    "exemplo": "Essa moto é cabra da peste, não pega nunca.",
    "curiosidade": "Tem origem em histórias populares e é uma expressão carismática do sertão."
  },
  {
    "id": "3",
    "palavra": "Mucuripe",
    "categoria": "Lugares",
    "imagem": "IMG/IMG Mucuripe.jpeg",
    "definicao": "Bairro de Fortaleza conhecido por sua praia e cultura popular.",
    "exemplo": "Vamos pro mucuripe no final de semana?",
    "curiosidade": "O nome vem do tupi e significa 'lugar onde há muito peixe'."
  },
  {
    "id": "4",
    "palavra": "Mandacaru",
    "categoria": "Natureza",
    "imagem": "IMG/IMG mandacaru.jpeg",
    "definicao": "Planta espinhosa típica do sertão nordestino, usada como cerca viva.",
    "exemplo": "O sertão é coberto de mandacaru.",
    "curiosidade": "Sua flor é símbolo da caatinga e floresce raramente."
  },
  {
    "id": "5",
    "palavra": "Buchada",
    "categoria": "Comidas",
    "imagem": "IMG/IMG Buchada.jpeg",
    "definicao": "Prato tradicional feito com vísceras de bode ou carneiro, temperado e cozido.",
    "exemplo": "Hoje tem buchada no restaurante da praça.",
    "curiosidade": "Prato típico de festas no interior do Ceará."
  },
  {
    "id": "6",
    "palavra": "Cariri",
    "categoria": "Regiões",
    "imagem": "IMG/IMG Cariri.jpeg",
    "definicao": "Região do sul do Ceará, conhecida por suas cidades históricas e clima ameno.",
    "exemplo": "Vou visitar o Cariri mês que vem.",
    "curiosidade": "A região é rica em sítios arqueológicos e paleontológicos."
  },
  {
    "id": "7",
    "palavra": "Ceará, ôxe",
    "categoria": "Expressões",
    "imagem": "IMG/IMG Ceára.jpeg",
    "definicao": "Expressão usada para demonstrar orgulho ou identificação com o estado do Ceará.",
    "exemplo": "Ceará, ôxe! Aqui a gente é feliz!",
    "curiosidade": "Usada em canções e manifestações culturais."
  },
  {
    "id": "8",
    "palavra": "Ruma",
    "categoria": "Quantificador",
    "imagem": "IMG/IMG Ruma.jpeg",
    "definicao": "Muitos, uma grande quantidade.",
    "exemplo": "Tem ruma gente aqui hoje.",
    "curiosidade": "Expressão popular em todo o Nordeste."
  },
  {
    "id": "9",
    "palavra": "Inham",
    "categoria": "Carinho",
    "imagem": "IMG/IMG Inham.jpeg",
    "definicao": "Forma carinhosa de chamar alguém, semelhante a 'filho' ou 'meu bem'.",
    "exemplo": "Vem cá, inham.",
    "curiosidade": "Expressão afetuosa muito usada entre familiares."
  },
  {
    "id": "10",
    "palavra": "Forró",
    "categoria": "Música/Festa",
    "imagem": "IMG/IMG Forró.jpeg",
    "definicao": "Gênero musical e dança popular do Nordeste brasileiro.",
    "exemplo": "Vamos dançar forró sábado?",
    "curiosidade": "Originou-se do baião e é acompanhado de sanfona, zabumba e triângulo."
  },
  {
    "id": "11",
    "palavra": "Quadrilha",
    "categoria": "Festa junina",
    "imagem": "IMG/IMG quadrilha.jpeg",
    "definicao": "Dança típica das festas juninas, com coreografia e roupas tradicionais.",
    "exemplo": "A quadrilha da escola foi a melhor do arraial.",
    "curiosidade": "Tem raízes europeias e foi adaptada ao Nordeste."
  },
  {
    "id": "12",
    "palavra": "Pé de serra",
    "categoria": "Música/Local",
    "imagem": "IMG/IMG pé de serra.jpeg",
    "definicao": "Estilo musical do sertão nordestino, também pode se referir a moradores do pé das serras.",
    "exemplo": "Toca um pé de serra aí, violeiro!",
    "curiosidade": "Tem ritmo mais lento e melodias tristes."
  },
  {
    "id": "13",
    "palavra": "Valha",
    "categoria": "Expressões",
    "imagem": "IMG/IMG Valha.jpeg",
    "definicao": "Expressão usada para demonstrar espanto, surpresa ou indignação. Equivale a 'Meu Deus!', 'Céus!', 'Nossa!'.",
    "exemplo": "— Valha, menina! Você assustou meu coração!",
    "curiosidade": "É uma forma carismática de expressar surpresa, muito comum em conversas do interior do Nordeste."
  },
  {
    "id": "14",
    "palavra": "Abirobado",
    "categoria": "Gírias",
    "imagem": "IMG/IMG Abirobado (1).jpeg",
    "definicao": "Pessoa meio doida, atrapalhada ou sem noção.",
    "exemplo": "Ele ficou abirobado com a notícia.",
    "curiosidade": "Termo regional com origem incerta, mas muito usado no dia a dia."
  },
  {
    "id": "15",
    "palavra": "Ceará",
    "categoria": "Expressões",
    "imagem": "IMG/IMG Ceára.jpeg",
    "definicao": "Nome do estado, cuja origem do termo é controversa. Segundo algumas teorias, pode ser de origem tupi e significar 'canto da jandaia' ou 'água que corre', mas um estudo aponta uma possível origem hebraica, significando 'tempestade, temporal, chuva torrencial repentina'.",
    "exemplo": "O Ceará é um estado cheio de belezas naturais.",
    "curiosidade": "O nome do estado é uma homenagem à sua história e cultura ricas."
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