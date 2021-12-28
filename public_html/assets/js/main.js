function showPass() {
    var y = document.getElementById("newImg");

    var x = document.getElementById("user-password");
    if (x.type === "password") {
        x.type = "text";
        y.src ='./assets/img/open-eye.svg';
    } else {
        x.type = "password";
        y.src= "./assets/img/eye-off.svg";
    }
}

function send(event, php){
    event.preventDefault();
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
// Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response);
            if (json.result === "success") {
                alert("Сообщение отправлено");
            } else {
                alert("Ошибка. Сообщение не отправлено");
            }
        } else {alert("Ошибка сервера. Номер: "+req.status);}};
    event.preventDefault=false;
    return false;
}