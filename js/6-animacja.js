//finkcja document.ready() wersja skrócona

$(function(){
    'use strict';

    $('h1').hide(5000).show(3000);
    $('h2').fadeOut(5000).fadeIn(3000);
    $('h3').animate({'font-size' : '1em', 'margin-left' : '100px'}, 2000, parBack); //to ostatnie to funkcja zwrotna
    
    function parBack() {
        $('p').css('background', 'red');
    }
    
    
    
/*    slide();
    
    function slide(){
        $('h3').slideUp(3000).slideDown(3000, slide);
    }*/
    
    
});