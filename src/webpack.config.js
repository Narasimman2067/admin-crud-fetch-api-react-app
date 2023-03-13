const path =require ('path')

module.exports={
    outputs:{
        path:path.join(_dirname,'/dist'),
        filename:'index.js',

    },
    devServer:{
        port:3000,
        watchContentBase:false,
    },
    module:
    {
            rules:[{
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }


            },
        {
            test:/\.scss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader',
                'file-loader'

            ]
        }
        ]
    }

}