//finkcja document.ready() wersja skrócona

$(function(){
    'use strict';
   
    $('body').find('p').eq(1).css('corol', 'white');
    
    console.log($('body').find('p').eq(1));
    
    $('p').each(function(index) {
        var size = 10;
        $(this).css('font-size',  size * (index+1) + 'px');
    });

});