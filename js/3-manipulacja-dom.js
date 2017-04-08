//finkcja document.ready() wersja skrócona

$(function(){
    'use strict';
    
    var textPar = $('#paragraf').text();
    console.log(textPar);
    
    $('.paragraf').text(textPar + ' dodany'); // można podmienić i coś dodać od siebie
    
    $('.paragrafnext').html('<strong>TEXT</strong>') //wstawia elementy do kodu html - można wszystko
    
    
    
    $('#first').append(' dodaj do nagłówka');
    $('#first').after(' dodaj do nagłówka');
    
    var przedNaglowkiem = $('div').html();
    
    $('#first').before(przedNaglowkiem);
    
    $('strong').remove();
    $('h3').empty();
    //$('h2').css('background-color', 'red' );
    $('p').css('background-color', 'red' );
    $('p').css({'background-color': 'red', 'color': 'aqua'} ); // jeśli chcemy przypisać więcej styli to trzeba użyć nawiasu {}
    
    var poleTekstowe = $('input').val();
    console.log(poleTekstowe);

    $('input').val(textPar); //w sumie mamy zmienną która ma przypisane takto by był,o #paragraf
    
    
    console.log(przedNaglowkiem);
    
    $('h2').addClass('blue');
    
    $('p').removeClass('paragraf');

});