

// // FETCH FOR ADMIN
// fetch(`${window.location.origin}/api/v0/admin`)
//     .then(function (response) {
//         // Json returned 
//         return response.json();
//     })
//     .then(function (shoe) {
//         // data js object 
//         console.log(shoe);

//         let output = '';

//         whiskey.forEach(function (shoe) {
//             output += `<figure class="card">
//                 <img src="images/gallery/${shoe.Path}.jpg" alt="greenland": ${shoe.title}" width="${shoe.width}" height="${shoe.height}">
//                </figure>`;
//         });

//         // container for images
//         document.querySelector('.gallery').innerHTML = output;
//     })

//     .catch(function (error) {
//         if (error) {
//             console.log('ERROR');
//         }
//     });

    const shoes = require("../../../seeds/shoes");
    // FETCH FOR GALLERY
    fetch(`${window.location.origin}/api/v0/gallery`)
    .then(function (response) {
        // Json returned 
        return response.json();
    })
    .then(function (shoe) {
        // data js object 
        console.log(shoe);

        let output = '';

        shoes.forEach(function (shoe) {
            output += `<figure class="card">
                <img src="images/gallery/${shoe.Path}.jpg" alt="greenland": ${shoe.title}" width="${shoe.width}" height="${shoe.height}">
               </figure>`;
        });

        // container for images
        document.querySelector('.gallery').innerHTML = output;
    })

    .catch(function (error) {
        if (error) {
            console.log('ERROR');
        }
    });

    // // FETCH FOR TEAMS
    // fetch(`${window.location.origin}/api/gallery`)
    // .then(function (response) {
    //     // Json returned 
    //     return response.json();
    // })
    // .then(function (shoe) {
    //     // data js object 
    //     console.log(shoe);

    //     let output = '';

    //     whiskey.forEach(function (shoe) {
    //         output += `<figure class="card">
    //             <img src="images/gallery/${shoe.Path}.jpg" alt="greenland": ${shoe.title}" width="${shoe.width}" height="${shoe.height}">
    //            </figure>`;
    //     });

    //     // container for images
    //     document.querySelector('.gallery').innerHTML = output;
    // })

    // .catch(function (error) {
    //     if (error) {
    //         console.log('ERROR');
    //     }
    // });