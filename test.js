const QRCode = require('qrcode');
const { generateQRCode } = require("./index");
// import { generateQRCode } from "./QR-code-Generator/index.js";


describe('QR code generator', () => {
    test('generateQRCode generates a valid QR code', async () => {
        const url = 'https://www.youtube.com/';
        const qrCode = await generateQRCode(url);
        const qrCodeData = await QRCode.toDataURL(url);
        expect(qrCode).toEqual(qrCodeData);
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

    test('generateQRCode generates a QR code with correct error correction level', async () => {
        const url = 'https://www.youtube.com/';
        const qrCode = await generateQRCode(url, { errorCorrectionLevel: 'H' });
        expect(qrCode.modules[0][0]).toBe(true);
    });

    test('generateQRCode generates a QR code with correct border', async () => {
        const url = 'https://www.youtube.com/';
        const qrCode = await generateQRCode(url, { border: 10 });
        expect(qrCode.modules[0][0]).toBe(false);
        expect(qrCode.modules[10][10]).toBe(true);
    });

    test('generateQRCode generates a QR code with correct color', async () => {
        const url = 'https://www.youtube.com/';
        const qrCode = await generateQRCode(url, { color: { dark: '#000000', light: '#FFFFFF' } });
        const qrCodeData = await QRCode.toDataURL(url, { color: { dark: '#000000FF', light: '#FFFFFFFF' } });
        expect(qrCode).toEqual(qrCodeData);
    });
});
