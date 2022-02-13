// Првет, тебе, мой ревьюер. 
// Я пока не знаю кто ты, но если у тебя будут замечания, а скорее всего будут
// Оставь, пожалуйста, координаты как с тобой связаться, чтобы можно было лучше устранить замечания
// Обещаю не задалбливать вопросами


// хидер, контент, футер
const header = document.querySelector('.header');
const content = document.querySelector('.content');
const footer = document.querySelector('.footer');

// попап 
const popup = document.querySelector('.popup');

// кнопка закрытия попапа 
const popupCloseButton = popup.querySelector('.popup__btn_action_close');

// поля формы
const popupItems = popup.querySelectorAll('.popup__item');

// кнопка сохранения формы 
const popupSubmitButton = popup.querySelector('.popup__btn_action_submit');

// кнопка открытия попапа
const popupOpenButton = document.querySelector('.profile__btn_action_edit');

// имя профиля
const profileName = document.querySelector('.profile__name');

// профессия профиля
const profileProfession = document.querySelector('.profile__profession');



// функция открытия попапа
const openPopup = function() {
    popup.classList.toggle('popup_is-opened');
    header.classList.toggle('header_is-shaded');
    content.classList.toggle('content_is-shaded');
    footer.classList.toggle('footer_is-shaded');
    popupItems[0].value = profileName.textContent;
    popupItems[1].value = profileProfession.textContent;
};


// функция закрытия попапа
const closePopup = function() {
    popup.classList.toggle('popup_is-opened');
    header.classList.toggle('header_is-shaded');
    content.classList.toggle('content_is-shaded');
    footer.classList.toggle('footer_is-shaded');
};


// функция сохранения формы
const submitForm = function(evt) {
    evt.preventDefault();
    profileName.textContent = popupItems[0].value;
    profileProfession.textContent = popupItems[1].value;
    closePopup();
};


// 'слушаем'
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupSubmitButton.addEventListener('click', submitForm);