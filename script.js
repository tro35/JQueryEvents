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
    $('button').css('background-color', 'green');    
    console.log(e);
})