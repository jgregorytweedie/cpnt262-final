const main =
// Asynchronous fetch gallery
fetch(`${window.location.origin}/api/v0/gallery`)

  // send JSON fetch
  .then(function (response) {
    return response.json();
  })

  .then(function (shoes) {
    console.log(shoes);
    let output = '';

    cakes.forEach(function (shoes) {
      output += `<figure class="card">
                  <img src=${shoes.id} alt="${shoes.title}" width=>
                  <figcaption>
                    <p>${shoes.description}</h2>
                  </figcaption>
                </figure>`;
    });

    // output to DOM
    document.querySelector('.gallery').innerHTML = output;
  })

  // error 
  .catch(function (error) {
    if (error) {
      console.log(" NO INFORMATION!");
    }
  });