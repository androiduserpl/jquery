//finkcja document.ready() wersja skrócona

$(function(){
    'use strict';
   
    $('h1').on({
        'click': function() {
            $(this).css('color', 'red');
        },
        
        'mouseover': function() {
            $(this).css('background', 'red');
        },
        
        'mouseout': function() {
            $(this).css('background', 'green');
        }
        
        
    });
    

});