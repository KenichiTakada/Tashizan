// script.js

document.addEventListener('DOMContentLoaded', () => {
    const topButtons = document.querySelectorAll('#top-buttons .btn');
    const bottomButtons = document.querySelectorAll('#bottom-buttons .btn');
    const checkAnswerBtn = document.getElementById('check-answer-btn');

    topButtons.forEach(button => {
        button.addEventListener('click', () => toggleButton(button, 'top'));
    });

    bottomButtons.forEach(button => {
        button.addEventListener('click', () => toggleButton(button, 'bottom'));
    });

    checkAnswerBtn.addEventListener('click', checkAnswer);
});

function toggleButton(button, section) {
    if (section === 'top') {
        button.classList.toggle('active-top');
    } else {
        button.classList.toggle('active-bottom');
    }
    updateNumbers(section);
    resetResult();
    updateNumberTable();
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

function updateNumberTable() {
    const topCount = parseInt(document.getElementById('num1').innerText);
    const bottomCount = parseInt(document.getElementById('num2').innerText);
    const totalCount = topCount + bottomCount;
    
    const numberCells = document.querySelectorAll('.number-cell');
    numberCells.forEach((cell, index) => {
        cell.classList.remove('active-top', 'active-bottom');
        if (index < topCount) {
            cell.classList.add('active-top');
        } else if (index < totalCount) {
            cell.classList.add('active-bottom');
        }
    });
}
