(function ($) {
    "use strict";
    // GLOBAL VARIABLES
    var header = $(".header"),
        wrapper = $('.wrapper');
    // PRELOADER
    preloader();
    function preloader(){
        setTimeout(function () {
            wrapper.addClass('wrapper_ready-load');
        }, 0);
    }
    // Opening the mobile menu
    navInit();
    function navInit() {
        header.find(".nav-toggle").on("click", function () {
            $(this).closest(header).toggleClass("header_menu-active");
        });
        function resizeNavMenu() {
            if ($(window).innerWidth()> 1024){
                if (header.hasClass('header_menu-active')){
                    header.removeClass('header_menu-active');
                }
            }
        }

        $(document).mouseup(function (e){
            if($(".header.header_menu-active").length) {
                var div = $(".header-nav");
                if (!div.is(e.target) && div.has(e.target).length === 0) {
                    header.removeClass('header_menu-active');
                }
            }
        });

        $(window).resize(function () {
            resizeNavMenu();
        });
    }

    // Page scroll animation
    $(window).on('load resize scroll', function () {
        if ($(window).scrollTop() >= 1) {
            header.addClass('header-scroll');
        } else {
            header.removeClass('header-scroll');
        }
    });


    // Form customization
    if ($("form").length) {
        setupContactForm();
        // Style only native <select> fields (avoid replacing text/tel inputs).
        if (window.jcf && $("select").length) {
            jcf.setOptions('Select', {
                wrapNative: false,
                useCustomScroll: false,
                fakeDropInBody: false
            });
            jcf.replace(document.querySelectorAll("select"));
        }
    }
    function setupContactForm() {
        let contactForm = document.getElementById("subscription-form-post");
        if (!contactForm) {
            return;
        }

        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            sendWA();
        });
    }

    function sendWA() {
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let phone = document.getElementById("phone");
        let textInput = document.getElementById("text-input");
        let mobileNumber = 5511977443418; // Enter your mobile number here

        if (name.value.trim() == "") {
            name.style.background = "lightpink";
            name.style.border = "4px solid red";
            alert("Please Enter your Name");
            return false;
        }
        let phoneDigits = (phone.value || "").replace(/\D/g, "");

        if (phoneDigits == "") {
            phone.style.background = "lightpink";
            phone.style.border = "4px solid red";
            alert("Por favor, informe seu telefone.");
            return false;
        }

        let text =
            "Olá! Vim pelo site da Alfa Beta Ação e gostaria de mais informações.\n\n" +
            "Nome: " + name.value + "\n" +
            "Email: " + email.value + "\n" +
            "Telefone: " + phoneDigits + "\n" +
            "Mensagem: " + textInput.value;

        let url = `https://wa.me/${mobileNumber}?text=${encodeURIComponent(text)}`;

        window.open(url, "_blank").focus();
    }

    smoothScroll();
    function smoothScroll(){
        $('a[href*="#"]:not([href="#"])').click(function (e) {
            e.preventDefault();
            let id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: (top - header.outerHeight()) - 32}, 1000);
        });
    }

})(jQuery);
