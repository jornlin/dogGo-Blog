const path = require('path');
const MouseLinePlugin = (options = {}) => ({
    enhanceAppFiles: [
        path.resolve(__dirname, 'lines.js')
    ]
});
module.exports = MouseLinePlugin;
