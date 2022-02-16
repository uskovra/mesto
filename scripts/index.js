// Саша, привет. Спасибо за ревью

// можно немного подробней про работу с pixel perfect
// в целом механика работы понятна, не понятно с чем именно сравнивать
// со скаченной, например, в jpg картинкой макета или как то можно прям макет засунуть в pixel perfect
// если так то у меня визуально отличается от твоего примера http://joxi.ru/brRqEgGSBNnaMA?d=1, и как будто расхождения есть https://disk.yandex.ru/i/RAueOvZuz2p2CA



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