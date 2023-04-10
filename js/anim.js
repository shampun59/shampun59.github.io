//Анимация при скролле


const anim_items = document.querySelectorAll("._anim-items");


if (anim_items) {

	window.addEventListener("scroll", animScroll);

	function animScroll() {
		anim_items.forEach((anim_item) => {
			const animHeight = anim_item.clientHeight;
			const animTop = anim_item.getBoundingClientRect().top;
			const cf = 2;



			let anim_point = window.innerHeight - animHeight / cf;

			if (animHeight > window.innerHeight) {
				anim_point = window.innerHeight - window.innerHeight / cf;
			}
			if ((window.pageYOffset > window.innerHeight - anim_point) && window.pageYOffset < (animTop + animHeight)) {

				anim_item.classList.remove("active")

			} else {
				anim_item.classList.add("active")
			}
		})
	}
	setTimeout(() => {
		animScroll()
	}, 300);




}