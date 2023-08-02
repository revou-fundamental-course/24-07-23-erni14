// SMOOTHING SCROLL

// function scrollToSectionHome() {
//     var section = document.getElementById('headerTitle');
//     section.scrollIntoView({ behavior: "smooth" });
// }

// function scrollToSectionPackage() {
//     var section = document.getElementById('home');
//     section.scrollIntoView({ behavior: "smooth" });
// }

// function scrollToSectionCallus() {
//     var section = document.getElementById('callUs');
//     section.scrollIntoView({ behavior: "smooth" });
// }

// AUTO SLIDER

// var bannerIndex = 1;

// function nextbanner(n) {
//     showbanner(bannerIndex += n);
// }

// function showbanner(n) {
//     var i;
//     var banner = document.getElementsByClassName("mySlides");

//     if (n > banner.length) {
//         bannerIndex = 1;
//     }
//     if (n < 1) {
//         bannerIndex = banner.length;
//     }
//     for (i = 0; i < banner.length; i++) {
//         banner[i].style.display = "none";
//     }

//     banner[bannerIndex - 1].style.display = "block";
// }

// function nextBannerAuto() {
//     nextbanner(1);
// }

// setInterval(nextBannerAuto, 3000);

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// FORM VALIDATION

function validateForm() {
    const arrLabel = Array.from(document.querySelectorAll('.errorMessage'));

    var name = document.forms["form"]["name"];
    var email = document.forms["form"]["email"];
    var pNumber = document.forms["form"]["pNumber"];
    var interest = document.forms["form"]["interest"];

    var textName = name.value;
    var textEmail = email.value;
    var textPNumber = pNumber.value
    var textInterest = interest.value;

    const arrInput = [textName, textEmail, textPNumber, textInterest];

    if (textName.trim() === '') {
        setFormError(name, arrLabel, 0, true, 'Please input your name!');
    }

    if (textEmail.trim() === '') {
        setFormError(email, arrLabel, 1, true, 'Please input your email address!');
    }

    if (textPNumber.trim() === '') {
        setFormError(pNumber, arrLabel, 2, true, 'Please input your phone number!');
    }

    if (textInterest.trim() === '') {
        setFormError(interest, arrLabel, 3, true, 'Please input your destination place!');
    } else {
        setFormError(interest, arrLabel, 3, false, '');
    }

    if (!isNameValid(textName)) {
        setFormError(inputName, arrLabel, 0, true, 'Ilegal character found. Please input only letters and number!');
        return false;
    }

    if (!isEmailValid(textEmail)) {
        setFormError(inputEmail, arrLabel, 1, true, 'Invalid email address. Please input your valid email address!');
        return false;
    }

    if (!isPNumberValid(textPNumber)) {
        setFormError(inputPNumber, arrLabel, 1, true, 'Invalid phone number. Please input your valid phone number!');
        return false;
    }

    for (let i = 0; i < arrInput.length; i++) {
        if (arrInput[i].trim() === '') {
            return false;
        }
    }

    // alertSuccess(textName, textEmail, textPNumber, textInterest);
}


// function alertSuccess(name, email, pNumber, interest) {
//     var modal = document.getElementById('alert-success');
//     var dataName = document.getElementById('data-name');
//     var dataEmail = document.getElementById('data-email');
//     var dataPNumber = document.getElementById('data-pNumber');
//     var dataInterest = document.getElementById('data-interest');


//     modal.style.display = 'block';
//     dataName.textContent = name;
//     dataEmail.textContent = email;
//     dataPNumber.textContent = pNumber;
//     dataInterest.textContent = interest;
// }

// function closeAlertSuccess() {
//     var modal = document.getElementById('alert-success');
//     modal.style.display = 'none';

//     document.getElementById("form").reset();
// }

function isNameValid(nameValue) {
    const isNameValid = /^[a-zA-Z0-9\s'-]+$/;
    return isNameValid.test(nameValue);
}

function isEmailValid(emailValue) {
    const isEmailValid = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/;
    return isEmailValid.test(emailValue);
}

function isPNumberValid(pNumberValue) {
    const isPNumberValid = /(62|\+62|08).{8}/;
    return isPNumberValid.test(pNumberValue);
}

document.addEventListener('DOMContentLoaded', function () {
    const arrLabel = Array.from(document.querySelectorAll('.errorMessage'));
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputPNumber = document.getElementById('pNumber');

    inputName.addEventListener('input', function () {
        const nameValue = inputName.value.trim();
        if (nameValue.length > 30 || !isNameValid(nameValue)) {
            if (nameValue.length > 30) {
                setFormError(inputName, arrLabel, 0, true, 'Too many character. Please input less than 30 character of name!');
            } else {
                setFormError(inputName, arrLabel, 0, true, 'Ilegal character found. Please input only letters and number!');
            }
        } else {
            setFormError(inputName, arrLabel, 0, false, '');
        }
    });

    inputEmail.addEventListener('input', function () {
        const emailValue = inputEmail.value.trim();
        if (!isEmailValid(emailValue)) {
            setFormError(inputEmail, arrLabel, 1, true, 'Invalid email address. Please input your valid email address!');
        } else {
            setFormError(inputEmail, arrLabel, 1, false, '');
        }
    });

    inputPNumber.addEventListener('input', function () {
        const pNumberValue = inputPNumber.value.trim();
        if (!isPNumberValid(pNumberValue)) {
            setFormError(inputPNumber, arrLabel, 2, true, 'Invalid phone number. Please input your valid phone number!');
        } else {
            setFormError(inputPNumber, arrLabel, 2, false, '');
        }
    });
});

function setFormError(input, arrLabel, index, condition, msg) {
    if (condition) {
        input.style.borderColor = 'rgb(161, 22, 22)';
        input.style.outline = '1px solid rgb(161, 22, 22)';
        arrLabel[index].textContent = msg;
        arrLabel[index].style.display = 'block';
    } else {
        input.style.borderColor = '#29323D';
        input.style.outline = '1px solid #29323D';
        arrLabel[index].style.display = 'none';
    }
}