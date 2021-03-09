var CheetahO = require('../../cheetaho-node');

var cheetaho = new CheetahO({
    api_key: 'xxxxxx'
});

cheetaho.userStatus(function(err, response) {
    if (err) {
        console.log('Failed. Error message: %s', err);
    } else {
        console.log('Success:');
        console.log(response.data);
    }
});