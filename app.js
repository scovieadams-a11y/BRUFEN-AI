// Dynamic Interest & Days Calculator Context
document.getElementById('calc-amount')?.addEventListener('input', runCalculator);
document.getElementById('calc-tier')?.addEventListener('change', runCalculator);

function runCalculator() {
    const amount = parseFloat(document.getElementById('calc-amount').value) || 0;
    const tier = document.getElementById('calc-tier').value;
    const outputElement = document.querySelector('.calc-output');
    
    if (amount <= 0) {
        outputElement.textContent = "Please enter a valid deposit amount.";
        return;
    }
    
    // Safety algorithm logic
    let investmentDays = 30 + (tier * 5); 
    outputElement.textContent = `Projected Return Window: ${investmentDays} Days [No Loss Framework Enabled]`;
}

// Client-Side DRM Anti-Screenshot & Copy Protections
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('Security Policy Enforced: Right-click context menus are disabled.');
});

document.addEventListener('keydown', (e) => {
    // Blocks F12 (DevTools)
    if (e.key === "F12") {
        e.preventDefault();
        return false;
    }
    // Blocks Ctrl+Shift+I, Ctrl+Shift+C (DevTools hotkeys)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C')) {
        e.preventDefault();
        return false;
    }
    // Blocks Ctrl+S (Save page layout)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }
    // Blocks Ctrl+P (Print to PDF extraction bypass)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        alert('Printing or PDF conversion is strictly prohibited by system DRM rules.');
        e.preventDefault();
        return false;
    }
});

// Detects Print Screen key release to wipe clipboard or hide view
window.addEventListener('keyup', (e) => {
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Screenshot attempts are blocked.');
    }
});
  
