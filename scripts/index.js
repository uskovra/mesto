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
    const Card = cardTemplateContent.cloneNode(true);

    Card.querySelector('.card__text').textContent = name
    Card.querySelector('.card__image').src = link
    Card.querySelector('.card__image').alt = `фото ${name}`

    Card.querySelector('.card__btn-like').addEventListener('click', LikeToggle);
    Card.querySelector('.card__btn-delete').addEventListener('click', CardDelete);
    Card.querySelector('.card__image').addEventListener('click', () => {
        OpenPopup(popupImage), TransferDataToImagePopup(popupImage)
    });

    return Card
}

// функция добавления карточки
function renderCard(Card) {
    cardsList.prepend(Card)
}

// функция пролайкиавния
function LikeToggle(event) {
    event.target.classList.toggle('card__btn-like_type_on')
}

// функция удаления карточки
function CardDelete(event) {
    event.target.closest('.card').remove();
}

// функция открытия попапа
function OpenPopup(selector) {
    selector.classList.add('popup_is-opened')

}

// функция закрытия попапа
function ClosePopup(selector) {
    selector.classList.remove('popup_is-opened')
}

//  функция очистки полей формы 
function CleanFieldsAddPopup(selector) {
    selector.querySelector('.popup__item_field_one').value = ''
    selector.querySelector('.popup__item_field_two').value = ''
}

// функция переноса данных из профиля в попап
function TransferDataToEditPopup(selector) {
    selector.querySelector('.popup__item_field_one').value = profileName.textContent;
    selector.querySelector('.popup__item_field_two').value = profileProfession.textContent;
}

// функция переноса данных из попапа в профиль
function TransferDataToProfile(selector) {
    profileName.textContent = selector.querySelector('.popup__item_field_one').value
    profileProfession.textContent = selector.querySelector('.popup__item_field_two').value
};

// функция переноса данных в попап с изображением
function TransferDataToImagePopup(selector) {
    selector.querySelector('.popup__image').src = event.target.src
    selector.querySelector('.popup__image').alt = `фото ${event.target.closest('.card').querySelector('.card__text').textContent}`
    selector.querySelector('.popup__text').textContent = event.target.closest('.card').querySelector('.card__text').textContent
}


// создаем начальные карточки
initialCards.reverse().forEach(elem => renderCard(createCard(elem.name, elem.link)))



// 'слушаем'
popupEditProfileOpenButton.addEventListener('click', () => { OpenPopup(popupEditProfile), TransferDataToEditPopup(popupEditProfile) });
popupEditProfileCloseButton.addEventListener('click', () => ClosePopup(popupEditProfile));
popupEditProfileSubmitForm.addEventListener('submit', () => {
    event.preventDefault();
    TransferDataToProfile(popupEditProfile);
    ClosePopup(popupEditProfile);
});


popupAddCardOpenButton.addEventListener('click', () => { OpenPopup(popupAddCard), CleanFieldsAddPopup(popupAddCard) });
popupAddCardCloseButton.addEventListener('click', () => ClosePopup(popupAddCard));
popupAddCardSubmitForm.addEventListener('submit', () => {
    event.preventDefault();
    renderCard(createCard(popupAddCard.querySelector('.popup__item_field_one').value, popupAddCard.querySelector('.popup__item_field_two').value));
    ClosePopup(popupAddCard);
});

popupImageCloseButton.addEventListener('click', () => ClosePopup(popupImage));