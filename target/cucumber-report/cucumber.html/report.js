$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to verify different login functions.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3940756300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 600313900,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I should login successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-login-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I see Welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iSeeWelcomeMessage()"
});
formatter.result({
  "duration": 1257893400,
  "status": "passed"
});
formatter.after({
  "duration": 705318600,
  "status": "passed"
});
formatter.before({
  "duration": 2799226800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 719235800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "I should see Logo",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-see-logo",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I see the Orange HRM Logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iSeeTheOrangeHRMLogo()"
});
formatter.result({
  "duration": 1183802300,
  "status": "passed"
});
formatter.after({
  "duration": 700859200,
  "status": "passed"
});
formatter.before({
  "duration": 2002047700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 503675900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I should log out successfully",
  "description": "",
  "id": "as-a-user-i-want-to-verify-different-login-functions.;i-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I click on user profile logo",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I mouse hover and click on logout",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I am logged out and see text Login Panel",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestSteps.iClickOnUserProfileLogo()"
});
formatter.result({
  "duration": 1545257100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iMouseHoverAndClickOnLogout()"
});
formatter.result({
  "duration": 1080505100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iAmLoggedOutAndSeeTextLoginPanel()"
});
formatter.result({
  "duration": 200742700,
  "status": "passed"
});
formatter.after({
  "duration": 717800400,
  "status": "passed"
});
formatter.uri("userstest.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to verify admin can execute different actions on users.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2018675300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1293816700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Admin should be able to add users",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-add-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@sanity"
    },
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click On Add button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I Verify Add User Text",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I Select User Role Admin",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter Employee Name Ananya Dash",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter User name",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I Select status Disable",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Confirm Password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I verify message Successfully Saved",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1557038700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 260452400,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 408684800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 307450600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 12178423500,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [12194faae645763d86d304dcb90f8a05, clickElement {id\u003d50603A114C24EFA545AEBD0A8762E1E9_element_48}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\pinak\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56396}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56396/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (12194faae645763d86d304dcb90f8a05)] -\u003e xpath: //*[@class\u003d\u0027oxd-select-wrapper\u0027]//*[contains(text(),\u0027Admin\u0027)]]\nSession ID: 12194faae645763d86d304dcb90f8a05\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.orangehrm.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.orangehrm.pages.ViewSystemUsersPage.selectAdminRole(ViewSystemUsersPage.java:89)\r\n\tat com.orangehrm.steps.UserTestSteps.iSelectUserRoleAdmin(UserTestSteps.java:41)\r\n\tat ✽.When I Select User Role Admin(userstest.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserTestSteps.iEnterEmployeeNameAnanyaDash()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iEnterUserName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusDisable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iEnterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iEnterConfirmPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iVerifyMessageSuccessfullySaved()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 918279300,
  "status": "passed"
});
formatter.before({
  "duration": 1989582700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1242280200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Admin should be able to search the user created and verify it.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-search-the-user-created-and-verify-it.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@smoke"
    },
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I Enter username",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I Select user role",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select status",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on search",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see the user in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1713533100,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 239753300,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iEnterUsername()"
});
formatter.result({
  "duration": 81353000,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole()"
});
formatter.result({
  "duration": 1632612900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatus()"
});
formatter.result({
  "duration": 31710030500,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearch()"
});
formatter.result({
  "duration": 86615900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iShouldSeeTheUserInTheList()"
});
formatter.result({
  "duration": 287861900,
  "status": "passed"
});
formatter.after({
  "duration": 685610000,
  "status": "passed"
});
formatter.before({
  "duration": 1904665900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 576096900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Admin should be able to delete the user record.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;admin-should-be-able-to-delete-the-user-record.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click On Add button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I Verify Add User Text",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I Select User Role Admin",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter Employee Name Ananya Dash",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter User name",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select status enable",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter Confirm Password",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click On Save Button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I search for user",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I select user role",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select the status",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on check box",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click delete",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click ok on pop up",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should see message Successfully Deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 2466833600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 265077200,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iClickOnAddButton()"
});
formatter.result({
  "duration": 408585900,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifyAddUserText()"
});
formatter.result({
  "duration": 224068800,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRoleAdmin()"
});
formatter.result({
  "duration": 25959688200,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [cbea7f8d9af476befe7ba426ec8418af, clickElement {id\u003d0923E9BC7D115161E146E7ECAE5DD8A8_element_49}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\pinak\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56442}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56442/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (cbea7f8d9af476befe7ba426ec8418af)] -\u003e xpath: //*[@class\u003d\u0027oxd-select-wrapper\u0027]//*[contains(text(),\u0027Admin\u0027)]]\nSession ID: cbea7f8d9af476befe7ba426ec8418af\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.GeneratedMethodAccessor23.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.orangehrm.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.orangehrm.pages.ViewSystemUsersPage.selectAdminRole(ViewSystemUsersPage.java:89)\r\n\tat com.orangehrm.steps.UserTestSteps.iSelectUserRoleAdmin(UserTestSteps.java:41)\r\n\tat ✽.When I Select User Role Admin(userstest.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserTestSteps.iEnterEmployeeNameAnanyaDash()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iEnterUserName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iSelectStatusEnable()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iEnterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iEnterConfirmPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iSearchForUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iSelectTheStatus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnSearch2()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOnCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickDelete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iClickOkOnPopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iShouldSeeMessageSuccessfullyDeleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 950001400,
  "status": "passed"
});
formatter.before({
  "duration": 2266305300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on HomePage \u0026 Login to the application",
  "keyword": "Given "
});
formatter.match({
  "location": "UserTestSteps.iAmOnHomePageLoginToTheApplication()"
});
formatter.result({
  "duration": 1548696800,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "I want to search for deleted record to ensure it is not found.",
  "description": "",
  "id": "as-a-user-i-want-to-verify-admin-can-execute-different-actions-on-users.;i-want-to-search-for-deleted-record-to-ensure-it-is-not-found.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 54,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "I click On Admin Tab",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I Verify System Users Text",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I search for user",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I select user role",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I select its status",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I click search",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I see message No Record Found",
  "keyword": "Then "
});
formatter.match({
  "location": "UserTestSteps.iClickOnAdminTab()"
});
formatter.result({
  "duration": 1702746600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iVerifySystemUsersText()"
});
formatter.result({
  "duration": 380625700,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSearchForUser()"
});
formatter.result({
  "duration": 93100600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectUserRole2()"
});
formatter.result({
  "duration": 1643139600,
  "status": "passed"
});
formatter.match({
  "location": "UserTestSteps.iSelectItsStatus()"
});
formatter.result({
  "duration": 5162561700,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d113.0.5672.127)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [38acd19a2625ec4f642a08070128c229, clickElement {id\u003dFCA2CE4C3C3D593955D90E8F0C68CC54_element_47}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.127, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\pinak\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56465}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56465/devtoo..., se:cdpVersion: 113.0.5672.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (38acd19a2625ec4f642a08070128c229)] -\u003e xpath: //*[@class\u003d\u0027oxd-select-wrapper\u0027]//*[contains(text(),\u0027Disabled\u0027)]]\nSession ID: 38acd19a2625ec4f642a08070128c229\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.GeneratedMethodAccessor23.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.orangehrm.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.orangehrm.pages.AddUserPage.SelectStatusDisable(AddUserPage.java:78)\r\n\tat com.orangehrm.steps.UserTestSteps.iSelectItsStatus(UserTestSteps.java:173)\r\n\tat ✽.And I select its status(userstest.feature:60)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "UserTestSteps.iClickSearch()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "UserTestSteps.iSeeMessageNoRecordFound()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 917532400,
  "status": "passed"
});
});