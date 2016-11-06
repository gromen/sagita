$(document).ready(function() {

    var app = {

        init: function() {
           this.scrollToTop();
           this.backToTop();
        },

        scrollToTop: function() {
            console.log(5);


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
            })
        }
    }
        app.init();


});