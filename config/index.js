'use strict';
console.log('ENV:', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    console.log('-------============INFORMATION==========----------');

    module.exports = {
        "database": process.env.MONGOLAB_VAST_URI
        // "database": process.env.MONGOLAB_ROSE_URI,
        // "database_acl": process.env.MONGODB_URI,
        // "baseUrl": process.env.BASEURL,
        // "api": {
        //     "port": process.env.PORT,
        //     "superuser": "test",
        //     "superpass": "test",
        //     "session_minutes": process.env.SESSION_MINUTES,
        //     "session_secret": process.env.SESSION_SECRET
        // },
        // "product_api": {
        //     "end_point": process.env.URL_END_POINT,
        //     "taas_end_point": process.env.TAAS_END_POINT,
        //     "PADOC_USERNAME": process.env.PADOC_USERNAME,
        //     "PADOC_PASSWORD": process.env.PADOC_PASSWORD
        // },
        // "aws_sdk": {
        //     "AWS_ACCESS_KEY_ID": process.env.AWS_ACCESS_KEY_ID,
        //     "AWS_SECRET_ACCESS_KEY": process.env.AWS_SECRET_ACCESS_KEY,
        //     "AWS_Bucket": process.env.AWS_BUCKET
        // }
    };
} else {
    console.log('-------============INFORMATION==========----------');
    console.log(': ENV:', "not a production server see in config.js of local folder");
    module.exports = {
        // "database": 'mongodb://test:test123@ds143893.mlab.com:43893/todolist'
        "database": 'mongodb://localhost:27017/test'

    };
}
