module.exports = {
    entry : './src/entry.js', //ทางเข้าโปรแกรม
    module : {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,

            }
        ]


    }

}