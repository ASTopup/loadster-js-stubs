class console {

    /**
     * Logs a message to the console for debugging at a later time.
     * @param {string} message - Message to post to the console log.
     */
    static log(message);

    /**
     * Logs a warning to the console for debugging at a later time.
     * @param {string} message - Message to post to the console log.
     */
    static warn(message);

    /**
     * Logs an error message to the console for debugging at a later time.
     * @param {string} message - Message to post to the console log.
     */
    static error(message);


}

const Console = console;

module.exports = {Console, console};