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

let form1 = document.forms["form-1"];
let form2 = document.forms["form-2"];
let form3 = document.forms["form-3"];

let daysMissed = document.querySelector("#daysMissed");

var event = new Event('change');

if(form1) {
    form1.addEventListener('submit', function(e) {
        e.preventDefault();
        localStorage.setItem("intensity", form1["intensity"].value);
        localStorage.setItem("frequency", form1["frequency"].value);
        localStorage.setItem("frequency-desc", form1["frequency-desc"].value);
        window.location.href="form-2.html"
    });
}

if(form2) {

    form2["takingMedicine"].value = localStorage.getItem("takingMedicine");
    form2["daysMissed"].value = localStorage.getItem("daysMissed");

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