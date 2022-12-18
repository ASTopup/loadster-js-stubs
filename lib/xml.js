class xml {

    /**
     * Parses a string which is in the format of a XML document - Based on xmldoc
     * @param {string} str - A string representation of the XML to parse.
     */
    static parse(str);

    /**
     * 
     * @param {string} str - A string representation of the XML to parse.
     * @returns {object} - Returns an object representation of the parsed XML string. 
     */
    static childrenNamed(str);

}

const XML = xml;
const Xml = xml;

module.exports = {XML, Xml, xml};