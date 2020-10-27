

$('#prvni').click(e =>{
   
    console.log('Yeah, you clicked me')
    console.log(e);
})

$('#druhe').click(e =>{
   
    $('#prvni').replaceWith(
        '<button>Novy text</button>');
    console.log(e);
})



$('#treti').click(e =>{
    e.preventDefault();
    $('#treti').prop('disabled',true);
    var textw = $('#barva').val();
    $('button').css('background-color', textw);    
    console.log(e);    
})




