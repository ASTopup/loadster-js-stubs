class bot {
    /**
     * Pause for a specific number of milliseconds
     * @param {number} ms - Amount of time in milliseconds
     */
    static sleep(ms);
    /**
     * Pause for a specific number of milliseconds
     * @param {number} ms  - Amount of time in milliseconds 
     */
    static wait(ms);

    /**
     * Get the time, in milliseconds, relative to the start of the test.
     * @returns {string} - Date and time as a string
     */
    static getTime();

/**
 * Get bot variable.
 * @param {string} name - "name" of the bot variable
 */
    static getVariable(name);
/**
 * Get bot value in variable in a multi-column dataset 
 * @param {string} name - "name" of the bot variable
 * @param {number} column - column in which the data is (multi-column datasets only)
 */
    static getVariable(name, column);
  /**
   * Set bot variable.
   * @param {string} name - "name" of the bot variable
   * @param {any} value - "value" to be set in the variable
   */
    static setVariable(name, value);
    
    /**
     * Override the global halt setting, just for this bot.
     * This will allow HTTP 4xx/5xx and other things that would normally stop the script, without stopping the script.
     * @param {boolean} flag - Set or unset the "flag" 
     */
    static setHaltOnErrors(flag);

    /**
     * Tells how many iterations of the script have been completed by this bot, starting with 0.
     * @returns {number} - the number of the iteration (starts at 0)
     */
    static getIteration();

    /**
     * Identifies which bot is currently running the script.
     * This can be useful in special cases when only certain bots should perform certain actions.
     * @returns {number} - index of the bot in the group, starting with 0
     */
    static getBotNumber();

    /**
     * Identifies which bot is currently running the script.
     * This can be useful in special cases when only certain bots should perform certain actions.
     * @returns {number} - index of the bot group, starting with 0
     */
    static getBotGroupNumber();

    /**
     * Identifies which bot is currently running the script.
     * This can be useful in special cases when only certain bots should perform certain actions.
     * @returns {string} - unique bot identifier string with a guid
     */
    static getBotIdentifier(); 

    /**
     * Starts a timer. When you use custom timers, the amount of time elapsed between starting and
     * stopping the timer will be reported in the results.
     * @param {string} name - "name" of the timer pair up with "startTimer(name)" and shown when 
     *                      reporting
     */
    static startTimer(name);

    /**
     * Stops a timer. When you use custom timers, the amount of time elapsed between starting and
     * stopping the timer will be reported in the results.
     * @param {string} name - "name" of the timer pair up with "startTimer(name)" and shown when 
     *                      reporting
     */
    static stopTimer(name);

    /**
     * Runs a custom function inside a timer. This is shorthand for starting and stopping the timer separately.
     * @param {string} name - "name" of the timer pair up with "startTimer(name)" and shown when 
     *                      reporting
     * @param {function} fn - Closure to execute the code to time `within ()=>{}` or `function(){}`
     */
    static timer(name, fn);

    /**
     * Makes the bot exit the script early.
     */
    static exit();

}



module.exports = {bot};