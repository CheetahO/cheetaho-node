/*
 * cheetaho-node
 * https://github.com/CheetahO/cheetaho-node
 *
 * Copyright (c) 2019 CHeetahO
 * Licensed under the MIT license.
 */

"use strict";

/**
 * Module dependencies
 */
var request = require("request"),
    apiUrl  = 'https://api.cheetaho.com/api/v2/';

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
        if (body.success === false) {
            return response(new Error(body.message));
        } else {
            return response(undefined, body);
        }
    };
};


/**
 * Optimize image by the given `image` URL along with credentials to CheetahO API via HTTP POST request
 *
 * @param {Object} options
 * @param {Function} cb
 * @api public
 */
cheetaho.prototype.optimize = function (options, res) {
    options = options || {};

    request.post({
        url: apiUrl + '/media/optimization',
        json: true,
        strictSSL: false,
        headers: this.headers,
        body: options
    }, this.handleResponse(res));
};

