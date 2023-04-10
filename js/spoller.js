//СПОЙЛЕР аккордеон

const spollersArray = document.querySelectorAll("[data-spollers]");
//Получаем обычные спойлеры
if (spollersArray.length > 0) {
	const spollersRegular = Array.from(spollersArray).filter(function (item, index, array) {
		return !item.dataset.spollers.split(",")[0];
	})

	if (spollersRegular.length > 0) {
		initSpollers(spollersRegular);
	}

	//Получаем спойлеры с параметрами
	const spollersMedia = Array.from(spollersArray).filter(function (item, index, array) {
		return item.dataset.spollers.split(",")[0];
	})

	//Получаем спойлеры с медиазапросами, а именно их параметры 650,min
	if (spollersMedia.length > 0) {
		const breakpointsArray = [];

		spollersMedia.forEach(function (item, index, array) {
			const params = item.dataset.spollers;
			const breakpoint = {};
			const paramsArray = params.split(",");
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);

		});

		//Получаем повторения спойлеров с медиазапросами
		let mediaQueries = breakpointsArray.map(function (item, index, array) {
			return '(' + item.type + '-width: ' + item.value + 'px' + '),' + item.value + ',' + item.type;
		})

		mediaQueries = mediaQueries.filter(function (item, index, array) {
			return array.indexOf(item) === index;
		})


		//Работа с каждым брейкпоинтом
		mediaQueries.forEach(item => {
			const paramsArray = item.split(",")
			console.log(paramsArray);
			const mediaBreakpoint = paramsArray[1];
			const mediaType = paramsArray[2];
			const matchMedia = window.matchMedia(paramsArray[0]) //Здесь получаем ту строку (max-width: 800px)

			//Объекты с нужными условиями
			const spollersArray = breakpointsArray.filter(function (item, index, array) {
				if (item.value === mediaBreakpoint && item.type === mediaType) {
					return true;
				}
			})
			//Событие
			matchMedia.addListener(() => {
				initSpollers(spollersArray, matchMedia);
			})
			initSpollers(spollersArray, matchMedia)
		})
	}
}




//Функция initSpollers


function initSpollers(spollersArray, matchMedia = false) {
	spollersArray.forEach(function (spollersBlock, index, array) {
		spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
		if (matchMedia.matches || !matchMedia) {	//matchMedia.matches означает, что брейкпоинт сработал
			spollersBlock.classList.add("_init");
			initSpollerBody(spollersBlock);
			spollersBlock.addEventListener("click", setSpollerAction);

		} else {
			spollersBlock.classList.remove("_init");
			initSpollerBody(spollersBlock, false);
			spollersBlock.removeEventListener("click", setSpollerAction);
		}


	})
};
//Работа с контентом


function initSpollerBody(spollersBlock, hideSpollerBody = true) {
	const spollersTitles = spollersBlock.querySelectorAll("[data-spoller]")
	if (spollersTitles.length > 0) {
		spollersTitles.forEach(function (spollerTitle) {
			if (hideSpollerBody) {
				spollerTitle.removeAttribute("tabindex");
				if (!spollerTitle.classList.contains("_active")) {
					spollerTitle.nextElementSibling.hidden = true;
				} else {
					spollerTitle.setAttribute("tabindex", "-1");
					spollerTitle.nextElementSibling.hidden = false;
				}
			}
		})
	}
};


function setSpollerAction(event) {
	const el = event.target;
	console.log(event.target);
	if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
		const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]')
		const spollersBlock = spollerTitle.closest('[data-spollers]');
		//const oneSpoller = spollersBlock.hasAttribute("data-one-spoller") ? true : false;
		if (!spollersBlock.querySelectorAll('._slide').length) {
			if (spollersBlock && !spollerTitle.classList.contains("_active")) {
				hideSpollerBody(spollersBlock);
			}
			spollerTitle.classList.toggle("_active");
			_slideToggle(spollerTitle.nextElementSibling, 800)
		}
		event.preventDefault();
	}
};


function hideSpollerBody(spollersBlock) {
	const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._active");
	console.log(spollerActiveTitle);
	if (spollerActiveTitle) {
		spollerActiveTitle.classList.remove("_active");
		_slideUp(spollerActiveTitle.nextElementSibling, 800)


	}
};




let _slideUp = (target, duration) => {
	if (!target.classList.contains("_slide")) {
		target.classList.add("_slide")
		target.style.transitionProperty = 'height, margin, padding'; /* [1.1] */
		target.style.transitionDuration = duration + 'ms'; /* [1.2] */ /* [2] */
		target.style.height = target.offsetHeight + 'px';/* [3] */
		target.style.height = 0; /* [4] */
		target.style.paddingTop = 0; /* [5.1] */
		target.style.paddingBottom = 0; /* [5.2] */
		target.style.marginTop = 0; /* [6.1] */
		target.style.marginBottom = 0; /* [7.2] */
		target.style.overflow = 'hidden';
		/* [7] */
		window.setTimeout(() => {
			target.hidden = true; /* [8] */
			target.style.removeProperty('height'); /* [9] */
			target.style.removeProperty('padding-top');  /* [10.1] */
			target.style.removeProperty('padding-bottom');  /* [10.2] */
			target.style.removeProperty('margin-top');  /* [11.1] */
			target.style.removeProperty('margin-bottom');  /* [11.2] */
			target.style.removeProperty('overflow');  /* [12] */
			target.style.removeProperty('transition-duration');  /* [13.1] */
			target.style.removeProperty('transition-property');  /* [13.2] */
			target.classList.remove("_slide")
		}, duration);
	}
}
let _slideDown = (target, duration = 1500) => {
	if (!target.classList.contains("_slide")) {
		target.classList.add("_slide")
		if (target.hidden) {
			target.hidden = false;
		}

		target.hidden = false;
		let height = target.offsetHeight; /* [3] */
		target.style.height = 0; /* [4] */
		target.style.paddingTop = 0; /* [5.1] */
		target.style.paddingBottom = 0; /* [5.2] */
		target.style.marginTop = 0; /* [6.1] */
		target.style.marginBottom = 0; /* [6.2] */
		target.style.overflow = 'hidden'; /* [7] */
		target.style.boxSizing = 'border-box'; /* [8] */
		target.style.transitionProperty = "height, margin, padding";  /* [9.1] */
		target.style.transitionDuration = duration + 'ms'; /* [9.2] */
		target.style.height = height + 'px'; /* [10] */
		target.style.removeProperty('padding-top'); /* [11.1] */
		target.style.removeProperty('padding-bottom'); /* [11.2] */
		target.style.removeProperty('margin-top'); /* [12.1] */
		target.style.removeProperty('margin-bottom'); /* [12.2] */
		window.setTimeout(() => {
			target.style.removeProperty('hidden');
			target.style.removeProperty('height'); /* [13] */
			target.style.removeProperty('overflow'); /* [14] */
			target.style.removeProperty('transition-duration'); /* [15.1] */
			target.style.removeProperty('transition-property'); /* [15.2] */
			target.classList.remove("_slide")

		}, duration);
	}
}
let _slideToggle = (target, duration = 800) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}