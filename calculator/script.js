let currentInput = '';

function press(num) {
    if(currentInput === '' && num === '0') {
        return; // Prevent adding multiple leading zeros
    }
    currentInput += num;
    document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').innerText = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').innerText = currentInput;
    } catch (e) {
        document.getElementById('display').innerText = 'Error';
    }
}
