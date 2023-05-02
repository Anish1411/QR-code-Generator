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
// const qrcode = require('qrcode');

// const generateQRCode = async (url) => {
//     try {
//         const qrCode = await qrcode.toDataURL(url);
//         console.log(qrCode);
//         return qrCode;
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error generating QR code');
//     }
// };

// document.getElementById('generate').addEventListener('click', async () => {
//     const text = document.getElementById('text').value;
//     const qrCode = await generateQRCode(text);
//     const qrCodeImage = new Image();
//     console.log(qrCodeImage);
//     qrCodeImage.src = qrCode;
//     document.getElementById('qrcode').appendChild(qrCodeImage);
// });

// // export { generateQRCode };
// module.exports = { generateQRCode }



// const qrcode = require('qrcode');

// const generateQRCode = async (url) => {
//     try {
//         const qrCode = await qrcode.toDataURL(url);
//         console.log(qrCode);
//         return qrCode;
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error generating QR code');
//     }
// };

// document.getElementById('generate').addEventListener('click', async () => {
//     const text = document.getElementById('text').value;
//     const qrCode = await generateQRCode(text);
//     const qrCodeImage = new Image();
//     console.log(qrCodeImage);
//     qrCodeImage.src = qrCode;
//     document.getElementById('qrcode').appendChild(qrCodeImage);
// });

// module.exports = { generateQRCode };






// import qrcode from 'qrcode';
// const qrcode = require('qrcode');


// export const generateQRCode = async (url) => {
//     try {
//         const qrCode = await qrcode.toDataURL(url);
//         console.log(qrCode);
//         return qrCode;
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error generating QR code');
//     }
// };

// document.getElementById('generate').addEventListener('click', async () => {
//     const text = document.getElementById('text').value;
//     const qrCode = await generateQRCode(text);
//     const qrCodeImage = new Image();
//     console.log(qrCodeImage);
//     qrCodeImage.src = qrCode;
//     document.getElementById('qrcode').appendChild(qrCodeImage);
// });




// index.js
// 3 pass and 3 fail
// const qrcode = require('qrcode');

// const generateQRCode = async (url) => {
//     try {
//         const qrCode = await qrcode.toDataURL(url);
//         console.log(qrCode);
//         return { qrCode, width: 256, height: 256 };
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error generating QR code');
//     }
// };

// module.exports = { generateQRCode };

//2 and 3rd test case passed
// const qrcode = require('qrcode');

// const generateQRCode = async (url) => {
//     try {
//         const qrCode = await qrcode.toDataURL(url);
//         console.log(qrCode);
//         return { qrCode, width: 256, height: 256 };
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error generating QR code');
//     }
// };
// module.exports = { generateQRCode };




// no test pass
// const generateQRCode = async (url, options = {}) => {
//     try {
//         const { width = 256, height = 256, ...rest } = options;
//         const qrCode = await QRCode.toDataURL(url, { width, height, ...rest });
//         return { data: qrCode, width, height };
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error generating QR code');
//     }
// };
// module.exports = { generateQRCode };

//3 test case run 1,2,4
// const qrcode = require('qrcode');

// const generateQRCode = async (url, options = {}) => {
//     const { errorCorrectionLevel = 'M', ...rest } = options;
//     try {
//         const qrCode = await qrcode.toDataURL(url, { errorCorrectionLevel, ...rest });
//         console.log(qrCode);
//         return qrCode;
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error generating QR code');
//     }
// };

// module.exports = { generateQRCode };

// const qrcode = require('qrcode');

// const generateQRCode = async (url, options = {}) => {
//     const { errorCorrectionLevel = 'M', ...rest } = options;
//     try {
//         const qrCode = await qrcode.toDataURL(url, { errorCorrectionLevel, ...rest });
//         console.log(qrCode);
//         return { qrCode, width: 256, height: 256 };
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error generating QR code');
//     }
// };

// module.exports = { generateQRCode };

// const qrcode = require('qrcode');

// const generateQRCode = async (url, options = {}) => {
//     const { errorCorrectionLevel = 'M', ...rest } = options;
//     try {
//         const qrCode = await qrcode.toDataURL(url, { errorCorrectionLevel, ...rest });
//         console.log(qrCode);
//         const width = 256;
//         const height = 256;
//         return `${qrCode};${width};${height}`;
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error generating QR code');
//     }
// };

// module.exports = { generateQRCode };

//1 2 3
const qrcode = require('qrcode');

const generateQRCode = async (url, options = {}) => {
    if (!url) {
        throw new Error('Please provide a valid URL to generate QR code');
    }

    const { errorCorrectionLevel = 'M', width = 256, height = 256, color = {} } = options;

    try {
        const qrCode = await qrcode.toDataURL(url, {
            errorCorrectionLevel,
            width,
            height,
            color,
        });
        return { qrCode, width, height, color };
    } catch (error) {
        console.error(error);
        throw new Error('Error generating QR code');
    }
};

module.exports = { generateQRCode };




// const qrcode = require('qrcode');

// const generateQRCode = async (url, options) => {
//     try {
//         const qrCode = await qrcode.toDataURL(url, options);
//         console.log(qrCode);
//         return { data: qrCode, width: options.width }; // add width property
//     } catch (error) {
//         console.error(error);
//         throw new Error('Error generating QR code');
//     }
// };

// module.exports = { generateQRCode };

