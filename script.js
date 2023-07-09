const characters = document.querySelectorAll('.character');

// logic to add the selected class in the character that the user
characters.forEach(character => {
    character.addEventListener('mouseenter', () => {
        const characterSelected = document.querySelector('.selected');
        characterSelected.classList.remove('selected');
        character.classList.add('selected');

        // change enlarged image of character
        const imgAugmentedCharacter = document.querySelector('.augmented_character');
        
        const idCharacter = character.attributes.id.value;
        imgAugmentedCharacter.src = `./src/imagens/card-${idCharacter}.png`;

         // change character name
         const nameCharacter = document.getElementById('character_name');
        nameCharacter.innerText = character.getAttribute('data-name');

        // Change character description
        const characterDescription = document.getElementById('character_description');
        characterDescription.innerText = character.getAttribute('data-description');
    })
});
