$(document).ready(function () {
    $('.menu-toggler').on('click', function() {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggler').removeClass('open');       // hetha dhaher besh yanhi el class ki yenzel al button
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function() {                  // hetha met3 ki yenzel al open and 
        $('html, body').animate({                                   // close button besh wa9teha yawli 
            scrollTop: $($(this).attr('href')).offset().top - 100   // yemchi smooth yaani fi 3a9lou lel 
        }, 2000);                                                   // id eli hachtou behha 
    });

    $('#up').on('click', function() {    // hethy lel butoon up besh yetl3 lel el fou9 ki tnezeel alyh
        $('html, body').animate({ 
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,         // hethy lezma besh el aos libary temchy
        once: true   // hethy tawli ki traj3 tetlee3 fel page yab9aw ell 3anser eli jew bel          animation yanii yarj3oush yen7aw ki traj3 tetlee3 fel page
    })
});