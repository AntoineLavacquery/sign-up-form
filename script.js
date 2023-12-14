const passInput = document.querySelector('#pass');
const cpassInput = document.querySelector('#cpass');

cpassInput.addEventListener('input', function () {
    const passValue = passInput.value;
    const cpassValue = this.value;

    if (passValue !== cpassValue) {
        passInput.setCustomValidity("Passwords don't match");
        this.setCustomValidity("Passwords don't match");
    } else {
        passInput.setCustomValidity("");
        this.setCustomValidity("");
    }
});
