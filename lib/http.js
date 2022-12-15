class http {
    /**
     * Make GET HTTP request
     * @param {string} url - URL of the request endpoint 
     * @param {[string|number]} args - Array of arguments
     */
    static get(url, args);
    static post(url, body, args);
    static put(url, body, args);
    static patch(url, body, args);
    static delete(url, args);
    static options(url, args);
    static trace(url, args);

    /**
     * Add a header to all future requests to a host
     * @param {string} host - The host this applies to `e.g. 'somedomain.com'`
     * @param {string} header - The header to apply `e.g. 'X-Authentication'`
     * @param {string|number} value - The value of the header `e.g. 'someval' or 123`
     */
    static addHostHeader(host, header, value);

    /**
     * Remove host headers matching a host
     * @param {string} host - The host this applies to `e.g. 'somedomain.com'`
     */
    static removeHostHeaders(host);

    /**
     * Remove host headers matching an exact host and header
     * @param {string} host - The host this applies to `e.g. 'somedomain.com'`
     * @param {string} header - The header to apply `e.g. 'X-Authentication'`
     */
    static removeHostHeaders(host, header);

    /**
     * Remove host headers matching an exact host, header and value
     * @param {string} host - The host this applies to `e.g. 'somedomain.com'`
     * @param {string} header - The header to apply `e.g. 'X-Authentication'`
     * @param {string|number} value - The value of the header `e.g. 'someval' or 123`
     */
    static removeHostHeaders(host, header, value)

    /**
     * Add global headers for all requests to all hosts
     * @param {string} header - The header to apply `e.g. 'X-Authentication'`
     * @param {string|number} value - The value of the header `e.g. 'someval' or 123`
     */
    static addGlobalHeader(header, value)

    /**
     * Remove global headers for all requests to all hosts
     * @param {string} header - The header to apply `e.g. 'X-Authentication'`
     */
    static removeGlobalHeader(header)

}



module.exports = {http};