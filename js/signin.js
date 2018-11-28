$("#sign").submit(function(event) {
    console.log(hi);
    /* stop form from submitting normally */
    event.preventDefault();

    /* get the action attribute from the <form action=""> element */
    var url = "https://guber-3d87.restdb.io/rest/users";
    url += '?' + $.param({
      'api-key': "5bfe9dd8b83385326c1388c7"
    });

    /* Send the data using post with element id name and name2*/
    var posting = $.post( url, { name: $('input[name="name"]').val(), phone: $('input[name="phone"]').val(),address: $('input[name="address"]').val(),psw: $('input[name="psw"]').val() } );

    /* Alerts the results */
    posting.done(function( data ) {
      console.log('success');
    });
  });