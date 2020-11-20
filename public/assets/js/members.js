fetch (`${window.location.origin}/api/v0/members`)
  .then(function(response){
    // json returned from server
    return response.json();
})
  
  .then(function(members){
    let output = '';

    members.forEach(function(members) {
      output += `
        <li>${members.name}<br>${members.email}</li>`;
    });

    // container for images
    document.querySelector('.list').innerHTML = output;
  })



.catch(function(error){
  if (error) {
    console.log ("Oh no! you've done something wrong");
  }
});
