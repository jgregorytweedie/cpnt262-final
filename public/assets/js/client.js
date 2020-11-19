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


















// fetch('http://localhost:3000/api/v0/gallery')
//   .then(function(response){
//     // JSON `data` returned from server
//     // We need to convert it in a Javascript object
//     return response.json();
//   })
//   .then(function(shoes){
//     // `data`Javavascript object 
//     console.log(shoes);

//     let outputHTML = '';

//     shoes.forEach(function(shoes){
//       outputHTML += `
//         <figure>
//           <img src="../images/gallery/id/${shoes}" alt="${shoes.title}">
//           <figcaption>"${shoes.description}"
//         </figure>`;
//     })

//     // output to DOM
//     document.querySelector('.gallery').innerHTML = outputHTML;

//   })
//   .catch(function(error){
//     if (error) {
//       console.log('Oh Noooooooos!');
//     }
//   });