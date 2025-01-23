let $ = document
//* Time ELements
const hourElem = $.querySelector("#hour")
const minuteElem = $.querySelector("#minute")
const secondElem = $.querySelector("#seconds")
//* Codes 
setInterval(function () {
    //* Times 
    let nowTime = new Date()
    let hour = nowTime.getHours()
    let minute = nowTime.getMinutes()
    let second = nowTime.getSeconds()
    //* Set Time 
    if (hour < 10) {
        hour = "0" + hour
    }
    if (minute < 10) {
        minute = "0" + minute
    } 
    if (second < 10) {
        second = "0" + second
    } 
    hourElem.innerHTML = hour
    minuteElem.innerHTML = minute
    secondElem.innerHTML = second
}, 1000);