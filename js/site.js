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
                        scrollTop: target.offset().top - 70
                    }, 350);
                } else {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 50
                    }, 350);
                    return false;
                }
            }
        }
    });

    // Sticky Header
    if ($('.sticky-header').length >= 1) {
        $(window).scroll(function() {
            var header = $(document).scrollTop() - 500;
            var headerHeight = $('header').height();
            if (header > headerHeight) {
                $('.sticky-header').addClass('fixed animated fadeInDown');
                $('#sign-in').addClass('hide');
                $('#enroll-option, .desktop-nav').removeClass('hide');
                $('.desktop-nav > nav').addClass('justify');
            } else {
                $('.sticky-header').removeClass('fixed animated fadeInDown');
                $('#sign-in').removeClass('hide');
                $('#enroll-option, .desktop-nav').addClass('hide');
                $('.desktop-nav > nav').removeClass('justify');
            }
        });
    }

    // Video Modal
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

    // Reviews
    var reviewsArray = [];
    var siteReviews = {
        "reviews": [{
                "review": "Bridget provides the best tips & strategies for someone like myself who recently started investing in the stock market. There’s nothing quiet like this course. I highly recommend it.",
                "source": "Bilal Karim",
                "img": "img/bilal-karim.jpg"
            },
            {
                "review": "I definitely recommend this course for those who want to make the leap into DIY investing, but need a bit of a push to do so. It has been well worth every penny so far.",
                "source": "Amanda Droeske",
                "img": 'img/amanda-droeske.jpg'
            },
            {
                "review": "The course was very reasonably priced and gave me the push I needed to open a DIY investment account. Bridget gave the proper education and tips to make me feel confident!",
                "source": "Jessica Bihari",
                "img": 'img/jessica-bihari.jpg'
            },
            {
                "review": "Because of this course, I am confident in the stock market, have created a passive income that pays me every month. I will NEVER pay anyone to manage my money again. The course has literally paid for itself and I’m still making money.",
                "source": "Carol Casey",
                "img": 'img/carol-casey.jpg'
            },
            {
                "review": "An excellent program for the novice investor or those looking to get into some solid wealth building. Would have liked this program more had it been around 30 years ago!",
                "source": "Dace Lawrence",
                "img": 'img/dace-lawrence.jpg'
            },
            {
                "review": "Content is well organized, and Bridget gives easy-to-understand examples for all of the lessons. The structure allows each student to set their own pace, be that extended over several weeks or consumed all in one sitting.",
                "source": "Josh Overmyer",
                "img": 'img/josh-overmyer.jpg'
            }
        ]
    };

    // Get random array
    function getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0),
            i = arr.length,
            min = i - count,
            temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }

    // Get random reviews
    // Get JSON of reviews and push to array
    for (var i = 0; i < siteReviews.reviews.length; i++) {
        reviewsArray.push(siteReviews.reviews[i]);
    }
    // Take the array from previous step and pick 2 random reviews
    if (reviewsArray.length > 0) {
        var reviews = getRandomArrayElements(reviewsArray, 2);
        var array = [];
        for (var i = 0; i < reviews.length; i++) {
            // array.push(reviews[i]);
            var userReviews = document.getElementById('user-reviews');
            userReviews.innerHTML =
            '<div class="half review">' +
                '<div class="flex">' +
                    '<div class="author-image"><img src="' + reviews[0].img + '" alt="' + reviews[0].source + '"></div>' +
                    '<div class="author">' +
                        '<h2>' + reviews[0].source + '</h2>' +
                        '<p>' + reviews[0].review + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="half review">' +
                '<div class="flex">' +
                    '<div class="author-image"><img src="' + reviews[1].img + '" alt="' + reviews[1].source + '"></div>' +
                    '<div class="author">' +
                        '<h2>' + reviews[1].source + '</h2>' +
                        '<p>' + reviews[1].review + '</p>' +
                    '</div>' +
                '</div>' +
            '</div>';
        }
    }
});
