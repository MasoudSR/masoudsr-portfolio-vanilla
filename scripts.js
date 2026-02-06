const skillsBtn = document.getElementById("skills-btn");
const samplesBtn = document.getElementById("samples-btn");
const buttonsContainer = document.querySelector(".buttons-container");
const worksContainer = document.querySelector(".works-container");
const line = document.querySelector(".line");
const notichi = document.getElementById("notichi");
const crybto = document.getElementById("crybto");
const coinichi = document.getElementById("coinichi");
const profilePic = document.getElementById("profile-pic");
const logo = document.getElementById("logo");

const switchHandler = (e) => {
	const btn = e.target.id;
	if (btn == "skills-btn") {
		worksContainer.style.transform = "translateX(0)";
		worksContainer.style.maxHeight = "150px";
		line.style.left = "61px";
		line.style.width = "61px";
		skillsBtn.classList.add("btn-active");
		samplesBtn.classList.remove("btn-active");
		notichi.style.maxHeight = "75px";
		crybto.style.maxHeight = "75px";
		coinichi.style.maxHeight = "75px";
	} else if (btn == "samples-btn") {
		worksContainer.style.transform = "translateX(-100%)";
		worksContainer.style.maxHeight = "1000px";
		line.style.left = "127px";
		line.style.width = "87px";
		samplesBtn.classList.add("btn-active");
		skillsBtn.classList.remove("btn-active");
	}
};

buttonsContainer.addEventListener("click", switchHandler);

// Samples

notichi.style.maxHeight = "75px";
crybto.style.maxHeight = "75px";
coinichi.style.maxHeight = "75px";

const notichiBtnHandler = () => {
	notichi.style.maxHeight = notichi.style.maxHeight === "75px" ? "800px" : "75px";
	crybto.style.maxHeight = "75px";
	coinichi.style.maxHeight = "75px";
};

const crybtoBtnHandler = () => {
	crybto.style.maxHeight = crybto.style.maxHeight === "75px" ? "800px" : "75px";
	notichi.style.maxHeight = "75px";
	coinichi.style.maxHeight = "75px";
};

const coinichiBtnHandler = () => {
	coinichi.style.maxHeight = coinichi.style.maxHeight === "75px" ? "800px" : "75px";
	notichi.style.maxHeight = "75px";
	crybto.style.maxHeight = "75px";
};

notichi.addEventListener("click", notichiBtnHandler);
crybto.addEventListener("click", crybtoBtnHandler);
coinichi.addEventListener("click", coinichiBtnHandler);

// header

window.addEventListener("scroll", () => {
	if (window.matchMedia("(max-width: 1023px)").matches) {
		let window_top = this.scrollY;
		if (window_top <= 200) {
			profilePic.classList.remove("profile-pic-scrolled");
			logo.classList.remove("logo-scrolled");
		} else {
			profilePic.classList.add("profile-pic-scrolled");
			logo.classList.add("logo-scrolled");
		}
	} else {
		profilePic.classList.remove("profile-pic-scrolled");
		logo.classList.remove("logo-scrolled");
	}
});
