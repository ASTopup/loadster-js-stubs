class keyboard {
    /**
     * Press individual keys on the keyboard (for testing games, etc)
     * @param {string} key - A key to press on the keyboard `e.g. 'Enter', 'ArrowUp', 'X'` 
     */
    static press(key)
}

class browser {

    /**
    * Navigate to a page and click on a link 
    * @param {string} url - URL of the request endpoint 
    */
    static navigate(url);

    /**
     * Click on selected element
     * @param {string} selector - Selector of element to click `e.g. 'a[href=/login]'` 
     */
    static click(selector);

    /**
     * Wait for an element to be "visible", "hidden", "attached", or "detached" 
     * @param {string} selector - Selector of element to click `e.g. 'a[href=/login]'` 
     * @param {string} state - `'visible'` (The element exists in the DOM and is not transparent, hidden, or behind another element.)
     *                       - `'hidden'` (The element exists in the DOM, but is hidden by CSS or obscured by another element.), 
     *                       - `'attached'` (The element exists in the DOM),
     *                       - `'detached' (The element has been removed from the DOM.)`
     * */ 
    static waitFor(selector, state);

    /**
     * Wait for an element to be "visible", "hidden", "attached", or "detached" 
     * @param {string} selector - Selector of element to click `e.g. 'a[href=/login]'` 
     * @param {string} state - `'visible'` (The element exists in the DOM and is not transparent, hidden, or behind another element.)
     *                       - `'hidden'` (The element exists in the DOM, but is hidden by CSS or obscured by another element.), 
     *                       - `'attached'` (The element exists in the DOM),
     *                       - `'detached' (The element has been removed from the DOM.)`
     * @param {object} args - arguments to apply to the waitFor statement. `e.g. { timeout: 5000, silent: true }`
     * */ 
    // Wait up to 5 seconds for an element to be hidden, and then silently move on
    static waitFor(selector, state, args);

    /**
     * Type a value at a selected element
     * @param {string} selector - Selector of element to click `e.g. 'a[href=/login]'` 
     * @param {string} value - A value to type in. 
     */
    type(selector, value);

    // Type instantly with no delay between keystrokes
    /**
     * Type a value at a selected element
     * @param {string} selector - Selector of element to click `e.g. 'a[href=/login]'` 
     * @param {string} value - A value to type in. 
     * @param {number} ms - Delay between keystrokes in milliseconds
     */
    static type(selector, value, { delay: ms });

    /**
     * Keyboard action e.g. `keyboard.press('Enter')`
     */
    static keyboard = keyboard()

        /**
     * Keyboard action e.g. `Keyboard.press('Enter')`
     */
    static Keyboard = Keyboard()

    /**
     * Take a screenshot;
     */
    static screenshot();

    // // Choose a file in a file input
    // static chooseFiles('input[type=file]', [{ name: 'lolcat', contentType: 'image/jpeg', contentBase64: 'UklGRuZ/AABXRUJQVlA4INp/AABwrAGdASr0AQACPjkYi0QiIaET' }]);

    /**
     * Hover a menu and click the first item
     * @param {string} selector - Selector of element to click `e.g. 'a[href=/login]'` 
     */
    static hover(selector);

    /**
     * Select an option from a select element
     * @param {string} selector - Selector of element to click `e.g. 'a[href=/login]'` 
     * @param {number} index - Index of the value in the list
     */
    static selectByIndex(selector, index);

    /**
     * Select an option from a select element
     * @param {string} selector - Selector of element to click `e.g. 'a[href=/login]'` 
     * @param {number|string} value - Value of the element in the list
     */
    static selectByValue(selector, value);

    /**
     * Select an option from a select element
     * @param {string} selector - Selector of element to click `e.g. 'a[href=/login]'` 
     * @param {string} text - Text of the element in the list
     */
    static selectByText(selector, text);

    // // Answer confirm() dialogs with "OK" instead of "Cancel"
    /**
     * 
     * @param {boolean} flag - OK or Cancel a confirmation box
     *                          - `true` - Answer confirm() dialogs with `OK` instead of `Cancel`
     *                          - `false` - Answer confirm() dialogs with `Cancel` instead of `OK`
     */
    static setDialogConfirmation(flag);

    /**
     * Evaluates JavaScript inside of the browser and not outsude e.g. in Code Blocks. This 
     * allows for direct access to DOM elements.
     * 
     * @param {string} jsCode - A string representation of the JavaScript code which you want 
     *                          to execute on the browser itself. 
     */
    static eval(jsCode)

    /**
     * Resize the bot's browser viewport
     * @param {number} x - Width of the viewport
     * @param {number} y - Height of the viewport
     */
    static setViewportSize(x, y);

    /**
     * List all of the bot's browser windows/tabs
     */
    static listWindows();

    /**
     * Opens a new window/tab and makes it active
     */
    static openWindow();

    /**
     * Get the bot's currently active browser window/tab
     * @returns {number} - Number of the window / tab currently active
     */
    static getActiveWindow();

    /**
     * Focus a different browser window/tab
     * @param {number} w - Sets the window/tab in the list corresponding
     *                     to `w` as active 
     */
    static setActiveWindow(w);

    /**
     * Close a browser window/tab
     * @param {number} w - Closes the window/tab in the list corresponding
     *                     to `w`
     */
    static closeWindow(w);






    
    /**
     * Set a global request header to send to all domains
     * @param {string} header - The header to apply `e.g. 'X-Authentication'`
     * @param {string|number} value - The value of the header `e.g. 'someval' or 123`
     */
    static setGlobalHeader(header, value)

    /**
     * Remove a global request header
     * @param {string} header - The header to apply `e.g. 'X-Authentication'`
     */
    static removeGlobalHeader(header)

    /**
     * Set HTTP Basic or NTLM credentials for any site that requires them
     * @param {string} username - Username Http for authentication
     * @param {string} password - Password Http for authentication
     */
    static setHttpAuthentication(username, password);


}

const Browser = browser;
const Keyboard = keyboard;

module.exports = {browser, Browser, keyboard, Keyboard};