function showHead() {
    document.querySelector('#shoulder').style.display = 'none';
    document.querySelector('#head').style.display = 'block';
    document.querySelector('#confirm').style.display = 'block';
}

function showShoulders() {
    document.querySelector('#head').style.display = 'none';
    document.querySelector('#shoulder').style.display = 'block';
    document.querySelector('#confirm').style.display = 'block';
}

function closeModal() {
    document.querySelector('.modal').style.display = 'none';
}

function showModal() {
    document.querySelector('.modal').style.display = 'block';
}

function goToResults() {
    closeModal();
    window.location.href="form-4.html";
}

let form1 = document.forms["form-1"];
let form2 = document.forms["form-2"];
let form3 = document.forms["form-3"];
let registerForm = document.forms["register"];
let loginForm = document.forms["login"];

let daysMissed = document.querySelector("#daysMissed");

var event = new Event('change');

if(form1) {

    form1.addEventListener("change", () => {
        if(form1.checkValidity()){

            document.querySelector("#continueBtn").removeAttribute("disabled");
        }
    });

    form1.addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem("intensity", form1["intensity"].value);
        localStorage.setItem("frequency", form1["frequency"].value);
        localStorage.setItem("frequency-desc", form1["frequency-desc"].value);
        window.location.href="form-2.html"
    });
}

if(form2) {

    daysMissed.addEventListener("change", () => {
        form2.dispatchEvent(event);
    });

    form2.addEventListener("change", () => {
        if(localStorage.getItem("daysMissed") != null &&
            localStorage.getItem("painType") != null &&
            localStorage.getItem("takingMedicine") != null) {

            document.querySelector("#continueBtn").removeAttribute("disabled");
        }
    });

    form2.addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem("takingMedicine", form2["takingMedicine"].value);
        localStorage.setItem("daysMissed", form2["daysMissed"].value);
        window.location.href="form-3.html"
    });
}

if(form3) {

    form3.addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem("painType", form3["symptom"].value);
        window.location.href="form-2.html";
    });
}

if(registerForm) {

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if(registerForm["password"].value == registerForm["passwordConfirmation"].value) {
            sessionStorage.setItem("username", registerForm["username"].value);
            sessionStorage.setItem("password", registerForm["password"].value);
            sessionStorage.setItem("birthDate", registerForm["birthDate"].value);

            window.location.href="index.html";
        } else {
            document.querySelector('.modal').style.display = 'block';
        }
    })

}

if(loginForm) {

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if(loginForm["password"].value == sessionStorage.getItem("password") && 
            loginForm["username"].value == sessionStorage.getItem("username")) {

            if(loginForm["rememberme"].checked) {
                localStorage.setItem("username", loginForm["username"].value);
                localStorage.setItem("password", loginForm["password"].value);
            }
            
            window.location.href="form-1.html";
        } else {
            document.querySelector('.modal').style.display = 'block';
        }
    })

}