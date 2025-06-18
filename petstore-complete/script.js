function adoptPet() {
    alert("Thank you for your interest in adopting! Our team will contact you soon.");
}

 // script.js
$(function() {
  const $petList    = $('#pet-list');
  const $checkboxes = $('input[name="pet-type"]');

  function renderPets(list) {
    $petList.empty();
    if (!list.length) {
      return $petList.append('<p>No pets match your filters.</p>');
    }
    list.forEach(pet => {
      const $card = $(`
        <div class="pet">
          <img src="${pet.img}" alt="${pet.name}" />
          <h3>${pet.name}</h3>
          <p>Type: ${pet.type}</p>
          <p>Age: ${pet.age} years</p>
          <button class="adopt-btn">Adopt Now</button>
        </div>
      `);
      $petList.append($card);
    });
  }

  $checkboxes.on('change', () => {
    const selected = $checkboxes
      .filter(':checked')
      .map((_, cb) => cb.value)
      .get();
    renderPets(pets.filter(p => selected.includes(p.type)));
  });

  $petList.on('click', '.adopt-btn', () => {
    alert("Thank you for your interest in adopting! Our team will contact you soon.");
  });

  // initial render
  renderPets(pets);
});

  