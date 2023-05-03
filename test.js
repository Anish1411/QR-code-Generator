const QRCode = require('qrcode');
const { generateQRCode } = require("./index.js");

describe('QR code generator', () => {
    test('generateQRCode generates a valid QR code', async () => {
        const url = 'https://www.youtube.com/';
        const qrCodeObj = await generateQRCode(url);
        const qrCodeData = await QRCode.toDataURL(url, { width: qrCodeObj.width, height: qrCodeObj.height });
        const expectedQRCode = qrCodeObj.qrCode;
        expect(expectedQRCode).toEqual(qrCodeData);
    });

    test('generateQRCode throws an error for invalid input', async () => {
        await expect(generateQRCode()).rejects.toThrow();
        await expect(generateQRCode('')).rejects.toThrow();
        await expect(generateQRCode(null)).rejects.toThrow();
    });

    test('generateQRCode generates a QR code with correct dimensions', async () => {
        const url = 'https://www.youtube.com/';
        const qrCode = await generateQRCode(url, { width: 256 });
        expect(qrCode.width).toBe(256);
        expect(qrCode.height).toBe(256);
    });
});
