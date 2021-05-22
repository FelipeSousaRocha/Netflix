$('.owl-carousel').owlCarousel({
    loop:true, /* loop infinito */
    margin:10, /* espaço entre imagens */
    nav:false, /* menu de navegação */ 
    responsive:{ /* responsividade */ 
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})