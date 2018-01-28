$(document).ready(function() {
    // Scroll To Div
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//,
                '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                if (target.selector === '#enroll') {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 90
                    }, 350);
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 70
                    }, 350);
                    return false;
                }
            }
        }
    });

    var overlay = document.createElement('div');
    var modal = document.createElement('div');
    var vidBtn = document.getElementById('watch-video');
    if (vidBtn) {
        vidBtn.onclick = function(e) {
            overlay.id = 'overlay';
            modal.id = 'modal';
            modal.className = 'animated fadeInUp visible';
            modal.innerHTML = '<iframe src="https://www.youtube.com/embed/szEoVvtNhrc?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            document.body.appendChild(overlay);
            overlay.appendChild(modal);
            e.preventDefault();
        };
    }
    overlay.onclick = function() {
        this.parentElement.removeChild(overlay);
        this.removeChild(modal);
    };
    modal.onclick = function(event) {
        event.stopPropagation();
    };

    if ($('.sticky-header').length >= 1) {
        $(window).scroll(function() {
            var header = $(document).scrollTop() - 500;
            var headerHeight = $('header').height();
            if (header > headerHeight) {
                $('.sticky-header').addClass('fixed animated fadeInDown');
                $('#sign-in').addClass('hide');
                $('#enroll-option').removeClass('hide');
                $('nav').addClass('justify');
                // $('nav').show();
            } else {
                $('.sticky-header').removeClass('fixed animated fadeInDown');
                $('#sign-in').removeClass('hide');
                $('#enroll-option').addClass('hide');
                $('nav').removeClass('justify');
                // $('nav').hide();
            }
        });
    }
});
