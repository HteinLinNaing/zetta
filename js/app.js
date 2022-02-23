$(document).ready(function () {

        //SELECTOR
        let navLink = $(".nav-link");
        let navbarToggler = $(".navbar-toggler");
        let toggleIcon = $(".toggle-icon");
        let websiteLoader = $(".website-loader");

        //WEBSITE LOADER
        $(window).on("load", function () {
                websiteLoader.fadeOut(500);
        });

        //MENU ICON CHANGE ON CLICK
        navbarToggler.click(function () {
                if(toggleIcon.hasClass("fa-bars")) {
                        toggleIcon.removeClass("fa-bars");
                        toggleIcon.addClass("fa-times");
                } else {
                        toggleIcon.removeClass("fa-times");
                        toggleIcon.addClass("fa-bars");
                }
        });

        // NAVBAR FIX TO TOP
        let windowHeight = $(window).height();

        $(window).scroll(function() {

                let currentScrollLocation = $(document).scrollTop();

                if(currentScrollLocation > windowHeight - 150) {
                        $(".nav-menu").addClass("scroll");
                } else {
                        $(".nav-menu").removeClass("scroll");
                }

        });

        // SHOW ACTIVE MENU
        function setCurrent(current) {
                navLink.removeClass("current");
                $(`.nav-link[href="#${current}"]`).addClass("current");
        }

        function onScroll() {
                let currentSection = $("section[id]");

                currentSection.waypoint(function (direction) {
                        if (direction == "down") {
                                let currentSectionId = $(this.element).attr("id");
                                setCurrent(currentSectionId);
                        }
                },{ offset: "150px" });

                currentSection.waypoint(function (direction) {
                        if (direction == "up") {
                                let currentSectionId = $(this.element).attr("id");
                                setCurrent(currentSectionId);
                        }
                },{ offset: "-150px" });
        }

        onScroll();

        // WOW JS INITIALIZE
        wow = new WOW(
            {
                    boxClass: 'wow',      // default
                    animateClass: 'animate__animated', // default
                    offset: 0,          // default
                    mobile: true,       // default
                    live: true        // default
            }
        )
        wow.init();

        // SERVICES SLICK CAROUSEL
        $(".services-slide").slick({
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                        {
                                breakpoint: 1024,
                                settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 4,
                                        infinite: true
                                }
                        },
                        {
                                breakpoint: 780,
                                settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 3,
                                        dots: true,
                                        arrows: false
                                }
                        },
                        {
                                breakpoint: 480,
                                settings: {
                                        autoplay: true,
                                        autoplaySpeed: 2000,
                                        infinite: true,
                                        slidesToShow: 1,
                                        slidesToScroll: 1,
                                        dots: true
                                }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                ]
        });

        // TESTIMONIAL SLICK CAROUSEL
        $(".testi-slide").slick({
                arrows: false,
                dots: true,
                infinite: true,
                speed: 500,
                fade: true,
                cssEase: "linear",
                autoplay: true,
                autoplaySpeed: 3000
        });

        // PHOTOS CAROUSEL
        $(".photo-slide").slick({
                arrows: false,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                responsive: [
                        {
                                breakpoint: 1024,
                                settings: {
                                        slidesToShow: 4,
                                        slidesToScroll: 1,
                                }
                        },
                        {
                                breakpoint: 780,
                                settings: {
                                        slidesToShow: 3,
                                        slidesToScroll: 1
                                }
                        },
                        {
                                breakpoint: 480,
                                settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                ]
        });
});