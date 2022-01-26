function realtime() {
    var hr = document.getElementById('hrs');
    var mint = document.getElementById('mint');
    var sec = document.getElementById('sec');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hr.innerHTML = h;
    mint.innerHTML = m;
    sec.innerHTML = s;
}

var interval = setInterval(realtime, 0);
