$(function () {

    $(".pick_icon a").click(function () {
        $(".pickr").toggleClass("active");
    });

    //    SUBMENU JS

    var subMenu = $(".navbar-nav .submenu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });

        var subMenuToggler = $(".navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children(".submenu").slideToggle();
            return false
        });

    }


    //SEARCH_BTN JS
    $(".btn_search .fa").click(function () {
        $(".btn_wrap").toggleClass("btn_show");
    });

    // BANNER SLIDER JS HERE

    function mainSlider() {
        var BasicSlider = $('.banner_slider');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.banner_area:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.banner_area[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
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
                }
            ]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


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


    //    COLOR PICKR JS
    // Simple example, see optional options for more configuration.
    const pickr = Pickr.create({
        el: '.color_pickr_btn',
        theme: 'classic', // or 'monolith', or 'nano'

        swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

        components: {

            // Main components
            preview: true,
            opacity: true,
            hue: true,

            // Input / output Options
            interaction: {
                hex: true,
                input: true
            }
        }
    });


    pickr.on('change', (color, instance) => {
        var colorCode = color.toHEXA().toString();
        //        console.log('colorCode: ', colorCode);

        document.documentElement.style.setProperty('--themeColor', colorCode)


    })

});
