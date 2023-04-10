//Header плашка
/*
const headerElem = document.querySelector(".header");

const callback = function (entries, observer) {
	if (entries[0].isInteresting) {
		headerElem.classList.remove('scroll')
	} else {
		headerElem.classList.add("scroll")
	}
};

const headerObserver = new IntersectionObserver(callback)
headerObserver.observe(headerElem)
*/

//========================УБИРАЕМ=PLACEHOLDER=У=INPUT========================================================================================================================
const inputs = document.getElementsByName("input");
if (inputs.length > 0) {
	for (let index = 0; index < inputs.length; index++) {
		const element = inputs[index];
		let inputPlaceholder = element.placeholder;
		element.addEventListener("focusin", function (e) {
			element.classList.add("active")
			element.placeholder = '';
		})
		element.addEventListener("focusout", function (e) {
			element.classList.remove("active")
			element.placeholder = inputPlaceholder;
		})
	}
}
//=============================HEADER==============================================================================================================================================
//===========СКРОЛЛИМ ХЕДЕР====================================================================================================================================================================================================================================================================================
window.addEventListener("scroll", function (e) {
	if (document.querySelector(".header") && document.querySelector(".page__full-screen")) {
		let header = document.querySelector(".header")
		let block = document.querySelector(".page__full-screen")
		let offSet = block.clientHeight;
		let offSetTop = block.getBoundingClientRect().top;
		let cf = 6;
		if (window.pageYOffset > (offSet - offSetTop) / cf) {
			header.classList.add("scroll")
		} else {
			header.classList.remove("scroll")
		}
	}
})
//=============burger==================================================================================================================================================================================================================================================================================
const burger = document.querySelector(".header__burger");
if (burger) {
	burger.addEventListener("click", function (e) {
		burger.classList.toggle("active");
		document.body.classList.toggle("scroll-lock")
		if (document.querySelector(".page__burger-menu").classList.contains("active")) {
			document.body.classList.remove("scroll-lock")
		}


		document.querySelector(".page__burger-menu").classList.toggle("active")
	})
}
//=================МЕНЯЕМ МЕСТАМИ БУРГЕР И ПРОФИЛЬ==============================================================================================================================================================================================================================================================================



//=========================ДЕЛАЕМ HOVER НА ЛИНКИ======================================================================================================================================================================================================================================================================
const links = document.querySelectorAll(".menu-header__link");
links.forEach((link) => {
	link.addEventListener("mouseover", function (e) {
		if (!e.target.classList.contains("tdu")) {
			e.target.classList.add("tdu")
		}
		link.addEventListener("mouseout", function (e) {
			if (!e.target.classList.contains("lock")) {
				e.target.classList.remove("tdu")
			}
		})
	})
})
//===================СТИЛИЗАЦИЯ CHECKBOX============================================================================================================================================================================================================================================================================
const checkbox = document.querySelectorAll(".registration__input-checkbox");

checkbox.forEach((check) => {
	const inputCheckbox = check.querySelector("input")
	if (inputCheckbox.checked == true) {
		check.classList.add("active")
	}
	check.addEventListener("click", function (e) {
		if (check.classList.contains("active")) {
			inputCheckbox.checked == false
		} else {
			inputCheckbox.checked == true
		}
		check.classList.toggle("active")
		if (!check.classList.contains("active")) {
			document.querySelectorAll(".form-registration__button").forEach((item) => {
				item.classList.add("disabled")
			})
		} else {
			document.querySelectorAll(".form-registration__button").forEach((item) => {
				item.classList.remove("disabled")
			})
		}
	})
})

//===============================ВЕШАЕМ КЛАСС ACTIVE ТАБАМ================================================================================================================================================================================================================================================================
const tabItems = document.querySelectorAll(".form-registration__tab");
if (tabItems.length > 0) {
	tabItems.forEach((item) => [
		item.addEventListener("click", function (e) {
			tabItems.forEach((itemother) => {
				itemother.classList.remove("active")
			})
			e.target.parentNode.classList.add("active")

		})
	])
}

//========================ВЕШАЕМ СОБЫТИЕ НА КНОПКУ В ФОРМЕ=======================================================================================================================================================================================================================================================================
const buttonForm = document.querySelectorAll(".form-registration__button");
if (buttonForm) {
	buttonForm.forEach((btn) => {
		btn.addEventListener("click", function (e) {
			document.querySelectorAll(".form-registration__input").forEach((item) => {
				if (item.value == '' && !item.classList.contains("no-available")) {
					item.classList.add("active")

				}

			})
			e.preventDefault()
		})
	})

	const formInput = document.querySelectorAll(".form-registration__input");
	if (formInput.length > 0) {
		formInput.forEach((item) => {
			item.addEventListener("click", function (e) {
				formInput.forEach((inputItem) => {
					inputItem.classList.remove("active")
				})
			})
		})
	}
}
//========================ВЫБИРАЕМ КТО МЫ=======================================================================================================================================================================================================================================================================
const radioButtons = document.querySelectorAll(".radio-button");
if (radioButtons.length > 0) {
	radioButtons.forEach((item) => {
		item.addEventListener("click", function (e) {
			radioButtons.forEach((radio_btn) => {

				radio_btn.classList.remove("active")
			})
			e.target.parentNode.classList.add("active")
			e.target.classList.add("active")

			if (e.target.parentNode.classList.contains("active") && document.querySelector(".really-checkbox").classList.contains("active")) {
				document.querySelector(".form-registration__button").classList.remove("disabled")
			} else {
				document.querySelector(".form-registration__button").classList.add("disabled")
			}
		})
	})
}
//=======================открытиеменюшки========================================================================================================================================================================================================================================================================

