$('.text').slideDown(2000);

$('.but').click(function()
{  
    $('.about').slideDown(1000)
    // $('.but').fadeOut(2000, function()
    // $('.about').slideDown(1000)
// }  )
}) 
// $('.Skills').slideDown(2000);

// $(window).scroll(function () 
// {  $('.about').slideDown(1000);
//     // $('.but').click(function()
//     // {  
    
//     // }) 
// })

$(window).scroll(function () 
{  $('.projects').slideDown(6000 , function()
{
    $('.Contact-items, .contact-items  ').slideDown(3000 );
});
})
