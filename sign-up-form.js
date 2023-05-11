pass1 = document.querySelector('input[id="pass_1"]');
pass2 = document.querySelector('input[id="pass_2"]');

function checkPassMatch() {
    if (pass1.value !== pass2.value) {
        pass1.className = "error"
        pass2.className = "error"
    } else {
        pass1.className = ""
        pass2.className = ""
    }
}

pass1.addEventListener('input', (event) => checkPassMatch());
pass2.addEventListener('input', (event) => checkPassMatch());