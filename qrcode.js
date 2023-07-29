const qr_input = document.querySelector('.qr-input');
const qr_btn = document.querySelector('.generate-qr');
const img = document.querySelector('#qr-image');

qr_btn.addEventListener('click', () => {
    const inputValue = qr_input.value;
    const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    img.src = api;
    img.alt = "QR Code";
});