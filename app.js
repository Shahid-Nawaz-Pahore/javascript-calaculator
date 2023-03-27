(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let del = document.querySelector('.btn-delete');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            let lastChar = screen.value.charAt(screen.value.length - 1);
            if (value.match(/[\+\-\*\/\.]/) && lastChar.match(/[\+\-\*\/\.]/)) {
                return;
            }

            screen.value += value;
        })
    });

    equal.addEventListener('click', function() {
        if (screen.value === '') {
            screen.value = "please enter";
        } else {
            let answer = eval(screen.value);

            if (isNaN(answer)) {
                screen.value = "Invalid input";
            } else {
                screen.value = answer;
            }
        }
    });

    clear.addEventListener('click', function() {
        screen.value = "";
    });

    del.addEventListener('click', function() {
        screen.value = screen.value.toString().slice(0, -1);
    });
})();