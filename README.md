# 🔑 Cryptographic Glassmorphic Password Generator

A lightweight, cryptographically secure, and visually stunning web application that generates robust custom random passwords instantly. Built using pure HTML5, modern CSS3 (Glassmorphism), and Vanilla JavaScript (ES6+).

## ✨ Key Features

*   **⚡ Web Crypto API Security:** Replaced standard pseudo-random math loops with `window.crypto.getRandomValues()` for genuine mathematical cryptographic randomness.
*   **🎨 Glassmorphic UI:** Features a high-fidelity translucent layout with animated background gradients and custom components.
*   **📊 Real-Time Strength Meter:** Dynamically computes text alerts and color-coded status tracks based on string character complexity and length.
*   **🎚️ Dynamic Length Slider:** Allows users to slide instantly between 8 and 32 password characters.
*   **⚙️ Rule Toggles:** Offers checkboxes to selectively include or exclude Uppercase, Lowercase, Numbers, and Special Symbols.
*   **💾 LocalStorage Password History:** Automatically preserves and renders a cached feed of the last 3 generated strings right inside the UI using browser storage.
*   **📋 Toast Notifications:** Employs a custom-engineered CSS alert banner that floats from the bottom of the viewport when copying items.

## 🚀 Live Demo

Check out the live project here: **https://github.com/bilalahmed642/glassmorphic-password-generator**

## 🛠️ Built With

*   **HTML5** - Semantic structure and custom form components
*   **CSS3** - Backdrop blur filters, keyframe animation engine, and flexible layout variables
*   **JavaScript (ES6+)** - Dynamic DOM tracking, browser localStorage, and native Web Crypto APIs

## 📂 Project Structure

```text
├── index.html       # Application structural markup
├── style.css        # Glassmorphic themes and animation parameters
└── app.js           # Cryptographic generator and history engine
```

## ⚙️ How to Run Locally

Follow these simple steps to host a copy of this repository on your personal machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```
2. **Navigate into the folder context:**
   ```bash
   cd YOUR_REPOSITORY_NAME
   ```
3. **Launch the web application:**
   Double-click the `index.html` file to boot the tool inside your system's default internet browser.
