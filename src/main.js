let images = [{
	url: './images/slider-image1.jpg'
}, {
	url: './images/slider-image2.jpg'	
}, {
	url: './images/slider-image3.jpg'	
}
];

function initSlider() {
	if (!images || !images.length) {
		console.log('error');
		return;
	}

	let sliderImages = document.querySelector(".slider-images");
	let sliderControl = document.querySelector(".slider-control");
	let sliderButtons = document.querySelector(".slider-buttons");


	initImages();
	initArrows();
	initDots();
	initButtons();

	function initImages() {
		images.forEach((image, index) => {
			let imageDiv = `<div class="image n${index} ${index === 0 ? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
			sliderImages.innerHTML += imageDiv;
		});
	}

	function initArrows() {
		sliderControl.querySelectorAll(".slider-arrow").forEach(arrow => {
			arrow.addEventListener("click", () => {
				let currNumber = +sliderImages.querySelector(".active").dataset.index;
				let nextNumber;
				if (arrow.classList.contains("left")) {
					nextNumber = currNumber === 0 ? images.length - 1 : currNumber - 1;
				} else {
					nextNumber = currNumber === images.length - 1 ? 0 : currNumber + 1;
				}
				moveSlider(nextNumber);
			})
		})
	}

	function initDots() {
		images.forEach((image, index) => {
			if (index === 0) {
				sliderControl.querySelector(".slider-dot.n0").classList.add("active");
			}
		})

		sliderControl.querySelectorAll(".slider-dot").forEach((dot, index) => {
			dot.addEventListener("click", () => {
				moveSlider(index);
			})
		})
	}

	function moveSlider(num) {
		sliderImages.querySelector(".active").classList.remove("active");
		sliderImages.querySelector(`.n${num}`).classList.add("active");
		sliderControl.querySelector(".slider-dot.active").classList.remove("active");
		sliderControl.querySelector(`.slider-dot.n${num}`).classList.add("active");
		sliderButtons.querySelector(".slider-button.active").classList.remove("active");
		sliderButtons.querySelector(`.slider-button.n${num}`).classList.add("active");
	}

	function initButtons() {
		images.forEach((image, index) => {
			if (index === 0) {
				sliderButtons.querySelector(".slider-button.n0").classList.add("active");
			}
		})
		sliderButtons.querySelectorAll(".slider-button").forEach((btn, index) => {
			btn.addEventListener("click", () => {
				moveSlider(index);
			})
		})
	}
}

document.addEventListener("DOMContentLoaded", () => {
	initSlider();
});