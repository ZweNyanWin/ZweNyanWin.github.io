const pets = [
  // Dogs
  { name: 'Buddy',    type: 'Dog',      age: 3, img: 'dogs/dog01.jpg' },
  { name: 'Rex',      type: 'Dog',      age: 4, img: 'dogs/dog02.jpg' },
  { name: 'Charlie',  type: 'Dog',      age: 2, img: 'dogs/dog03.jpg' },

  // Cats
  { name: 'Mittens',  type: 'Cat',      age: 1, img: 'cats/cat01.jpg' },
  { name: 'Whiskers', type: 'Cat',      age: 2, img: 'cats/cat02.jpg' },
  { name: 'Shadow',   type: 'Cat',      age: 3, img: 'cats/cat03.jpg' },

  // Capybaras
  { name: 'Capy',     type: 'Capybara', age: 5, img: 'capybaras/capybara01.jpg' },
  { name: 'Barbie',   type: 'Capybara', age: 4, img: 'capybaras/capybara02.jpg' },

  // Birds
  { name: 'Tweety',   type: 'Bird',     age: 2, img: 'birds/bird01.jpg' },
  { name: 'Sky',      type: 'Bird',     age: 1, img: 'birds/bird02.jpg' },
];

  
  function adoptPet() {
    alert("Thank you for your interest in adopting! Our team will contact you soon.");
  }
  
  function loadPets() {
    console.log('Loading pets...');
    const petList = document.getElementById('pet-list');
  
    pets.forEach(pet => {
      const petItem = document.createElement('div');
      petItem.className = 'pet';
      petItem.innerHTML = `
        <img src="${pet.img}" alt="${pet.name}" />
        <h3>${pet.name}</h3>
        <p>Type: ${pet.type}</p>
        <p>Age: ${pet.age} years</p>
        <button onclick="adoptPet()">Adopt Now</button>
      `;
      petList.appendChild(petItem);
    });
  
    console.log('Pets loaded successfully.');
  }
  
  document.addEventListener('DOMContentLoaded', loadPets);
  