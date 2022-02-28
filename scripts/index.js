const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];



const cardsList = document.querySelector('.cards'); // тег ul, куда будем добавлять карточки
const cardTemplateContent = document.querySelector('.card-tamplate').content; // забираем содержимое шаблона


/* профиль */
const profileName = document.querySelector('.profile__name'); // имя профиля
const profileProfession = document.querySelector('.profile__profession'); // профессия профиля

/* попап редактирования профиля */
const popupEditProfile = document.querySelector('#editProfile'); // селектор попапа
const popupEditProfileOpenButton = document.querySelector('.profile__btn_action_edit'); // селектор кнопки открытия 
const popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__btn_action_close'); // селектор кнопки закрытия 
const popupEditProfileSubmitForm = popupEditProfile.querySelector('#editForm'); // селектор формы

/* попап добавления карточки */
const popupAddCard = document.querySelector('#addCard'); // селектор попапа 
const popupAddCardOpenButton = document.querySelector('.profile__btn_action_add'); // селектор кнопки добавления
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__btn_action_close'); // селектор кнопки закрытия
const popupAddCardSubmitForm = popupAddCard.querySelector('#addForm'); // селектор формы

/* попап картинки */
const popupImage = document.querySelector('#image'); // селектор попапа
const popupImageCloseButton = popupImage.querySelector('.popup__btn_action_close'); // селектор кнопки закрытия



// функция создания карточки
function createCard(name, link) {
    const card = cardTemplateContent.cloneNode(true);

    card.querySelector('.card__text').textContent = name
    card.querySelector('.card__image').src = link
    card.querySelector('.card__image').alt = `фото ${name}`

    card.querySelector('.card__btn-like').addEventListener('click', llkeToggle);
    card.querySelector('.card__btn-delete').addEventListener('click', cardDelete);
    card.querySelector('.card__image').addEventListener('click', () => {
        openPopup(popupImage), transferDataToImagePopup(popupImage)
    });

    return card
};

// функция добавления карточки
function renderCard(card) {
    cardsList.prepend(card)
};

// функция пролайкиавния
function llkeToggle(event) {
    event.target.classList.toggle('card__btn-like_type_on')
};

// функция удаления карточки
function cardDelete(event) {
    event.target.closest('.card').remove();
};

// функция открытия попапа
function openPopup(selector) {
    selector.classList.add('popup_is-opened')
};

// функция закрытия попапа
function closePopup(selector) {
    selector.classList.remove('popup_is-opened')
};

//  функция очистки полей формы 
function cleanFieldsAddPopup(selector) {
    selector.reset();
};

// функция переноса данных из профиля в попап
function transferDataToEditPopup(selector) {
    selector.profileName.value = profileName.textContent;
    selector.profileJob.value = profileProfession.textContent;
};

// функция переноса данных из попапа в профиль
function transferDataToProfile(selector) {
    profileName.textContent = selector.profileName.value
    profileProfession.textContent = selector.profileJob.value
};

// функция переноса данных в попап с изображением
function transferDataToImagePopup(selector) {
    text = event.target.closest('.card').querySelector('.card__text').textContent
    selector.querySelector('.popup__image').src = event.target.src
    selector.querySelector('.popup__image').alt = `фото ${text}`
    selector.querySelector('.popup__text').textContent = text
};


// создаем начальные карточки
initialCards.reverse().forEach(elem => renderCard(createCard(elem.name, elem.link)));



// 'слушаем'
popupEditProfileOpenButton.addEventListener('click', () => { openPopup(popupEditProfile), transferDataToEditPopup(popupEditProfileSubmitForm) });
popupEditProfileCloseButton.addEventListener('click', () => closePopup(popupEditProfile));
popupEditProfileSubmitForm.addEventListener('submit', () => {
    event.preventDefault();
    transferDataToProfile(popupEditProfileSubmitForm);
    closePopup(popupEditProfile);
});


popupAddCardOpenButton.addEventListener('click', () => { openPopup(popupAddCard), cleanFieldsAddPopup(popupAddCardSubmitForm) });
popupAddCardCloseButton.addEventListener('click', () => closePopup(popupAddCard));
popupAddCardSubmitForm.addEventListener('submit', () => {
    event.preventDefault();
    renderCard(createCard(popupAddCardSubmitForm.placeName.value, popupAddCardSubmitForm.placeLink.value));
    closePopup(popupAddCard);
});

popupImageCloseButton.addEventListener('click', () => closePopup(popupImage));