$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/EspoCRM/homePage.feature");
formatter.feature({
  "name": "EspoCRM project",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validation of function names",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user navigate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_navigate_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open the home page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_open_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the function names",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_validate_the_function_names(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: The function name doesn\u0027t match expected:\u003c[Home]\u003e but was:\u003c[Accounts]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat StepDefinitions.TestSteps.the_user_validate_the_function_names(TestSteps.java:41)\n\tat ✽.the user validate the function names(file:///Users/volodymyrbendiukevych/IdeaProjects/Homework11Cucumber/src/test/resources/EspoCRM/homePage.feature:6)\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Add four new customers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user navigate the page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.step({
  "name": "the user provide customer information \"\u003cname\u003e\", \"\u003cEmail\u003e\", \"\u003cStreet\u003e\", \"\u003cCity\u003e\", \"\u003cState\u003e\", \"\u003cPostal Code\u003e\", \"\u003cCountry\u003e\", \"\u003cType\u003e\", \"\u003cIndustry\u003e\", \"\u003cphoneType\u003e\", \"\u003cphoneNum\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user validate the new customers is created \"\u003cname\u003e\", \"\u003cEmail\u003e\", \"\u003cStreet\u003e\", \"\u003cCity\u003e\", \"\u003cState\u003e\", \"\u003cPostal Code\u003e\", \"\u003cCountry\u003e\", \"\u003cType\u003e\", \"\u003cIndustry\u003e\", \"\u003cphoneType\u003e\", \"\u003cphoneNum\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "Email",
        "Street",
        "City",
        "State",
        "Postal Code",
        "Country",
        "Type",
        "Industry",
        "phoneType",
        "phoneNum"
      ]
    },
    {
      "cells": [
        "Valerka",
        "val@gmail.com",
        "2145 BroadStone Ave.",
        "Plano",
        "TX",
        "43056",
        "USA",
        "Customer",
        "Education",
        "Mobile",
        "4696784566"
      ]
    },
    {
      "cells": [
        "Roman",
        "pat@gmail.com",
        "2145 BroadStone Ave.",
        "Richardson",
        "TX",
        "23467",
        "USA",
        "Reseller",
        "Retail",
        "Office",
        "2346784559"
      ]
    },
    {
      "cells": [
        "Donald",
        "arny@gmail.com",
        "23 Lenina",
        "San Francisco",
        "CA",
        "61720",
        "USA",
        "Investor",
        "Culture",
        "Fax",
        "4496784557"
      ]
    },
    {
      "cells": [
        "Hasan",
        "goodguy@gmail.com",
        "2245 Chicago ave",
        "Los Angeles",
        "CA",
        "35429",
        "USA",
        "Partner",
        "Banking",
        "Mobile",
        "1096784524"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add four new customers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user navigate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_navigate_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Volodymyrs-MacBook-Pro.local\u0027, ip: \u00272601:241:4100:1802:0:7d7f:8205:a875%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/p6/d_53fxh53jl...}, goog:chromeOptions: {debuggerAddress: localhost:57639}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d0f000eb88d1303d3554ac4dc0f2c954\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat StepDefinitions.TestSteps.the_user_clicks_the_Create_Account_button(TestSteps.java:52)\n\tat ✽.the user clicks the Create Account button(file:///Users/volodymyrbendiukevych/IdeaProjects/Homework11Cucumber/src/test/resources/EspoCRM/homePage.feature:25)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user provide customer information \"Valerka\", \"val@gmail.com\", \"2145 BroadStone Ave.\", \"Plano\", \"TX\", \"43056\", \"USA\", \"Customer\", \"Education\", \"Mobile\", \"4696784566\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_provide_customer_information(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user validate the new customers is created \"Valerka\", \"val@gmail.com\", \"2145 BroadStone Ave.\", \"Plano\", \"TX\", \"43056\", \"USA\", \"Customer\", \"Education\", \"Mobile\", \"4696784566\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_validate_the_new_customers_is_created(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add four new customers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user navigate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_navigate_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provide customer information \"Roman\", \"pat@gmail.com\", \"2145 BroadStone Ave.\", \"Richardson\", \"TX\", \"23467\", \"USA\", \"Reseller\", \"Retail\", \"Office\", \"2346784559\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_provide_customer_information(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the new customers is created \"Roman\", \"pat@gmail.com\", \"2145 BroadStone Ave.\", \"Richardson\", \"TX\", \"23467\", \"USA\", \"Reseller\", \"Retail\", \"Office\", \"2346784559\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_validate_the_new_customers_is_created(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add four new customers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user navigate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_navigate_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provide customer information \"Donald\", \"arny@gmail.com\", \"23 Lenina\", \"San Francisco\", \"CA\", \"61720\", \"USA\", \"Investor\", \"Culture\", \"Fax\", \"4496784557\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_provide_customer_information(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the new customers is created \"Donald\", \"arny@gmail.com\", \"23 Lenina\", \"San Francisco\", \"CA\", \"61720\", \"USA\", \"Investor\", \"Culture\", \"Fax\", \"4496784557\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_validate_the_new_customers_is_created(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add four new customers",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user navigate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_navigate_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provide customer information \"Hasan\", \"goodguy@gmail.com\", \"2245 Chicago ave\", \"Los Angeles\", \"CA\", \"35429\", \"USA\", \"Partner\", \"Banking\", \"Mobile\", \"1096784524\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_provide_customer_information(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate the new customers is created \"Hasan\", \"goodguy@gmail.com\", \"2245 Chicago ave\", \"Los Angeles\", \"CA\", \"35429\", \"USA\", \"Partner\", \"Banking\", \"Mobile\", \"1096784524\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_validate_the_new_customers_is_created(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validation Names and Emails",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user navigate the page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_navigate_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the three dot burgerButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_three_dot_burgerButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the Users",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_Users()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user validate Names and Emails",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_validate_Names_and_Emails(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});