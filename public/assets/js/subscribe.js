fetch (`${window.location.origin}/api/v0/subscribe`)
  .then(function(response){
    // json returned from server
    return response.json();
})
  .then(function(data){
  // data Javascript object 
  const subscribers = data;
  return subscribers
})
  .then(function(subscribers){
    let output = '';

    subscribers.forEach(function(subscribe) {
      output += `
        <li>${subscribe.name}<br>${subscribe.email}</li>`;
    });

    // container for images
    document.querySelector('.list').innerHTML = output;
  })



.catch(function(error){
  if (error) {
    console.log ("Oh no! you've done something wrong");
  }
});
