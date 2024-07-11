// script.js

function toggleButton(button, section) {
    button.classList.toggle('active');
    updateNumbers(section);
}

function updateNumbers(section) {
    let count = 0;
    const buttons = document.querySelectorAll(`#${section}-buttons .btn`);
    buttons.forEach(button => {
        if (button.classList.contains('active')) {
            count++;
        }
    });
    
    if (section === 'top') {
        document.getElementById('num1').innerText = count;
    } else {
        document.getElementById('num2').innerText = count;
    }
}

function checkAnswer() {
    const num1 = parseInt(document.getElementById('num1').innerText);
    const num2 = parseInt(document.getElementById('num2').innerText);
    const result = num1 + num2;
    document.getElementById('result').innerText = result;
}
