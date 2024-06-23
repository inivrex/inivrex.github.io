// https://script.google.com/macros/s/AKfycbzz8KTVxnJSyjwFw1yCg1VzNRl5neEFdMVwrz_d4qTZH-rL89ZlXyzsT6gkP8jrBb-X/exec

// Global Varibles 
const QuerySubmissionResult = document.getElementById("QuerySubmissionResult");
const querySubResuTxt = document.getElementById("querySubResuTxt");
const QuerySubLoadWin = document.getElementById("QuerySubLoadWin");
const fname = document.getElementById("fname");
const fmail = document.getElementById("fmail");
const fque = document.getElementById("fque");
const fabout = document.getElementById("fabout");
const recaptchaID = document.getElementById("recaptchaID");
const queSbmtBtn = document.getElementById("queSbmtBtn");
const querIn = document.getElementsByClassName('querIn');


const scriptURL = 'https://script.google.com/macros/s/AKfycbzz8KTVxnJSyjwFw1yCg1VzNRl5neEFdMVwrz_d4qTZH-rL89ZlXyzsT6gkP8jrBb-X/exec'
const form = document.forms['google-sheet']

// Function Here 
function FinalSubThankx() {
    QuerySubmissionResult.style.display = "flex";
    QuerySubLoadWin.style.display = "none";
    setTimeout(() => {
        QuerySubmissionResult.style.display = "none";
    }, 3000);
    for (let i = 0; i < querIn.length; i++) {
        querIn[i].value = "";
    }
    grecaptcha.reset();
}

//Check If user written his/her details
fname.addEventListener('keyup', () => {
    if (fname.value.trim() !== "") {
        fname.style.border = 'transparent';
        fname.setCustomValidity(''); // Clear any previous custom error message
    } else {
        fname.style.border = '2px solid red';
    }
})
fmail.addEventListener("keyup", () => {
    if (fmail.value.trim() !== "") {
        fmail.style.outline = 'transparent';
        fmail.setCustomValidity(''); // Clear any previous custom error message
    } else {
        fmail.style.outline = '2px solid red';
    }
})
fque.addEventListener("keyup", () => {
    if (fque.value.trim() !== "") {
        fque.style.outline = 'transparent';
        fque.setCustomValidity(''); // Clear any previous custom error message
    } else {
        fque.style.outline = '2px solid red';
    }
})
fabout.addEventListener("keyup", () => {
    if (fabout.value.trim() !== "") {
        fabout.style.outline = 'transparent';
        fabout.setCustomValidity(''); // Clear any previous custom error message
    } else {
        fabout.style.outline = '2px solid red';
    }
})


queSbmtBtn.addEventListener("click", function () {
    let checkPass = 0;
    // Name Field Checking 
    if (fname.value.trim() !== "") { // Check if value contains non-whitespace characters
        fname.style.border = 'transparent';
        fname.setCustomValidity(''); // Clear any previous custom error message
        checkPass = 1;
    } else {
        checkPass = 0;
        fname.style.border = '2px solid red';
        fname.setCustomValidity('Enter Your Name Correctly.'); // Set custom error message
        fname.focus();
    }
    // Email Field Checking
    if (fmail.value.trim() !== "") { // Check if value contains non-whitespace characters
        fmail.style.outline = 'transparent';
        if (fname.style.border != '2px solid red') {
            checkPass = 2;
            fmail.setCustomValidity(''); // Clear any previous custom error message
        } else {
            fname.setCustomValidity('Enter Your Name Correctly.'); // Set custom error message
            fname.focus();
        }
    } else {
        if (fname.style.border != '2px solid red') {
            checkPass = 1;
            fmail.style.outline = '2px solid red';
            fmail.setCustomValidity('Enter your E-mail correctly.'); // Set custom error message
        } else {
            checkPass = 0;
        }
    }
    //Phone Number Field Checking
    if (fque.value.trim() !== "") {
        if (checkPass == 0) {
            fname.focus();
        } else if (checkPass == 1) {
            fmail.focus();
        } else if (checkPass == 2) {
            fque.style.border = 'transparent';
            fque.setCustomValidity(''); // Clear any previous custom error message
            checkPass = 3;
        }
    } else {
        if (checkPass == 0) {
            fname.focus();
        } else if (checkPass == 1) {
            fmail.focus();
        } else if (checkPass == 2) {
            fque.style.border = '2px solid red';
            fque.setCustomValidity('Enter your question corectly.') // Set custom error message
            fque.focus();
        }
    }
    if (fabout.value.trim() !== "") {
        if (checkPass == 0) {
            fname.focus();
        } else if (checkPass == 1) {
            fmail.focus();
        } else if (checkPass == 2) {
            fque.focus();
        } else if (checkPass == 3) {
            fabout.style.border = 'transparent';
            fabout.setCustomValidity(''); // Clear any previous custom error message
            checkPass = 4;
        }
    } else {
        if (checkPass == 0) {
            fname.focus();
        } else if (checkPass == 1) {
            fmail.focus();
        } else if (checkPass == 2) {
            fque.focus();
        } else if (checkPass == 3) {
            fabout.style.border = '2px solid red';
            fabout.setCustomValidity('Write more about your question.') // Set custom error message
            fabout.focus();
        }
    }
});





form.addEventListener('submit', e => {
    e.preventDefault();

    let captchaResponse = grecaptcha.getResponse();
    if (!captchaResponse > 0) {
        recaptchaID.classList.add('highLighter');
        setTimeout(() => {
            recaptchaID.classList.remove('highLighter');

        }, 1000);
    } else {
        queSbmtBtn.disabled = true;
        setTimeout(() => {
            queSbmtBtn.disabled = false;
        }, 3000);
        QuerySubLoadWin.style.display = "flex";
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => FinalSubThankx())
            .catch(error => querySubResuTxt.textContent = error.message)
    }

})
