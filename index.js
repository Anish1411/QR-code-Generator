// const qrcode = require('qrcode-generator');

// const textInput = document.getElementById('text-input');
// const generateButton = document.getElementById('generate-button');
// const qrCodeCanvas = document.getElementById('qr-code');

// generateButton.addEventListener('click', () => {
//     const text = textInput.value;
//     if (text) {
//         const qr = qrcode(0, 'M');
//         qr.addData(text);
//         qr.make();
//         qrCodeCanvas.width = qr.getModuleCount() * 10;
//         qrCodeCanvas.height = qr.getModuleCount() * 10;
//         const ctx = qrCodeCanvas.getContext('2d');
//         for (let row = 0; row < qr.getModuleCount(); row++) {
//             for (let col = 0; col < qr.getModuleCount(); col++) {
//                 ctx.fillStyle = qr.isDark(row, col) ? 'black' : 'white';
//                 ctx.fillRect(col * 10, row * 10, 10, 10);
//             }
//         }
//     }
// });

// import qrcode from 'qrcode';
const qrcode = require('qrcode');

const generateQRCode = async (url) => {
    try {
        const qrCode = await qrcode.toDataURL(url);
        return qrCode;
    } catch (error) {
        console.error(error);
        throw new Error('Error generating QR code');
    }
};

document.getElementById('generate').addEventListener('click', async () => {
    const text = document.getElementById('text').value;
    const qrCode = await generateQRCode(text);
    const qrCodeImage = new Image();
    qrCodeImage.src = qrCode;
    document.getElementById('qrcode').appendChild(qrCodeImage);
});

export { generateQRCode };
