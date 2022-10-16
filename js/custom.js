// instancia jquery e evita conflitos
// jQuery( function($)) {}
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag

    let itens = $('.featured-item') // class

    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Product config

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
})