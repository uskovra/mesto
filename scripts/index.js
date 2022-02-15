// Саша, привет. Спасибо за ревью
// Спасибо за подсказку с outline


// mask
const mask = document.querySelector('.mask');

// попап 
const popup = document.querySelector('.popup');

// кнопка закрытия попапа 
const popupCloseButton = popup.querySelector('.popup__btn_action_close');

// имя формы
const popupName = popup.querySelector('.popup__item_field_name');

// профессия формы
const popupProfession = popup.querySelector('.popup__item_field_profession');

// форма редактирования профиля
const popupSubmitForm = popup.querySelector('.popup__form');

// кнопка открытия попапа
const popupOpenButton = document.querySelector('.profile__btn_action_edit');

// имя профиля
const profileName = document.querySelector('.profile__name');

// профессия профиля
const profileProfession = document.querySelector('.profile__profession');



// функция открытия попапа
const openPopup = function() {
    popup.classList.toggle('popup_is-opened');
    mask.classList.toggle('mask_shade-on');
    popupName.value = profileName.textContent;
    popupProfession.value = profileProfession.textContent;
};


// функция закрытия попапа
const closePopup = function() {
    popup.classList.toggle('popup_is-opened');
    mask.classList.toggle('mask_shade-on');
};


// функция сохранения формы
const submitForm = function(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileProfession.textContent = popupProfession.value;
    closePopup();
};


// 'слушаем'
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupSubmitForm.addEventListener('submit', submitForm);