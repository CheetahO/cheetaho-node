var CheetahO = require('../../cheetaho-node');

var cheetaho = new CheetahO({
    api_key: 'xxx'
});

var optSettings = {
    url: 'https://app.cheetaho.com/storage/demo/underC.jpg',
    compression: 'lossy',
    keep_exif: false
};

cheetaho.optimizeUrl(optSettings, function (err, response) {
    if (err) {
        console.log('Failed. Error message:');
        console.log(err);
    } else {
        console.log('Success:');
        console.log(response.data);
    }
});