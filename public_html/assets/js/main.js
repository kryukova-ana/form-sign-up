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
    console.log("Отправка запроса");
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var req = new XMLHttpRequest();
    req.open('POST', php, true);
    req.onload = function() {
        if (req.status >= 200 && req.status < 400) {
            json = JSON.parse(this.response); // Ебанный internet explorer 11
            console.log(json);

            // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
            if (json.result == "success") {
                // Если сообщение отправлено
                alert("Сообщение отправлено");
            } else {
                // Если произошла ошибка
                alert("Ошибка. Сообщение не отправлено");
            }
            // Если не удалось связаться с php файлом
        } else {alert("Ошибка сервера. Номер: "+req.status);}};

// Если не удалось отправить запрос. Стоит блок на хостинге
    req.onerror = function() {alert("Ошибка отправки запроса");};
    req.send(new FormData(event.target));
}