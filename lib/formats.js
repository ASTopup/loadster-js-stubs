class formats {

    /**
     * 
     * @param {string} str - String to convert to uppercase
     * @returns {string} - Uppercase value of the input string 
     */
    static uppercase(str);

    /**
     * 
     * @param {string} str - String to convert to lowercase
     * @returns {string} - Lowercase representation of the input string 
     */
    static lowercase(str);

    /**
     * 
     * @param {string} str - String to convert to encode into a URL
     *                       friendly format.
     * @returns {string} - URL friendly representation of the input
     *                     string. 
     */
    static urlencode(str); // user%40example.com

    /**
     * 
     * @param {string} str - URL encoded string to convert from into a 
     *                       format which is human readable.
     * @returns {string} - Human readable format of the URL encoded string.
     */    
    static urldecode(str); // user@example.com
    
    
    /**
     * 
     * @param {string} str - BASE64 string to convert from into a 
     *                       format which is human readable.
     * @returns {string} - BASE64 representation of the input
     *                     string. 
     */
    static base64encode(str);

    /**
     * 
     * @param {string} str - BASE64 encoded string to convert from into a 
     *                       format which is human readable.
     * @returns {string} - Human readable format of the BASE64 string.
     */    
    static base64decode(str); // user:pass


    /**
     * 
     * @param {string} str - String to escape into a XML friendly format. 
     * @returns {string} - XML friendly format escaped of input string.
     */        
    static xmlescape(str); // 11 &gt; 10


    /**
     * 
     * @param {string} str - XML escaped string to convert from into a 
     *                       standard string.
     * @returns {string} - Unescaped XML string.
     */        
    static xmlunescape(str);


    /**
     * 
     * @param {string} str - String to escape into a Html escaped format. 
     * @returns {string} - Html excaped format escaped of input string.
     */       
    static htmlescape(str);

    /**
     * 
     * @param {string} str - Html escaped string to convert from into a 
     *                       standard string.
     * @returns {string} - Unescaped Html string.
     */  
    static htmlunescape(str);

    // "%Y-%M-%d"


    /**
     * Timestamp according to format.
     * @param {string} format - Format of the timestamp to be returned.
     *                        - `%Y - Year component`
     *                        - `%M - Month component`
     *                        - `%d - Day component`
     * @example - `formats.timestamp("%Y-%M-%d") returns 2022-12-25 (current date)`
     */
    static timestamp(format);

    // num of chrs
    static randomalpha(num); // zmLkWMwtEhOD

    // num of chrs
    static randomalphanumeric(num); // F6kEq53p3W

    // num of chrs
    static randomnumeric(num); // 62331478
    static uuid(); // 8ffdb4ef-9e87-4b58-9415-f4c454f0a2ee

}

function lol() {
    formats.timestamp(``)
}

const Formats = formats;

module.exports = {Formats, formats};