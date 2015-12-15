/**

Animate the scroll to an anchor tag <a name="idstring"></a>

*/
scrollFunction = function(idstring) {
    $('html, body').animate({
        scrollTop: $(idstring).offset().top
    }, 200);
};



