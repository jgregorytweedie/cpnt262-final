fetch (`${window.location.origin}/api/v0/gallery`)
  .then(function(response){
    // json returned from server
    return response.json();
})
  .then(function(shoes){
  // data Javascript object 
  console.log(shoes);

  let output = '';

  shoes.forEach(function(shoes) {
    output += `<figure class="card">
                  <img src="/images/gallery/${shoes.id}.jpg" alt="${shoes.title}"
                  width="${shoes.width}" height="${shoes.height}">
                  <figcaption>
                    <h5>${shoes.description}</h5>
                  </figcaption>
                </figure>`;
  });

  // container for images
  document.querySelector('.gallery').innerHTML = output;
})

.catch(function(error){
  if (error) {
    console.log ("Oh no! you've done something wrong");
  }
});
