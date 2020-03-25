var h = document.querySelector(".hour");
var m = document.querySelector(".minute");
var s = document.querySelector(".second");
var time = document.querySelector(".time")
var ss = 3600;

getTime();


setInterval(getTime, 1000);

function getTime() {

    var d = new Date();
    var dh = d.getHours() * 30;
    var dm = d.getMinutes() * 6;
    var ds = d.getSeconds() * 6;
    h.style.transform = 'rotate(' + dh + 'deg)';
    m.style.transform = 'rotate(' + dm + 'deg)';
    s.style.transform = 'rotate(' + ds + 'deg)';
    var hh = d.getHours();
    hh = hh < 10 ? '0' + hh : hh;
    var mm = d.getMinutes();
    mm = mm < 10 ? '0' + mm : mm;
    var ss = d.getSeconds();
    ss = ss < 10 ? '0' + ss : ss;
    var dd = d.getDay();

    if (dd == 0) {
        dd = '星期日'
    };
    if (dd == 1) {
        dd = '星期一'
    };
    if (dd == 2) {
        dd = '星期二'
    };
    if (dd == 3) {
        dd = '星期三'
    };
    if (dd == 4) {
        dd = '星期四'
    };
    if (dd == 5) {
        dd = '星期五'
    };
    if (dd == 6) {
        dd = '星期六'
    };
    console.log(dd);
    var aa = hh + ':' + mm + ':' + ss + '<br>' + dd
    time.innerHTML = aa
}