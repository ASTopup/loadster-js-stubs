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
     *                          - `true` - OK
     *                          - `false` - Cancel
     */
    static setDialogConfirmation(flag);

}

module.exports = {browser, keyboard};