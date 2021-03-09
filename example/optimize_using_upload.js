var CheetahO = require('../../cheetaho-node');

var cheetaho = new CheetahO({
    api_key: 'xxxx'
});

var optSettings = {
    file: './example/data/150.png',
    compression: 'lossy',
    keep_exif: 0,
    web_p: 0
};

cheetaho.optimizeUpload(optSettings,function(err, response) {
    if (err) {
        console.log('Failed. Error message:');
        console.log(err);
    } else {
        console.log('Success:');
        console.log(response.data);
    }
});