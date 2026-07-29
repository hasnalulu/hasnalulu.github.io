 $(document).ready(function () {
            $(".ham-menu").click(function () {
                $(".nav ul").toggleClass("active")
                $(this).toggleClass("active");
            })


            // scroll function
            $(window).scroll(function () {

                var limit = 120;
                var scrolled = $(this).scrollTop();
                console.log(scrolled);

                if (scrolled >= limit) {
                    $('header').addClass('scrolled');
                    // console.log("scrolled");
                } else {
                    $('header').removeClass('scrolled');
                    // console.log("unscrolled")
                }
            })
            $(".text button").click(function () {
                $(window).scrollTop(0);
            })


            $(window).scroll(function () {

                var limit = 450;
                var scrolled = $(this).scrollTop();
                console.log(scrolled);

                if (scrolled >= limit) {
                    $('.icon').addClass('scrolled');
                    // console.log("scrolled");
                } else {
                    $('.icon').removeClass('scrolled');
                    // console.log("unscrolled")
                }
            })
            $(".icon").click(function(){
                $(window).scrollTop(0);
            })

        })