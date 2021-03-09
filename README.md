Node.js module for CheetahO API
===========

[![Build Status](https://secure.travis-ci.org/CheetahO/cheetaho-node.png?branch=master)](http://travis-ci.org/CheetahO/cheetaho-node)

This Node module allows you to optimize GIF, JPG, PNG images using powerful [CheetahO](https://cheetaho.com/) Image Optimizer.

* [How to install cheetaho-node module](#how-to-install-cheetaho-node-module)
* [Getting Started with CheetahO image optimizer](#getting-started-with-cheetho-image-optimizer)
* [How To Use](#how-to-use)
* [Authentication](#authentication)
* [Optimize images with node module](#optimize-images-with-node-module)

## How to install cheetaho node module

    npm install cheetaho --save
    
## Getting Started with CheetahO image optimizer

To start using CheetahO images optimizer you need to obtain authentication key. This can be found in [CheetahO panel](https://app.cheetaho.com/admin/api-credentials). CheetahO **API key** can be used for multiple applications. 

## How To Use

You need to provide image url. This image url should be public and reachable to download for CheetahO image compressor. Remember: never link to optimized images offered to download. Download them first, and then replace in your websites or applications with original one. Our servers optimize images and keep them **for a few hour** only.

## Authentication

CheetahO require header parameter **key** to authenticate your requests. Provide your **key** while creating a new CheetahO instance:

````js
var CheetahO = require('cheetaho');

var cheetaho = new CheetahO({
    api_key: 'your-api-key'
});
````

## Optimize images with node module

Start image optimization by providing image URL to `cheetaho.optimize()` method. You will need to provide few mandatory parameters - `url`:

````js
var CheetahO = require('cheetaho');

var cheetaho = new CheetahO({
    api_key: 'your-api-key'
});

var optSettings = {
    url: 'http://example.com/example.jpg'
};

cheetaho.optimize(optSettings, function(err, data) {
    if (err) {
        console.log('Optimization failed. Error message: %s', err);
    } else {
        console.log('Success optimized image URL: %s', data.kraked_url);
    }
});
````

## Contributing

```
$ git clone git://github.com/CheetahO/cheetaho-node.git
$ cd cheetaho-node
$ npm install
$ npm test
```
NOTE: Be sure to keep up to date the plugin tests and code quality.

## License

MIT License
(c) [CheetahO](https://cheetaho.com)
