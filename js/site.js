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

    // Set the date we're counting down to
    var countDownDate = new Date("Feb 17, 2018 23:59:59").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "";
        }
    }, 1000);

    // Modal
    var overlay = document.createElement('div');
    var modal = document.createElement('div');
    var vidBtn = document.getElementById('watch-video');
    var curriculumBtn = document.getElementById('preview');
    var reviewsBtn = document.getElementById('show-reviews');
    // Watch Video Button
    if (vidBtn) {
        vidBtn.onclick = function(e) {
            overlay.id = 'overlay';
            overlay.className = '';
            modal.id = 'modal';
            modal.className = 'animated fadeInUp visible';
            modal.innerHTML = '<iframe src="https://www.youtube.com/embed/szEoVvtNhrc?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            document.body.appendChild(overlay);
            overlay.appendChild(modal);
            e.preventDefault();
        };
    }
    // Notify Me Modal
    // $('.notify').click(function(e) {
    //     overlay.id = 'overlay';
    //     overlay.className = '';
    //     modal.id = 'modal';
    //     modal.className = 'animated fadeInUp visible info-sm';
    //     document.body.appendChild(overlay);
    //     overlay.appendChild(modal);
    //     $('#modal').append("<script async id='_ck_246643' src='https://forms.convertkit.com/246643?v=6'></script>");
    //     e.preventDefault();
    // });
    // Curriculum Button
    if (curriculumBtn) {
        curriculumBtn.onclick = function(e) {
            overlay.id = 'overlay';
            // overlay.className = 'fixed';
            modal.id = 'modal';
            modal.className = 'animated fadeInUp visible info';
            modal.innerHTML =
            '<div class="section"><h1><strong>1. Introduction to The Six-Figure Stock Portfolio</strong></h1>' +
            '<h2>Welcome!</h2>' +
            '<h2>​Why You Need to Invest in the Stock Market</h2>' +
            '<h2>Future Value Calculator</h2>' +
            '<h2>What is the Stock Market</h2>' +
            '<h2>How to Make Money Investing</h2></div>' +

            '<div class="section"><h1><strong>2. Exclusive Bonuses</strong></h1>' +
            '<h2>​Download: Top 100 Stocks + Top 20 ETFs</h2>' +
            '<h2>Download: The Passive Income Planner</h2>' +
            '<h2>Private Facebook Group: The Six-Figure Study Hall</h2></div>' +

            '<div class="section"><h1><strong>3. Introduction to The Six-Figure Stock Portfolio</strong></h1>' +
            '<h2>​Why You Need to Invest in the Stock Market</h2>' +
            '<h2>Future Value Calculator</h2>' +
            '<h2>What is the Stock Market</h2>' +
            '<h2>How to Make Money Investing</h2></div>' +

            '<div class="section"><h1><strong>4. Live Masterclasses</strong></h1>' +
            '<h2>Masterclass #1: Building & Rebalancing Your Portfolio</h2>' +
            '<h2>​Masterclass #2: Making a Trading Plan</h2>' +
            '<h2>Masterclass #3: All About Dividends</h2>' +
            '<h2>Masterclass #4: The Basics of Technical Analysis</h2></div>' +

            '<div class="section"><h1><strong>5. Introduction to Investing</strong></h1>' +
            '<h2>​Reading & Understanding Stock Charts</h2>' +
            '<h2>​Market Indices & Stock Prices</h2>' +
            '<h2>Bear & Bull Markets</h2>' +
            '<h2>​Different Types of Asset Classes</h2>' +
            '<h2>​​Stocks, Bonds, & ETFs</h2>' +
            '<h2>​​Reducing Fees & Taxes</h2>' +
            '<h2>​​​How to Open a Brokerage Account</h2></div>' +

            '<div class="section"><h1><strong>6. All About ETFs</strong></h1>' +
            '<h2>Introduction to ETFs</h2>' +
            '<h2>​Your ETF Asset Allocation</h2>' +
            '<h2>ETFs to Consider for Your Portfolio</h2>' +
            '<h2>​Strategic Diversification</h2></div>' +

            '<div class="section"><h1><strong>7. All About Common Stocks</strong></h1>' +
            '<h2>Creating a Mockfolio</h2>' +
            '<h2>The 5-Minute Stock Evaluation Strategy</h2>' +
            '<h2>Learning to Read a Balance Sheet</h2>' +
            '<h2>Essential Ratios for Stock Evaluation</h2>' +
            '<h2>Stocks to Add to Your Watchlist</h2>' +
            '<h2>Quiz: Common Stocks</h2></div>' +

            '<div class="section"><h1><strong>8. Investing To Make Money</strong></h1>' +
            '<h2>The Power of Passive Income</h2>' +
            '<h2>All About Dividends</h2>' +
            '<h2>All About Capital Gains</h2>' +
            '<h2>Creating Your Investment Income Stream</h2>' +
            '<h2>Quiz: Passive Income</h2>' +
            '<h2>Passive Income Spreadsheet</h2></div>' +

            '<div class="section"><h1><strong>9. The $100,000 Portfolio</strong></h1>' +
            '<h2>The Six-Figure Portfolio Guide</h2>' +
            '<h2>Finding Your Ideal Asset Allocation</h2>' +
            '<h2>$0 to $10,000</h2>' +
            '<h2>$10,000 to $25,000</h2>' +
            '<h2>$25,000 to $50,000</h2>' +
            '<h2>$50,000 to $100,000</h2></div>' +

            '<div class="section"><h1><strong>10. Creating a Trading Plan</strong></h1>' +
            '<h2>Developing a Trading Plan</h2>' +
            '<h2>How to Buy a Stock</h2>' +
            '<h2>Walk-through: Buying a Stock</h2>' +
            '<h2>How to Sell a Stock</h2>' +
            '<h2>Walk-through: Selling a Stock</h2>' +
            '<h2>4 Tips to Save Money on Every Trade</h2></div>' +

            '<div class="section"><h1><strong>11. Up Next</strong></h1>' +
            '<h2>Recommended Resources</h2>' +
            '<h2>Congratulations, Graduate!</h2></div>';

            document.getElementById('curriculum').appendChild(overlay);
            overlay.appendChild(modal);
            e.preventDefault();
            // $('html,body').animate({ scrollTop: $("#curriculum").offset().top - 50 });
        }
    }
    if (reviewsBtn) {
        reviewsBtn.onclick = function(e) {
            overlay.id = 'overlay';
            // overlay.className = 'fixed';
            modal.id = 'modal';
            modal.className = 'animated fadeInUp visible info-lg';
            modal.innerHTML =
            '<div>' +
                '<h2>Deidre Cross</h2>' +
                '<p>The Six-Figure Stock Portfolio has packaged everything in a simple straight forward way for me to understand. I have so much more confidence with my portfolio now and I can actually explain what I am doing and why I am doing it. This e-course has already paid for itself and will continue to over and over just based off the changes I have made to my portfolio.</p>' +
            '</div>' + '<br />' +
            '<div>' +
                '<h2>Amanda Droeske</h2>' +
                '<p>I definitely recommend this course for those who want to make the leap into DIY investing, but need a bit of a push to do so. It has been well worth every penny so far.</p>' +
            '</div>' + '<br />' +
            '<div>' +
                '<h2>Aundre Blake</h2>' +
                '<p>I went from knowing absolutely nothing about the stock market to having sound knowledge on how to build long term wealth. Bridget not only breaks it down in an easy to understand manner but in a way that gets you excited to get started. I would recommend this course to anyone that has thought about getting into trading but too scared to take that leap.</p>' +
            '</div>' + '<br />' +
            '<div>' +
                '<h2>Bilal Karim</h2>' +
                '<p>Bridget provides the best tips & strategies for someone like myself who recently started investing in the stock market. There’s nothing quiet like this course. I highly recommend it.</p>' +
            '</div>' + '<br />' +
            '<div>' +
                '<h2>Jessica Bihari</h2>' +
                '<p>The course was very reasonably priced and gave me the push I needed to open a DIY investment account. Bridget gave the proper education and tips to make me feel confident!</p>' +
            '</div>' + '<br />' +
            '<div>' +
                '<h2>Carol Lynn</h2>' +
                '<p>Because of this course, I am confident in the stock market, have created a passive income that pays me every month. I will NEVER pay anyone to manage my money again. The course has literally paid for itself and I’m still making money.</p>' +
            '</div>' + '<br />' +
            '<div>' +
                '<h2>Dace Lawrence</h2>' +
                '<p>An excellent program for the novice investor or those looking to get into some solid wealth building. Would have liked this program more had it been around 30 years ago!</p>' +
            '</div>' + '<br />' +
            '<div>' +
                '<h2>Josh Overmyer</h2>' +
                '<p>Content is well organized, and Bridget gives easy-to-understand examples for all of the lessons. The structure allows each student to set their own pace, be that extended over several weeks or consumed all in one sitting.</p>' +
            '</div>' + '<br />' +
            '<div>' +
                '<h2>Alyssa Fischer</h2>' +
                '<p>Not only is The Six-Figure Stock Portfolio worth more than its cost, it is also the most useful and practical investing course I have taken or been able to find. Plus, you will never regret investing in your future self.</p>' +
            '</div>' + '<br />' +
            '<div>' +
                '<h2>Mallika Sen</h2>' +
                '<p>As someone who really likes studying this material and is prone to a great deal of analysis paralysis, I think this course helped pull me out of the research rabbit-hole just enough to develop more concrete plans.</p>' +
            '</div>' + '<br />' +
            '<div>' +
                '<h2>Natasha Tekeste</h2>' +
                '<p>Bridget and this program are awesome! Would highly recommend!</p>' +
            '</div>';

            document.getElementById('reviews').appendChild(overlay);
            overlay.appendChild(modal);
            e.preventDefault();
            // $('html,body').animate({ scrollTop: $("#reviews").offset().top - 50 });
        }
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
                "source": "Carol Lynn",
                "img": 'img/carol-lynn.jpg'
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
