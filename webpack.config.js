const RemoveCommentsPlugin = require('./remove-comments-plugin')
module.exports = {
    mode: "none",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new RemoveCommentsPlugin()
    ]
}
