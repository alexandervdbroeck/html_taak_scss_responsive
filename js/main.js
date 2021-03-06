/* JS voor fotografie*/

$(document).ready(function () {
    $(".menu").click(function (){
        $(".links").toggleClass("open");
    });
    $(window).scroll(function () {
        $(".links").removeClass("open");
        event.preventDefault();

    })

});


// smoot scroll
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


//scroll to top

$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#goToTop').fadeIn();
        } else {
            $('#goToTop').fadeOut();
        }
    });
    var duration_ms = 800;
    $('#goToTop').click(function () {
        // var last_scroll = $(window).scrollTop();
        $('html, body').animate({ scrollTop: 0 }, duration_ms, function(){
            setTimeout(function(){
                $('html, body').animate({ scrollTop: last_scroll }, duration_ms);
            }, duration_ms);
        });
    });
});