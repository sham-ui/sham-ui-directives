const webpack = require( 'webpack' );

const plugins = [
    new webpack.NoEmitOnErrorsPlugin()
];

module.exports = {
    entry: {
        index: './src/index'
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        publicPath: '/',
        library: [ 'sham-ui-directives', 'sham-ui-directives/[name]' ],
        libraryTarget: 'umd'
    },
    externals: [
        'sham-ui'
    ],
    plugins: plugins,
    module: {
        rules: [ {
            test: /(\.js)$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/,
            include: __dirname
        }, {
            test: /\.sht/,
            loader: 'sham-ui-templates-loader?{}'
        }, {
            test: /\.sfc$/,
            use: [
                { loader: 'babel-loader' },
                {
                    loader: 'sham-ui-templates-loader?hot',
                    options: {
                        asModule: false,
                        asSingleFileComponent: true
                    }
                }
            ]
        } ]
    }
};
