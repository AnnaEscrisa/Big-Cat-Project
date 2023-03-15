

// product gallery filter
$(document).ready(function () {
    $('.filter-button').click(function () {
        var value = $(this).attr('data-filter');
        
        if (value == 'all') {
            $('.filter').show('1000');
        }
        else {
            $('.filter').not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');
        }
    });
    if ($('.filter-button').removeClass('active')) {
        $(this).removeClass('active');
    }
    $(this).addClass('active');
})

//scroll to top button
let mybutton = document.getElementById("footer-button");
function topFunction() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
  }