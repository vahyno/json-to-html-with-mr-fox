console.log("Sanity Check: JS is working!");

$(document).on('ready', function(){

  $('h1').text("Meet Mr. Fox"); // KEEP

  $('.well span.first_name').text(data.first_name);
  $('.well span.occupation').text(data.occupation);
  $('.well span.location').text(data.location);

// qualities

  let allQualities = '';
    for (var i = 0; i < data.qualities.length; i++) {
      allQualities += `${data.qualities[i]} `
    };

  $('.well span.qualities').text(allQualities);

//sibling count
  $('.well span.sibling_count').text(data.siblings.length);

//siblings names

  for (var i = 0; i < data.siblings.length; i++) {

    let siblingName = data.siblings[i].first_name
    let siblingAge = data.siblings[i].age
    console.log(`${siblingName} - ${siblingAge}`); //console.log(`${data.siblings[i].first_name} - ${data.siblings[i].age}`);
    $('.sibling_list').append(
      $('<li>').text(`${siblingName} - ${siblingAge}`)
    );
  }

// Hobby list
  for (var i = 0; i < data.hobbies.length; i++) {

    let hobbyNAME = data.hobbies[i].name
    let hobbyURL = data.hobbies[i].wikipedia_url
    console.log(`${hobbyNAME} - ${hobbyURL}`);
    $('.hobby_links').append(
        $('<a>').attr('href',hobbyURL).text(hobbyNAME)
    );
  }
  
//foxes photo
  $("img").attr("src", data.profile_image);

});
