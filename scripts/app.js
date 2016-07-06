console.log("Sanity Check: JS is working!");

$(document).on('ready', function(){

  $('h1').text("Meet Mr. Fox"); // KEEP

  var source = $("#profile-template").html(); // grab html string of profile template
  var template = Handlebars.compile(source);  // create the jello-mold
  var profile_html = template(data);          // pour in the jello (data)
  $('.profile').html(profile_html);           // display jello in profile

});
