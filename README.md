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

cheetaho.optimizeUrl(optSettings, function(err, data) {
    if (err) {
        console.log('Optimization failed. Error message: %s', err);
    } else {
        console.log('Success optimized image URL: %s', data);
    }
});
````


## Optimize images using file upload

Start image optimization by uploading image URL to `cheetaho.optimizeUpload()` method. You will need to provide few mandatory parameters. Parameter `file` is a path to file or a Stream Object:

````js
var CheetahO = require('cheetaho');

var cheetaho = new CheetahO({
    api_key: 'your-api-key'
});

var optSettings = {
    file: './example/data/150.png',
    compression: 'lossy',
    keep_exif: 0
};

cheetaho.optimizeUpload(optSettings, function(err, data) {
    if (err) {
        console.log('Optimization failed. Error message: %s', err);
    } else {
        console.log('Success optimized image URL: %s', data);
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

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
