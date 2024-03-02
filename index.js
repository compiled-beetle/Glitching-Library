const { resizeImage } = require('./functions/resizeImage');
const { splitRGBChannels } = require('./glitches/splitRGBChannels');

const glitchFunction = process.argv[2];
const imagePath = process.argv[3];

if (!glitchFunction || !imagePath) {
    console.log('Warning: Missing required arguments.');
    console.log('Usage:   \'node index.js function "/path/to/image.jpg"\'');
    process.exit(1);
}

let image;
if (imagePath) {
    console.log('Processing image:', imagePath);
    image = await resizeImage(imagePath);
}

if (!image) {
    console.log('Error: Image processing failed.');
    process.exit(1);
}

switch (glitchFunction) {
    case 'split-rgb':
        splitRGBChannels(image);
        break;
    default:
        console.log('Invalid function.');
        break;
}

console.log('Glitch function executed successfully.');
