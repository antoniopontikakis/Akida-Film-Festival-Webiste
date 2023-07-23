// toggle between adding and removing the "responsive" class to the navbar

function navbarResponsiveness() {
		var x = document.getElementById("myNavbar");
		if (x.className === "navbar") {
				x.className += " responsive";
		} else {
				x.className = "navbar";
		}
}

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
	section.forEach((i) => {
		let top = window.scrollY;
		let offset = i.offsetTop - 150;
		let height = i.offsetHeight;
		let id = i.getAttribute("id");

		if (top >= offset && top < offset + height) {
			menu.forEach((link) => {
				link.classList.remove("active");
				document
					.querySelector("header nav a[href*=" + id + "]")
					.classList.add("active");
			});
		}
	});
};

// Caracteristics

function reveal() {
	var reveals = document.querySelectorAll(".reveal");
	
	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 100;
	
		if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}
	
window.addEventListener("scroll", reveal);

window.addEventListener(
	"scroll",
	() => {
		document.body.style.setProperty(
			"--scroll",
			window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
		);
	},
	false
);

//var prevScrollpos123 = window.pageYOffset;
//window.onscroll = function hideNavbar() {
  //var currentScrollPos123 = window.pageYOffset;
  //if (prevScrollpos123 > currentScrollPos123) {
    //document.getElementById("myNavbar").style.top = "0";
  //} else {
    //document.getElementById("myNavbar").style.top = "-100px";
  //}
  //prevScrollpos123 = currentScrollPos123;
//} 
