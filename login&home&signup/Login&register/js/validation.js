///////////////login validation////////


///function to swap check vectors
var rememberMeChecked = true; // 

function remember_checker() {
    if (rememberMeChecked) {
        document.getElementById('checkV').setAttribute('src', 'images/notchecked.svg');
        rememberMeChecked = false;
    } else {
        document.getElementById('checkV').setAttribute('src', 'images/checked.svg');
        rememberMeChecked = true;
    }
}

function pass_validation(pass) {
    if (is_empty(pass)) {
        return false;
    } else if (pass.value.length < 8) {
        return false;
    } else if (pass.value.length < 8) {
        return false;
    }
    return true;
}

function email_validation(Email) {

    if (is_empty(Email)) {
        return false;
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email.value))) {
        return false;
    }
    return true;
}

function is_empty(input) {

    if (input.value.length == 0) {
        return true;
    }

    return false;
}




///function to validate login email&pass
function login_validate() {

    var email = document.forms['login_form']["email"];
    var password = document.forms['login_form']['password'];


    document.getElementById('email_group').style.borderBottom = '1px solid #e6e5ea';
    document.getElementById('password_group').style.borderBottom = '1px solid #e6e5ea';

    if (!email_validation(email)) {
        document.getElementById('email_group').style.borderBottom = '2px solid #ff0000';
        return false;
    }

    if (!pass_validation(password)) {
        document.getElementById('password_group').style.borderBottom = '2px solid #ff0000';
        return false;
    }
    return true;
}





///////////////signup validation////////

function signup_validate1() {

    var fname = document.forms['signup_form']['fname'];
    var lname = document.forms['signup_form']['lname'];
    var email = document.forms['signup_form']['email'];
    var password = document.forms['signup_form']['password'];

    document.getElementById('firstname_group').style.borderBottom = '1px solid #e6e5ea';
    document.getElementById('lastname_group').style.borderBottom = '1px solid #e6e5ea';
    document.getElementById('email_group').style.borderBottom = '1px solid #e6e5ea';
    document.getElementById('password_group').style.borderBottom = '1px solid #e6e5ea';

    if (is_empty(fname)) {
        document.getElementById('firstname_group').style.borderBottom = '2px solid #ff0000';
        return false;
    }

    if (is_empty(lname)) {
        document.getElementById('lastname_group').style.borderBottom = '2px solid #ff0000';
        return false;
    }

    if (!email_validation(email)) {
        document.getElementById('email_group').style.borderBottom = '2px solid #ff0000';
        return false;
    }

    if (!pass_validation(password)) {
        document.getElementById('password_group').style.borderBottom = '2px solid #ff0000';
        return false;
    }
    return true;
}

function signup_validate2() {

    var dateofbirth = document.forms['signup_form2']['dateofbirth'];
    var counrty = document.forms['signup_form2']['country'];
    var city = document.forms['signup_form2']['city'];

    document.getElementById('dOfBirth_group').style.borderBottom = '1px solid #e6e5ea';
    document.getElementById('country_group').style.borderBottom = '1px solid #e6e5ea';
    document.getElementById('city_group').style.borderBottom = '1px solid #e6e5ea';

    if (is_empty(dateofbirth)) {
        document.getElementById('dOfBirth_group').style.borderBottom = '2px solid #ff0000';
        return false;
    }

    if (is_empty(counrty)) {
        document.getElementById('country_group').style.borderBottom = '2px solid #ff0000';
        return false;
    }

    if (is_empty(city)) {
        document.getElementById('city_group').style.borderBottom = '2px solid #ff0000';
        return false;
    }
    return true;
}