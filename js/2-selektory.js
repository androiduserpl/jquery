//finkcja document.ready() wersja skrócona

$(function(){
    'use strict';
    
    
    
    var paragraphs = $('p');
    console.log(paragraphs);
    
    var paragrapOne = $('#first');
    console.log(paragrapOne);
    
    var paragrapTwo = $('.praragraf');
    console.log(paragrapTwo);
    
    var paragrapNot = $('p:not(paragraf)');
    console.log(paragrapNot);
    
    /*div > p  to jest bezpośredni po praragraf*/
    var paragrapInDiv = $('div > p');
    console.log(paragrapInDiv);
});