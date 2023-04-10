//Попап
/*
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
*/

/*  HTML
			<div class="popup">
				<div class="popup__body">
					<div class="popup__content">
						<div class="popup__title"></div>
						<div class="popup__close">
						</div>
						<div class="popup__text">
						</div>
					</div>
				</div>
			</div>
*/