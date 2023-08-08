const editBtn = document.querySelector('.button__type-edit');
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector('.button__type-close');
const cardTemplate = document.getElementById("card-template");
const cardsGrid = document.querySelector('.cards__grid');
const formInput = document.querySelector('.popup__form');
const nameInput = formInput.querySelector('.popup__input_type_name');
const jobInput = formInput.querySelector('.popup__input_type_job');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__job');

formInput.addEventListener('submit', (e) => {
    e.preventDefault();

    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;

    popup.style.display = "none";
});

editBtn.addEventListener("click", () => popup.style.display = "grid");
closeBtn.addEventListener("click", () => popup.style.display = "none");

const data = [
  {
    "name": "Lembah Yosemite",
    "link": "./images/card/kirill-pershin-1088404-unsplash.jpg"
  },
  {
    "name": "Danau Louise",
    "link": "./images/card/kirill-pershin-1404681-unsplash.jpg"
  },
  {
    "name": "Pegunungan Gundul",
    "link": "./images/card/kirill-pershin-1556355-unsplash.jpg"
  },
  {
    "name": "Latemar",
    "link": "./images/card/kirill-pershin-1404682-unsplash.jpg"
  },
  {
    "name": "Vanoise National",
    "link": "./images/card/kirill-pershin-1556356-unsplash.jpg"
  },
  {
    "name": "Lago di Braies",
    "link": "./images/card/kirill-pershin-1088405-unsplash.jpg"
  }
];

function populateCardTemplate(item) {
  const templateContent = cardTemplate.content.cloneNode(true);

  const imgElement = templateContent.querySelector('.card__image');
  imgElement.src = item.link;
  imgElement.alt = item.name;

  const titleElement = templateContent.querySelector('.card__title');
  titleElement.textContent = item.name;
  
  const likeButton = templateContent.querySelector('.button__style-like');
  likeButton.addEventListener('click', () => {
    if (!item.liked) {
        likeButton.style.background = 'url(./images/union.svg) no-repeat center';
        item.liked = true;
      } else {
        likeButton.style.background = 'url(./images/Group.svg) no-repeat center';
        item.liked = false;
      }
    });

  return templateContent;
}

data.forEach(item => {
  const populatedTemplate = populateCardTemplate(item);
  cardsGrid.appendChild(populatedTemplate);
});
