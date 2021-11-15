const menuIcon = document.querySelector(".menu__icon");
const darkBg = document.querySelector(".dark_bg_on_opened_menu");
const menu = document.querySelector(".menu");

const closeBtn = document.querySelector(".close");

menuIcon.addEventListener("click", () => {
	darkBg.classList.add("show");
	document.body.classList.add("disable_scroll", "left");
	menu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
	darkBg.classList.remove("show");
	document.body.classList.remove("disable_scroll", "left");
	menu.classList.remove("open");
});

const makeNavLinksSmooth = () => {
	const navLinks = document.querySelectorAll(".menu__link");

	for (let n in navLinks) {
		if (navLinks.hasOwnProperty(n)) {
			navLinks[n].addEventListener("click", (e) => {
				e.preventDefault();
				document.querySelector(navLinks[n].hash).scrollIntoView({
					behavior: "smooth"
				});

				darkBg.classList.remove("show");
				document.body.classList.remove("disable_scroll", "left");
				menu.classList.remove("open");
			});
		}
	}
};

makeNavLinksSmooth();
