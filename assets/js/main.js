
const characters = document.querySelectorAll(".character");

characters.forEach(character => {
  character.addEventListener("mouseenter", () => {

    // Caso for usar no celular vai subir a imagem.
    if(window.innerWidth < 450) {
      window.scrollTo({top: 0, behavior: "smooth"});
    }

    removeSelectedClass();

    character.classList.add("selected");

    changeCharacterImage(character);

    changeCharacterName(character);

    changeCharacterDescription(character);
  })
})

function removeSelectedClass() {
  const selectedCharacter = document.querySelector(".selected");
  selectedCharacter.classList.remove("selected");
}

function changeCharacterImage(character) {
  const imageBigCharacter = document.querySelector(".big-character");
  const idCharacter = character.attributes.id.value;
  imageBigCharacter.src = `./assets/images/${idCharacter}.png`;
}

function changeCharacterName(character) {
  const nameCharacter = document.getElementById("name-character");
  nameCharacter.innerText = character.getAttribute("data-name");
}

function changeCharacterDescription(character) {
  const descriptionCharacter = document.getElementById("description-character");
  descriptionCharacter.innerText = character.getAttribute("data-description");
}