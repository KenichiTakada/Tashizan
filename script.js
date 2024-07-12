// script.js

function toggleButton(button, section) {
    if (section === 'top') {
        button.classList.toggle('active-top');
    } else {
        button.classList.toggle('active-bottom');
    }
    updateNumbers(section);
    resetResult();
}

function updateNumbers(section) {
    let count = 0;
    const buttons = document.querySelectorAll(`#${section}-buttons .btn`);
    buttons.forEach((button, index) => {
        const span = button.querySelector('span');
        if (button.classList.contains(section === 'top' ? 'active-top' : 'active-bottom')) {
            count++;
            if (!span) {
                const numberSpan = document.createElement('span');
                numberSpan.textContent = count;
                button.appendChild(numberSpan);
            } else {
                span.textContent = count;
            }
        } else if (span) {
            button.removeChild(span);
        }
    });
    
    if (section === 'top') {
        document.getElementById('num1').innerText = count;
    } else {
        document.getElementById('num2').innerText = count;
    }
}

function resetResult() {
    document.getElementById('result').innerText = '?';
}

function checkAnswer() {
    const num1 = parseInt(document.getElementById('num1').innerText);
    const num2 = parseInt(document.getElementById('num2').innerText);
    const result = num1 + num2;
    document.getElementById('result').innerText = result;
}
