document.querySelector(".intensity").textContent = localStorage.getItem("intensity") + " / 10";

switch(localStorage.getItem("frequency")) {
    case 'onceEveryMonth':
        document.querySelector(".frequency").textContent = "Once Every Month";
        break;
    case 'onceEveryWeek':
        document.querySelector(".frequency").textContent = "Once Every Week";
        break;
    case 'onceDaily':
        document.querySelector(".frequency").textContent = "Once Daily";
        break;
    case 'onceEveryOtherMonth':
        document.querySelector(".frequency").textContent = "Once Every Other Month";
        break;
}

document.querySelector(".medicine").textContent = localStorage.getItem("takingMedicine")[0].toUpperCase() +
                                                    localStorage.getItem("takingMedicine").slice(1);

document.querySelector(".burden").textContent = localStorage.getItem("daysMissed") + " Days";

document.querySelector(".type").textContent = localStorage.getItem("painType")[0].toUpperCase() +
                                                localStorage.getItem("painType").slice(1);
