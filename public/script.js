let currentInput = "";

function appendInput(value) {
    const display = document.getElementById('display');
    
    // Prevent multiple operators or decimals in sequence
    if (['+', '-', '*', '/', '.'].includes(value)) {
        const lastChar = currentInput.slice(-1);
        if (['+', '-', '*', '/', '.'].includes(lastChar)) {
            return;
        }
    }
    
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById('display').value = "";
}

function deleteLast() {
    currentInput = currentInput.toString().slice(0, -1);
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        // Use Function constructor for a safer alternative to eval()
        // This converts the string (e.g., "2+2") into math
        const result = new Function('return ' + currentInput)();
        
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('display').value = "Error";
        currentInput = "";
    }
}
