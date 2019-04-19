(function($) {
    $(document).ready(function() {

        $('.hero-btn').click(function(e) {
            e.preventDefault();
            var href = $(this).attr('href');
            var offset = $(href).offset().top;
            $('body, html').animate({ scrollTop: offset }, 800);
        })

    });

    $(window).scroll(function() {

    });

    $(window).resize(function() {

    });

    $(window).load(function() {
        setTimeout(function() {
            $('.preloader-area').addClass('close').delay(300).fadeOut('slow', function() {});
        }, 2000);
    });
})(jQuery);