const headerFindList = document.querySelector(".header__find-list");
const headerFindInput = document.querySelector(".header__find-input");
if (headerFindList && headerFindInput) {
	headerFindInput.addEventListener("click", function (e) {
		headerFindList.classList.add("active")
	})
}
const findListItems = document.querySelectorAll(".find-list__item");
if (findListItems.length > 0) {
	findListItems.forEach((item) => {
		item.addEventListener('click', function (e) {
			headerFindList.classList.remove("active")
			headerFindInput.removeAttribute("value")
			headerFindInput.setAttribute("value", e.target.textContent)

		})
	})
}
document.addEventListener("click", function (e) {
	if (!e.target.closest(".header__find-list") && !e.target.closest(".header__find-input") /*&& !e.target.closest(".header__")*/) {
		if (document.querySelector(".header__find-list")) {

			headerFindList.classList.remove("active")
		}
	}
})

//=================ДЕЛАЕМ ТАБЫ==============================================================================================================================================================================================================================================================================
const linkEmail = document.getElementById("emailLink");
const linkLogin = document.getElementById("loginLink");
const email = document.getElementById("email");
const login = document.getElementById("login");

if (linkEmail && linkLogin && email && login) {
	linkEmail.addEventListener("click", function (e) {
		login.classList.remove("active")
		email.classList.add("active")
	})
	linkLogin.addEventListener("click", function (e) {
		email.classList.remove("active")
		login.classList.add("active")
	})
}

//=====================ДЕЛАЕМ БУРГЕР МЕНЮ==========================================================================================================================================================================================================================================================================
const burgerBody = document.querySelector(".burger-menu__body");
if (burgerBody) {
	if (window.innerWidth <= 1024) {
		const menuHeaderList = document.querySelector(".menu-header__list");
		const menuHeaderIcons = document.querySelector(".menu-header__icons");
		const menuHeaderPhone = document.querySelector(".menu-header__phone");
		burgerBody.append(menuHeaderList);
		burgerBody.append(menuHeaderIcons);
		burgerBody.append(menuHeaderPhone)
	}
	if (window.innerWidth <= 767) {
		const headerFind = document.querySelector(".header__find");
		burgerBody.prepend(headerFind)
	}
}


//===========ДЕЛАЕМ СЛАЙДЕР ОТЗЫВОВ====================================================================================================================================================================================================================================================================================
new Swiper(".reviews__slider", {
	//watchOverflow: true,
	slidesPerView: 3,
	spaceBetween: 20,
	autoHeight: true,

	navigation: {
		nextEl: ".reviews__arrow-next",
		prevEl: ".reviews__arrow-prev",
	},
	breakpoints: {

		768: {
			slidesPerView: 4,
		},
		479: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 1
		}

	},
})
//==========================БИРЖИ====POPUP=================================================================================================================================================================================================================================================================
const popupContent = document.querySelector(".popup__content");
const body = document.body;
const popup = document.querySelector(".popup");
const popupLinks = document.querySelectorAll(".popup__link");
const popupClose = document.querySelectorAll(".popup__close");
if (popupLinks.length > 0) {
	popupLinks.forEach(popupLink => {
		popupLink.addEventListener("click", function (e) {
			const popup = document.querySelector(".popup");
			popupOpen(popup)
			e.preventDefault();
		})
	})
}
if (popupClose.length > 0) {
	popupClose.forEach(popupCloseIcon => {
		popupCloseIcon.addEventListener("click", function (e) {
			popup.classList.remove("active")
			body.classList.remove("scroll-lock")
			e.preventDefault();
		})

	})
}
function popupOpen(popup) {
	if (popup) {
		popup.classList.add("active");
		const popupActive = document.querySelector(".popup active")
		body.classList.add("scroll-lock");
		popup.addEventListener("click", function (e) {
			if (!e.target.closest(".popup__content")) {
				popupCloseMenu(e.target.closest(".popup"))
			}
		})
	}
}
function popupCloseMenu(popupActive) {
	body.classList.remove("scroll-lock")
	popupActive.classList.remove("active")
}

//=========================ПОДТВЕРЖДАЕМ ВЫХОД ИЗ АККАУНТА======================================================================================================================================================================================================================================================================
const leave = document.querySelector(".leave");
if (leave) {
	leave.addEventListener("click", function (e) {
		confirm("вы точно хотите выйти из аккаунта?")
		e.preventDefault()
	})
}

//=========================ОГРАНИЧЕНИЕ ПО СИМВОЛАМ TEXTAREA======================================================================================================================================================================================================================================================================
const txtItem = document.getElementById("textarea");
if (txtItem) {
	const txtItemLimit = txtItem.getAttribute("maxlength");
	const txtItemCounter = document.querySelector(".form-write-review__length span");

	if (txtItem && txtItemCounter && txtItemLimit) {
		txtItemCounter.innerHTML = txtItemLimit;
		txtItem.addEventListener("input", function (e) {
			const txtCounterResult = txtItemLimit - txtItem.value.length;
			txtItemCounter.innerHTML = txtCounterResult;
		})
	}
}
//=========================ОТКЛИКАЕМСЯ======================================================================================================================================================================================================================================================================
const hey = document.querySelectorAll(".link-hey")
if (hey.length > 0) {
	hey.forEach((item) => {
		item.addEventListener("click", function (e) {
			item.classList.add("active");
			item.querySelector("span").innerHTML = "Ждите пока заказчик примет вашу заявку.."
			e.preventDefault()
		})
	})
}
//========================ДЕЛАЕМ ВАЛИДАЦИЮ НА EMAIL (пытаемся)=======================================================================================================================================================================================================================================================================


/*
var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
function checkEmail() {
	var email = document.getElementById('email');
	var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!filter.test(email.value)) {
		alert('Please provide a valid email address');
		email.focus;
		return false;
	}
}
*/
