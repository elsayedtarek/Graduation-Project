function slide_move(slideNo = slideIndex, jump = false) {
    var valid = true;
    switch (slideIndex) {
        case 1:
            valid = signup_validate1();
            break;
        case 2:
            valid = signup_validate2();
            break;
    }

    if (jump) {
        if (valid) {
            currentSlide(slideNo);
        }
    } else {
        if (valid) {
            plusSlides(1);
        }
    }
}


function xx(input, id) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            //alert(e.target.result);
            document.getElementById(id).setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }

}