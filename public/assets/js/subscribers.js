fetch (`${window.location.origin}/api/v0/subscribers`)
  .then(function(response){
    // json returned from server
    return response.json();
})
  
  .then(function(subscribers){
    let output = '';

    subscribers.forEach(function(subscribers) {
      output += `
        <li>${subscribers.name}<br>${subscribers.email}</li>`;
    });

    // container for images
    document.querySelector('.admin').innerHTML = output;
  })



.catch(function(error){
  if (error) {
    console.log ("Oh no! you've done something wrong");
  }
});
