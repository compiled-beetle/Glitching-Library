const Jimp = require('jimp');

/**
 * Split an image into its RGB channels.
 * @param {string} imagePath - The path to the image to split.
 * @returns {Promise<void>} A promise that resolves when the image has been split and saved.
 */
const splitRGBChannels = async (imagePath) => {
    try {
        const image = await Jimp.read(imagePath);

        const redChannel = image.clone().color([{ apply: 'red', params: [255] }]);
        const greenChannel = image.clone().color([{ apply: 'green', params: [255] }]);
        const blueChannel = image.clone().color([{ apply: 'blue', params: [255] }]);

        await Promise.all([
            redChannel.writeAsync('red_channel.jpg'),
            greenChannel.writeAsync('green_channel.jpg'),
            blueChannel.writeAsync('blue_channel.jpg')
        ]);

        console.log('RGB channels split and saved successfully.');
    } catch (error) {
        console.error('Error:', error);
    }
};

exports.splitRGBChannels = splitRGBChannels;
