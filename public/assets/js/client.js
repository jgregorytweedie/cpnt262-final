fetch('http://localhost:3000/api/v0/gallery')
  .then(function(response){
    // JSON `data` returned from server
    // We need to convert it in a Javascript object
    return response.json();
  })
  .then(function(shoes){
    // `data`Javavascript object 
    console.log(shoes);

    let outputHTML = '';

    shoes.forEach(function(shoes){
      outputHTML += `
        <figure>
          <img src="../images/gallery/id/${shoes}" alt="${shoes.title}">
          <figcaption>"${shoes.description}"
        </figure>`;
    })

    // output to DOM
    document.querySelector('.gallery').innerHTML = outputHTML;

  })
  .catch(function(error){
    if (error) {
      console.log('Oh Noooooooos!');
    }
  });