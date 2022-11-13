let buttons = document.getElementsByClassName("devices-slider-button");
let container_text = document.getElementsByClassName("devices-slider-text");

let texts = [
	"A new email service being developed by a group from MIT and CERN promises to bring secure,encrypted email to the masses and keep sensitive information away from prying eyes.<br><span>— Boston Herald</span>",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis at urna quis commodo. Cras ut scelerisque nulla. Morbi efficitur feugiat consectetur dignissim cras.<br><span>— Tempor Quis</span>",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor hendrerit neque id imperdiet. Duis dui orci, vulputate sit amet quis purus ut libero.<br><span>— Lorem Dolor</span>"
]

function slider_click(element) {
	for (let i = 0; i < buttons.length; i++)
		buttons[i].classList.remove("devices-slider-button-active");

	element.classList.add("devices-slider-button-active");
	container_text[0].innerHTML = texts[element.getAttribute("value")-1];
}

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", () => slider_click(buttons[i]));
}


