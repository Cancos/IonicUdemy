const assert = require('assert');

describe('webdriver.io page', () => {
    before(() => {
        let searchButton = $('//XCUIElementTypeButton[@name="Search"]');
        const searchBar = $('//XCUIElementTypeSearchField');
        let redownloadButton = $('(//XCUIElementTypeButton[@name="redownload"])[1]');
        let openButton = $('//XCUIElementTypeButton[@name="open"]');

        // // Go to the app store and download secure hub
        searchButton.waitForExist(10000);
        searchButton.click();

        searchBar.waitForExist(10000);
        searchBar.click();

        browser.pause(3000);
        searchBar.setValue('Citrix Secure Hub\n');
        // // ADD THIS BACK IN AFTER ALL AUTOMATION IS DONE
        redownloadButton.waitForExist(10000);
        redownloadButton.click();
        // // END OF ADDING BACK CODE

        openButton.waitForExist(120000);
        openButton.click();

        let allowDialogButton = $('//XCUIElementTypeButton[@name="Allow"]');
        allowDialogButton.waitForExist(10000);
        allowDialogButton.click();

        let mdmEnvText = $('//XCUIElementTypeTextField[@value="UPN, Email or Server"]');
        mdmEnvText.waitForExist(10000);
        mdmEnvText.click();
        mdmEnvText.setValue('mdmdev.usaa.com\n');

        let usernameInput = $('//XCUIElementTypeTextField[@name="UserName"]');
        usernameInput.waitForExist(10000);
        usernameInput.click();
        usernameInput.setValue('');

        let passwordInput = $('//XCUIElementTypeSecureTextField[@name="Password"]');
        passwordInput.waitForExist(10000);
        passwordInput.click();
        passwordInput.setValue('');

        let pinInput = $('//XCUIElementTypeSecureTextField[@value="Pin"]');
        pinInput.waitForExist(10000);
        pinInput.click();
        pinInput.setValue('682635\n');

        let allowConfigButton = $('//XCUIElementTypeButton[@name="Allow"]');
        allowConfigButton.waitForExist(10000);
        allowConfigButton.click();

        let closeButton = $('//XCUIElementTypeButton[@name="Close"]');
        closeButton.waitForExist(10000);
        closeButton.click();
        // END Going to the app store to download secure hub

        browser.pause(3000);
        
        // Settings add MDX Profile
        driver.activateApp('com.apple.Preferences');
        
        let swipeAction = $('//XCUIElementTypeApplication[@name="Settings"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[3]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeTable');
        swipeAction.waitForExist(10000);

        let generalListButton = $('//XCUIElementTypeCell[@name="General"]');
        generalListButton.waitForExist(10000);
        generalListButton.click();

        driver.execute('mobile: scroll', {
            "direction": "down",
            "element": swipeAction.elementId,
            "name": "Profile",
            "toVisible": true
        });

        let profileItemButton = $('//XCUIElementTypeCell[@name="Profile"]');
        profileItemButton.waitForExist(10000);
        profileItemButton.click();

        let xenProfileButton = $('//XCUIElementTypeCell[@name="XenMobile Profile Service"]');
        xenProfileButton.waitForExist(10000);
        xenProfileButton.click();

        let installProfile = $('//XCUIElementTypeButton[@name="Install"]');
        installProfile.waitForExist(10000);
        installProfile.click();

        let num8Keypad = $('//XCUIElementTypeKey[@name="8"]');
        num8Keypad.waitForExist(10000);

        let num5Keypad = $('//XCUIElementTypeKey[@name="5"]');
        num5Keypad.waitForExist(10000);

        let num2Keypad = $('//XCUIElementTypeKey[@name="2"]');
        num2Keypad.waitForExist(10000);

        num8Keypad.click();
        num5Keypad.click();
        num2Keypad.click();
        num8Keypad.click();

        let installPromptButton = $('//XCUIElementTypeButton[@name="Install"]');
        installPromptButton.waitForExist(10000);
        installPromptButton.click();

        let installButton = $('//XCUIElementTypeButton[@name="Install"]');
        installButton.waitForExist(10000);
        installButton.click();

        let trustButton = $('//XCUIElementTypeButton[@name="Trust"]');
        trustButton.waitForExist(10000);
        trustButton.click();

        let doneButton = $('//XCUIElementTypeButton[@name="Done"]');
        doneButton.waitForExist(10000);
        doneButton.click();

        driver.activateApp('com.zenprise.zpmdmbeta');

        let num1 = browser.$('//XCUIElementTypeKey[@name="1"]');
        num1.waitForExist(10000);
        num1.click();

        let num3 = browser.$('//XCUIElementTypeKey[@name="3"]');
        num3.waitForExist(10000);
        num3.click();

        num1.click();
        num3.click();

        browser.pause(3000);

        let num1Repeat = browser.$('//XCUIElementTypeKey[@name="1"]');
        num1Repeat.waitForExist(10000);
        num1Repeat.click();

        let num3Repeat = browser.$('//XCUIElementTypeKey[@name="3"]');
        num3Repeat.waitForExist(10000);
        num3Repeat.click();

        num1Repeat.click();
        num3Repeat.click();

        browser.pause(10000);

        let alwaysAllowButton = $('//XCUIElementTypeButton[@name="Always Allow"]');
        alwaysAllowButton.waitForExist(10000);
        alwaysAllowButton.click();

        let okButton = $('//XCUIElementTypeButton[@name="OK"]');
        okButton.waitForExist(10000);
        okButton.click();

        let allowVPN = $('//XCUIElementTypeButton[@name="Allow"]');
        allowVPN.waitForExist(10000);
        allowVPN.click();

        let num8Pad = $('//XCUIElementTypeButton[@name="8"]');
        num8Pad.waitForExist(10000);
        num8Pad.click();

        let num5Pad = $('//XCUIElementTypeButton[@name="5"]');
        num5Pad.waitForExist(10000);
        num5Pad.click();

        let num2Pad = $('//XCUIElementTypeButton[@name="2"]');
        num2Pad.waitForExist(10000);
        num2Pad.click();

        num8Pad.click();

        // END Settings add MDX Profile
        browser.pause(5000);
    });
    after(() => {
        browser.getPageSource();
    });

    it('Secure Hub', () => {        
        assert.strictEqual(true, true);
    });
});