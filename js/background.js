const images = ["1.jpg", "2.jpg"];

const selectImg = images[Math.floor(Math.random() * images.length)];

const bgArea = document.createElement("img");
bgArea.src = `img/${selectImg}`;
bgArea.classList.add("bg-area");

document.body.appendChild(bgArea);