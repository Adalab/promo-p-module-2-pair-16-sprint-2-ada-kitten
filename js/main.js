'use strict';

/* Elementos que usamos en el HTML */
const newFormElement = document.querySelector('.js-new-form');
const listElement = document.querySelector('.js-list');
const searchButton = document.querySelector('.js-button-search');
const buttonAdd = document.querySelector('.js-btn-add');
const buttonCancelForm = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const linkNewFormElememt = document.querySelector('.js-button-new-form');
const labelMesageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');

//Objetos con cada gatito
const kittenData_1 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};
const kittenData_2 = {
  image:
    'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg',
  name: 'Fiona',
  desc: 'Juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};
const kittenData_3 = {
  image:
    'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg',
  name: 'Cielo',
  desc: 'Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};

let kittenDataList = [];

// Funciones
// function renderKitten(kittenData) {
//   const kitten = `<li class="card">
//     <article>
//       <img
//         class="card_img"
//         src=${kittenData.url}
//         alt="gatito"
//       />
//       <h3 class="card_title">${kittenData.name}</h3>
//       <h3 class="card_race">${kittenData.race}</h3>
//       <p class="card_description">
//       ${kittenData.desc}
//       </p>
//     </article>
//     </li>`;
//   return kitten;
// }
function renderKitten(kittenData) {
  //creacion de elementos
  const liElement = document.createElement('li');
  liElement.classList.add('card');
  const article = document.createElement('article');
  const img = document.createElement('img');
  img.classList.add('card_img');
  img.src = `${kittenData.url}`;
  img.alt = 'gatito';
  const title = document.createElement('h3');
  title.classList.add('card_title');
  const race = document.createElement('h3');
  race.classList.add('card_race');
  const p = document.createElement('p');
  p.classList.add('card_description');
  //dónde está cada elemento
  liElement.appendChild(article);
  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(race);
  article.appendChild(p);
  //creacion de contenido
  listElement.appendChild(liElement);
  const textTitle = document.createTextNode(`${kittenData.name}`);
  const textRace = document.createTextNode(`${kittenData.race}`);
  const textP = document.createTextNode(`${kittenData.desc}`);
  title.appendChild(textTitle);
  race.appendChild(textRace);
  p.appendChild(textP);
}

function renderKittenList(kittenDataList) {
  listElement.innerHTML = '';
  for (const kittenItem of kittenDataList) {
    renderKitten(kittenItem);
  }
}

//Mostrar/ocultar el formulario
function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
//Adicionar nuevo gatito
function addNewKitten(event) {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' && valuePhoto === '' && valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores';
  } else {
    if (valueDesc !== '' && valuePhoto !== '' && valueName !== '') {
      labelMesageError.innerHTML = '';
    }
  }
}
//Cancelar la búsqueda de un gatito
function cancelNewKitten(event) {
  event.preventDefault();
  newFormElement.classList.add('collapsed');
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
}

//Filtrar por descripción
/*function filterKitten(event) {
    event.preventDefault();
    const descrSearchText = input_search_desc.value;
    listElement.innerHTML = "";
    for (const kittenItem of kittenDataList) {
        if (kittenItem.desc.includes(descrSearchText)) {
            listElement.innerHTML += renderKitten(kittenItem);
        }
    }
}*/
function filterKitten(ev) {
  ev.preventDefault();
  const kittenDataDesc = kittenDataList.filter((descriptionKitten) =>
    descriptionKitten.desc
      .toLowerCase()
      .includes(input_search_desc.value.toLowerCase())
  );
  renderKittenList(kittenDataDesc);

  //Modifica el código:
  //Haz un filter sobre el listado de gatitos
  //Vuelve a pintar el listado de gatitos filtrados en el HTML.
}

//Eventos
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);
searchButton.addEventListener('click', filterKitten);
buttonAdd.addEventListener('click', addNewKitten);
buttonCancelForm.addEventListener('click', cancelNewKitten);
//
//
//peticiones al servidor
/*const GITHUB_USER = 'sararunda';
const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;
*/

/*fetch(SERVER_URL, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
})
  .then((response) => response.json())
  .then((data) => {
    
    kittenDataList = data.results;
  });*/

//EJERCICIO LOCAL

//para sacar
const kittenListStored = JSON.parse(localStorage.getItem('kittensList'));

if (kittenListStored !== null) {
  kittenDataList = kittenListStored;
  //Mostrar el litado de gatitos en ell HTML
  renderKittenList(kittenDataList);
  //si existe el listado de gatitos en el local storage
  // vuelve a pintar el listado de gatitos
  //...
  //completa el código...
} else {
  const GITHUB_USER = 'sararunda';
  const SERVER_URL = `https://adalab-api.herokuapp.com/api/kittens/${GITHUB_USER}`;
  fetch(SERVER_URL, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      kittenDataList = data.results;
      //Mostrar el litado de gatitos en ell HTML
      renderKittenList(kittenDataList);
    });
}
