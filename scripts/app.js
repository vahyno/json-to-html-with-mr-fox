console.log("Sanity Check: JS is working!");

$(document).on('ready', function(){

  $('h1').text("Meet Mr. Fox"); // KEEP

  $(".first_name").text( data.first_name );
  $(".occupation").text( data.occupation );
  $(".location").text( data.location );
  $(".qualities").text( data.qualities.join(", ") || "NONE PROVIDED" );

  var sibling_count = data.siblings.length;
  $(".sibling_count").text(sibling_count);

  // using a FOR loop
  for (var i=0; i<sibling_count; i++) {
    var sib = data.siblings[i];
    var item = (
      "<li>" +
        sib.first_name + " - " + sib.age +
      "</li>"
    );
    $(".sibling_list").append( item );
  }

  // using the forEach loop method
  data.hobbies.forEach(function(hobby){
    var link = (
      "<a href='" + hobby.wikipedia_url + "'>" +
        hobby.name +
      "</a>"
    );
    $(".hobby_links").append( link );
  });

  $("img").attr({
    src: data.profile_image,
    title: "Image of " + data.first_name + " " + data.last_name
  });

});
