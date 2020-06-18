$(function () {

    $(".btn_search .fa").click(function () {
        $(".btn_wrap").toggleClass("btn_show");
    });

    // BANNER SLIDER JS HERE
    $('.banner_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
  ]

    });

    //WORK GALLERY IMAGE BUTTON
    //    var mixer = mixitup('.work_mix');

    //ISOTOPE JS HERE
    //            $('.work_filter').isotope({
    //                // options
    //                itemSelector: '.single_itm',
    //                layoutMode: 'fitRows'
    //            });

    // init Isotope
    var $grid = $('.work_filter').isotope({
        // options
        itemSelector: '.single_itm',
        layoutMode: 'fitRows'
    });
    // filter items on button click
    $('.work_btn').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //WORK GALLERY IMAGE FILTER HERE

    $('.ven').venobox();

    //    COUNTETR UP JS HERE
    $('.counter_active').counterUp({
        delay: 50,
        time: 5000
    });
    //FAQ PART
    $('.faq_header').on('click', function () {
        $('.faq_header button').removeClass('active');
        $(this).children('button').addClass('active');
    });
    // CLIENT SLIDER JS HERE
    $('.client_review').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
  ]

    });

});
