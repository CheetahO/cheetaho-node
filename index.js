/*
 * cheetaho-node
 * https://github.com/CheetahO/cheetaho-node
 *
 * Copyright (c) 2021 CheetahO
 * Licensed under the MIT license.
 */

"use strict";

/**
 * Module dependencies
 */
var request = require("request"),
    stream = require("stream"),
    fs = require("fs"),
    apiUrl = 'https://api.cheetaho.com/api/v2/';

/**
 * Constructor
 */
var cheetaho = module.exports = function (options) {
    this.headers = {
        key: options.api_key || "",
        'User-Agent': 'cheetaho-node'
    }
};

/**
 * Creates a response handler
 *
 * @param {Function} response
 */
cheetaho.prototype.handleResponse = function (response) {
    return function (err, res, body) {
        if (err) {
            return response(err);
        }

        // in case of unsuccessful request with {wait: true}
        if (body.error !== undefined) {
            return response(new Error(JSON.stringify(body.error.message)));
        } else {
            return response(undefined, body);
        }
    };
};


/**
 * Optimize image by the given `image` URL along with credentials to CheetahO API via HTTP POST request
 *
 * @param {Object} options
 * @param {Function} res
 * @api public
 */
cheetaho.prototype.optimizeUrl = function (options, res) {
    options = options || {};

    request.post({
            url: apiUrl + 'media/optimization',
            json: true,
            strictSSL: false,
            headers: this.headers,
            body: options
        }, this.handleResponse(res)
    );
};

/**
 * Upload the given `file` along with credentials to CheetahO API via HTTPS POST.
 *
 * @param {Object} options
 * @param {Function} res
 * @api public
 */
cheetaho.prototype.optimizeUpload = function (options, res) {
    options = options || {};

    var formData = options;

    if (options.file instanceof stream.Stream) {
        formData.file = options.file;
    } else if (options.file instanceof Object) {
        formData.file = options.file;
    } else {
        formData.file = fs.createReadStream(options.file);
    }

    request.post({
        url: apiUrl + "media/optimization/upload",
        json: true,
        strictSSL: false,
        headers: this.headers,
        formData: formData
    }, this.handleResponse(res));
};


/**
 * Get UserStatus
 *
 * Retrieves user status with usage quotas
 * @param {Function} res
 */
cheetaho.prototype.userStatus = function (res) {
    request.get({
        url: apiUrl + "user",
        json: true,
        strictSSL: false,
        headers: this.headers,
    }, this.handleResponse(res));
};
