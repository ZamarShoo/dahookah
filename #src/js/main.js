function navMobile() {
    $('#burger').toggleClass('burgerActive');
    $('#navigation').toggleClass('navigationActive');
}

$('.instagram-wrapper').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1,
            dots: true
        },
        600:{
            items:3,
            dots: true
        },
        1000:{
            items:4
        }
    }
})

var $input = $('#shishasInput'),
    $buffer = $('.input-buffer');

var $input1 = $('#hoursInput'),
    $buffer1 = $('.input-buffer1');


function minusShishas() {
    const shishas = document.getElementById('shishasInput');
    if((shishas.value-1) <= 0) { shishas.value = '0'} else {
        shishas.value = `${shishas.value-1}`
    }
    $buffer.text($input.val());
    $input.width($buffer.width());
}
function plusShishas() {
    const shishas = document.getElementById('shishasInput');
    shishas.value = `${parseInt(shishas.value, 10)+1}`
    $buffer.text($input.val());
    $input.width($buffer.width());
}

function inputShishas() {
    const shishas = document.getElementById('hoursInput');
    if((shishas.value-1) <= 0) { shishas.value = '0'} else {
        shishas.value = `${shishas.value-1}`
    }
    $buffer.text($input.val());
    $input.width($buffer.width());
}

function minusHours() {
    const hours = document.getElementById('hoursInput');
    if((hours.value-1) <= 0) { hours.value = '0'} else {
        hours.value = `${hours.value-1}`
    }
    $buffer1.text($input.val());
    $input1.width($buffer.width());
}
function plusHours() {
    const hours = document.getElementById('hoursInput');
    hours.value = `${parseInt(hours.value, 10)+1}`
    $buffer1.text($input.val());
    $input1.width($buffer.width());
}

function inputHours() {
    const hours = document.getElementById('hoursInput');
    if((hours.value-1) <= 0) { hours.value = '0'} else {
        hours.value = `${hours.value-1}`
    }
    $buffer1.text($input.val());
    $input1.width($buffer.width());
}