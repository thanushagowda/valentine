const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.getElementById("card");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

function moveButton() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

yesBtn.onclick = () => {
    card.innerHTML = `
      <div class="yay">YAYYYY 😛😛😛</div>
      <img 
        src="sticker.JPG" 
        class="sticker"
        alt="cute sticker"
      />
    `;
  };
  
