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
const mask = document.querySelector('.mask'); // mask


// 'слушаем'
function setEventListeners(itemElement) {
    itemElement.querySelector('.card__btn-delete').addEventListener('click', CardDelete);
    itemElement.querySelector('.card__btn-like').addEventListener('click', LikeToggle);
    itemElement.querySelector('.card__image').addEventListener('click', OpenImagePopup);

}

// функция добавления одной карточки
function renderCard(item) {
    const itemElement = cardTemplateContent.cloneNode(true);
    const itemTextElement = itemElement.querySelector('.card__text');
    const itemImageElement = itemElement.querySelector('.card__image');

    setEventListeners(itemElement);

    itemTextElement.textContent = item.name
    itemImageElement.src = item.link

    cardsList.prepend(itemElement)
}


// функция добавления всех карточек
function renderCards(items) {
    items.forEach(renderCard)
}

renderCards(initialCards.reverse());


// функция удаления карточки
function CardDelete(event) {
    const itemElement = event.target.closest('.card');
    console.log(itemElement)
    itemElement.remove();
}

// функция пролайкивания карточки
function LikeToggle(event) {
    const itemElement = event.target
    itemElement.classList.toggle('card__btn-like_type_on')

}

// функция открытия попапа с изображением
function OpenImagePopup(event) {
    const PopupElement = document.querySelector('.popup_type_image')
    const PopupImage = PopupElement.querySelector('.popup__image')
    const PopupText = PopupElement.querySelector('.popup__text')
    const CardText = event.target.closest('.card').querySelector('.card__text')

    PopupImage.src = event.target.src
    PopupText.textContent = CardText.textContent

    PopupElement.classList.toggle('popup_is-opened')
    mask.classList.toggle('mask_shade-on-dark');
}





/*попап редактирования*/
const popupEditProfile = document.querySelector('#editProfile'); // попап редактирования профиля
const popupEditProfileCloseButton = popupEditProfile.querySelector('.popup__btn_action_close'); // кнопка закрытия попапа 
const popupEditProfileSubmitForm = popupEditProfile.querySelector('.popup__form_type_edit'); // форма редактирования профиля
const popupEditProfileName = popupEditProfile.querySelector('.popup__item_field_one'); // имя формы
const popupEditProfileProfession = popupEditProfile.querySelector('.popup__item_field_two'); // профессия формы
const popupEditProfileOpenButton = document.querySelector('.profile__btn_action_edit'); // кнопка открытия попапа
const profileName = document.querySelector('.profile__name'); // имя профиля
const profileProfession = document.querySelector('.profile__profession'); // профессия профиля

// функция открытия попапа редактирования
const EditProfileOpenPopup = function() {
    popupEditProfile.classList.toggle('popup_is-opened');
    mask.classList.toggle('mask_shade-on');
    popupEditProfileName.placeholder = profileName.textContent;
    popupEditProfileProfession.placeholder = profileProfession.textContent;
};

// функция закрытия попапа редактирования
const EditProfileСlosePopup = function() {
    popupEditProfile.classList.toggle('popup_is-opened');
    mask.classList.toggle('mask_shade-on');
};

// функция сохранения формы редактирования
const EditProfileSubmitForm = function(evt) {
    evt.preventDefault();
    profileName.textContent = popupEditProfileName.value;
    profileProfession.textContent = popupEditProfileProfession.value;
    EditProfileСlosePopup();
};

//'слушаем'
popupEditProfileOpenButton.addEventListener('click', EditProfileOpenPopup);
popupEditProfileCloseButton.addEventListener('click', EditProfileСlosePopup);
popupEditProfileSubmitForm.addEventListener('submit', EditProfileSubmitForm);






/*попап добавления*/
const popupAddCard = document.querySelector('#addCard'); // попап добавления карточки
const popupAddCardCloseButton = popupAddCard.querySelector('.popup__btn_action_close'); // кнопка закрытия попапа
const popupAddCardName = popupAddCard.querySelector('.popup__item_field_one'); // название места в форме
const popupAddCardLink = popupAddCard.querySelector('.popup__item_field_two'); // ссылка на картинку в форме
const popupAddCardOpenButton = document.querySelector('.profile__btn_action_add'); // кнопка открытия попапа
const popupAddCardSubmitForm = popupAddCard.querySelector('.popup__form_type_add'); // форма редактирования профиля

// функция открытия попапа добавления
const AddCardOpenPopup = function() {
    popupAddCard.classList.toggle('popup_is-opened');
    mask.classList.toggle('mask_shade-on');
};

// функция закрытия попапа добавления
const AddCardСlosePopup = function() {
    popupAddCard.classList.toggle('popup_is-opened');
    mask.classList.toggle('mask_shade-on');
};

// функция сохранения формы редактирования
const AddCardSubmitForm = function(evt) {
    evt.preventDefault();
    renderCards([{ name: popupAddCardName.value, link: popupAddCardLink.value }]);
    AddCardСlosePopup();
};

//'слушаем'
popupAddCardOpenButton.addEventListener('click', AddCardOpenPopup);
popupAddCardCloseButton.addEventListener('click', AddCardСlosePopup);
popupAddCardSubmitForm.addEventListener('submit', AddCardSubmitForm);




/*попап картинки*/
const popupImage = document.querySelector('.popup_type_image');
const popupImageCloseButton = popupImage.querySelector('.popup__btn_action_close'); // кнопка закрытия попапа

// функция закрытия попапа с картинкой
const ImageСlosePopup = function() {
    popupImage.classList.toggle('popup_is-opened');
    mask.classList.toggle('mask_shade-on-dark');
};

//'слушаем'
popupImageCloseButton.addEventListener('click', ImageСlosePopup);










//////////////////////////////////////////////////////////////////////////

// function cardDelete(event){
//     const itemCard = event.target.closest()
// }

//cardTemplateContent = document.querySelector('.card-tamplate').content; // забираем содержимое шаблона





// const popupEditProfile = document.querySelector('#editProfile');
// const popupAddCard = document.querySelector('#addCard')
// const popupImage = document.querySelector('.popup_type_image')

// const popupEditProfileOpenButton = document.querySelector('.profile__btn_action_edit');
// const popups = []
// popups.push(popupEditProfile, popupAddCard, popupImage)

// console.log(popups)





// // const popupOpen = function() {
// //     popupEditProfile.classList.toggle('popup_is-opened');
// //     mask.classList.toggle('mask_shade-on');
// // }


// // popupEditProfileOpenButton.addEventListener('click', function(event) {
// //     console.log(event)
// //     if (popupEditProfileOpenButton) {
// //         console.log('good')
// //         popupOpen()

// //     }
// // });




////////////////////////////////////////////////////////////////////////////////////////////////
// const popups = document.querySelectorAll('.popup')
// console.log(popups)



// function setPopupEventListeners(itemElement) {
//     itemElement.querySelector('.popup__btn_action_close').addEventListener('click', PopupClose);
// }



// function TryPopups() {
//     setPopupEventListeners()
// }


// function PopupClose(item) {
//     // item.classList.toggle('popup_is-opened');
//     // mask.classList.toggle('mask_shade-on');
//     console.log(item, item.querySelector('.popup__btn_action_close'))
// }




// function Close(items) {
//     items.forEach(PopupClose)
// }

// Close(popups);