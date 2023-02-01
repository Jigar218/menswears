function validateform() {
    var name = document.login.username.value; var password = document.login.password.value;
    // Do the validation Username   var digits = 0; // username do not have digits. 

    for (i = 0; i < name.length; i++) {
        if (name.charAt(i) >= "0" && name.charAt(i) <= "9") {
            digits = 1;
        }
    } if (digits == 1) {
        alert("Username should not have digits");
    } if (name == null || name == "") {
        alert("Name can't be blank");
    }

    // Do the validation for password 

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
    } pd = 0; pl = 0; pu = 0; for (i = 0; i < password.length; i++) {
        if (password.charAt(i) >= "0" && password.charAt(i) <= "9") {
            pd = 1;
        }
        if (password.charAt(i) >= "a" && password.charAt(i) <= "z") {
            pl = 1;
        } if (password.charAt(i) >= "A" && password.charAt(i) <= "Z") {
            pu = 1;
        }
    } if (pd == 0) {
        alert("Password should have atleast one digit");
    } if (pl == 0) {
        alert("Password should have atleast one lower case letter");
    } if (pu == 0) {
        alert("Password should have atleast one upper case letter");
    }
} function cancel() {
    alert("log in cancelled"); document.getElementById("ppi").innerHTML = "see you later!";
}
