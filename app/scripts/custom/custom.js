$(document).ready(function() {

    var app = {

        init: function() {
           this.scrollToTop();
           this.backToTop();
           this.menuLinkSpy();
        },

        scrollToTop: function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 800) {
                    $('#top').fadeIn();
                } else {
                    $('#top').fadeOut();
                }
            });
        },

        backToTop: function() {
            var $btn = $('#top');

            $btn.on('click', function() {
                $('html, body').animate({scrollTop:0}, 800);
                return false;
            });
        },

        menuLinkSpy: function () {  
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });

        }

    };
    app.init();
});