const submit = document.querySelector('#submit');
const refresh = document.querySelector('#refresh');
const captchaText = document.querySelector('#captcha-display');
const captchaInput = document.querySelector('#captcha');

const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    return captcha;
}

captchaText.textContent = generateCaptcha();

submit.addEventListener('click', () => {
    if (captchaInput.value === captchaText.textContent) {
        alert('Captcha Matched');
    } else {
        alert('Captcha Not Matched');
    }
});

refresh.addEventListener('click', () => {
    captchaText.textContent = generateCaptcha();
});

window.addEventListener('DOMContentLoaded', () => {
    captchaText.textContent = generateCaptcha();
});