function showPass() {
    var y = document.getElementById("newImg");

    var x = document.getElementById("user-password");
    if (x.type === "password") {
        x.type = "text";
        y.src ='../../assets/img/open-eye.svg';
    } else {
        x.type = "password";
        y.src= "../../assets/img/eye-off.svg";
    }
}
