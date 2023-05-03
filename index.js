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
        // return { qrCode, width };
        // return { width };
    } catch (error) {
        console.error(error);
        throw new Error('Error generating QR code');
    }
};

module.exports = { generateQRCode };



