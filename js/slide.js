var slideIndex = 0;
    var slides = document.getElementsByClassName("slide");
    var timer;

    showSlides();

    function plusSlides(n) {
        clearTimeout(timer);
        showSlides(slideIndex += n);
    }

    function showSlides() {
        var i;

        //esconder
        for (i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
        }

        //prox slide
        slideIndex++;

        //primeiro slide se chegar ao fim
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        //slide atrual
        slides[slideIndex - 1].style.opacity = 1;

        //temporizador
        timer = setTimeout(showSlides, 5000);
    }

    //botoes
    for (i = 0; i < slides.length; i++) {
        slides[i].addEventListener("click", function() {
            clearTimeout(timer);
        });
    }