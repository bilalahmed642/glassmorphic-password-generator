// Global State Management
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
let passwordHistory = JSON.parse(localStorage.getItem("passHistory")) || [];

// Boot Tasks
document.addEventListener("DOMContentLoaded", () => {
    lengthValue.textContent = lengthSlider.value;
    renderHistory();
});

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

/**
 * Generates a password securely via Web Crypto API 
 */
function generate() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characterPool = "";
    let varietiesChecked = 0;

    if (document.getElementById("uppercase").checked) { characterPool += uppercaseChars; varietiesChecked++; }
    if (document.getElementById("lowercase").checked) { characterPool += lowercaseChars; varietiesChecked++; }
    if (document.getElementById("numbers").checked) { characterPool += numberChars; varietiesChecked++; }
    if (document.getElementById("symbols").checked) { characterPool += symbolChars; varietiesChecked++; }

    // Fallback UI validation
    if (characterPool === "") {
        document.getElementById("password").value = "Select an option!";
        updateStrengthMeter(0, 0);
        return;
    }

    const passwordLength = parseInt(lengthSlider.value);
    let password = "";

    // LEVEL 2 UPGRADE: Secure Cryptographic Random Value Array Generation
    const randomBuffer = new Uint32Array(passwordLength);
    window.crypto.getRandomValues(randomBuffer);

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = randomBuffer[i] % characterPool.length;
        password += characterPool[randomIndex];
    }

    // Output and trigger analysis trackers
    document.getElementById("password").value = password;
    updateStrengthMeter(passwordLength, varietiesChecked);
    saveToHistory(password);
}

/**
 * LEVEL 2 UPGRADE: Dynamic Metric Rules Strength Computation Engine
 */
function updateStrengthMeter(length, typesCount) {
    const strengthBar = document.getElementById("strengthBar");
    const strengthText = document.getElementById("strengthText");
    
    let score = 0;

    // Calculate score weights based on parameters
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (length >= 16) score++;
    if (typesCount >= 2) score++;
    if (typesCount >= 4) score++;

    if (length === 0 || typesCount === 0) score = 0;

    // Apply color states & dimension percentages smoothly
    switch (score) {
        case 0:
            strengthBar.style.width = "0%";
            strengthText.textContent = "None";
            strengthText.style.color = "rgba(255,255,255,0.4)";
            break;
        case 1:
        case 2:
            strengthBar.style.width = "33%";
            strengthBar.style.backgroundColor = "#ef4444"; // Red
            strengthText.textContent = "Weak ⚠️";
            strengthText.style.color = "#ef4444";
            break;
        case 3:
        case 4:
            strengthBar.style.width = "66%";
            strengthBar.style.backgroundColor = "#f59e0b"; // Orange/Yellow
            strengthText.textContent = "Medium 🛠️";
            strengthText.style.color = "#f59e0b";
            break;
        case 5:
            strengthBar.style.width = "100%";
            strengthBar.style.backgroundColor = "#10b981"; // Emerald Green
            strengthText.textContent = "Strong 💪";
            strengthText.style.color = "#10b981";
            break;
    }
}

/**
 * LEVEL 2 UPGRADE: Persistent LocalStorage Caching Mechanism
 */
function saveToHistory(newPassword) {
    // Unshift adds new elements to the top of the array
    passwordHistory.unshift(newPassword);
    
    // Truncate to maximum list capacity constraint (last 3 items)
    if (passwordHistory.length > 3) {
        passwordHistory.pop();
    }

    localStorage.setItem("passHistory", JSON.stringify(passwordHistory));
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";

    if (passwordHistory.length === 0) {
        historyList.innerHTML = `<li class="empty-history">No generated strings cached yet.</li>`;
        return;
    }

    passwordHistory.forEach(pass => {
        const li = document.createElement("li");
        li.className = "history-item";
        li.innerHTML = `<span>${pass}</span>`;
        historyList.appendChild(li);
    });
}

function copypassword() {
    const passwordField = document.getElementById("password");
    const password = passwordField.value;

    if (!password || password === "Select an option!") return;

    navigator.clipboard.writeText(password).then(() => {
        showToast();
    });
}

function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    
    clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}
