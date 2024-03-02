const { splitRGBChannels } = require('./glitches/splitRGBChannels');

const glitchFunction = process.argv[2];
const imagePath = process.argv[3];

if (!glitchFunction || !imagePath) {
    console.log('Warning: Missing required arguments.');
    console.log('Usage:   \'node index.js function "/path/to/image.jpg"\'');
    process.exit(1);
}

switch (glitchFunction) {
    case 'split-rgb':
        splitRGBChannels(imagePath);
        break;
    default:
        console.log('Invalid function.');
        break;
}
