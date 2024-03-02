const Jimp = require('jimp');

/**
 * Resize and crop an image to fit within a 640x480 frame.
 * @param {string} imagePath - The path to the image to resize.
 * @returns {Promise<Jimp>} A promise that resolves with the resized and cropped image.
 */
const resizeImage = async (imagePath) => {
    try {
        const image = await Jimp.read(imagePath);

        const width = image.getWidth();
        const height = image.getHeight();

        let newWidth, newHeight;
        if (width / height > 640 / 480) {
            newWidth = 640;
            newHeight = Jimp.AUTO;
        } else {
            newWidth = Jimp.AUTO;
            newHeight = 480;
        }

        await image.resize(newWidth, newHeight);

        const x = (image.getWidth() - 640) / 2;
        const y = (image.getHeight() - 480) / 2;

        await image.crop(x, y, 640, 480);

        // await image.writeAsync('resized_image.jpg');

        console.log('Image resized and cropped successfully.');

        return image;
    } catch (error) {
        console.error('Error:', error);
    }
};

exports.resizeImage = resizeImage;
