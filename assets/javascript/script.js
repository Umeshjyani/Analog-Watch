let hr = document.querySelector("#hour");
let min = document.querySelector("#minute");
let sec = document.querySelector("#second");

function DisplayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    console.log(hh + " " + mm + " " + ss);

    let hrR = hh * 30 + mm / 2;
    let minR = mm * 6;
    let secR = ss * 6;
    console.log(hrR + " " + minR + " " + secR);

    hr.style.transform = `rotate(${hrR}deg)`;
    min.style.transform = `rotate(${minR}deg)`;
    sec.style.transform = `rotate(${secR}deg)`;
}
DisplayTime();
setInterval(() => {
    DisplayTime()
}, 1000);