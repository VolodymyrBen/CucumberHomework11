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
  "status": "skipped"
});
formatter.step({
  "name": "the user open the home page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_open_the_home_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the logout button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user provide customer information \"Roman\", \"pat@gmail.com\", \"2145 BroadStone Ave.\", \"Richardson\", \"TX\", \"23467\", \"USA\", \"Reseller\", \"Retail\", \"Office\", \"2346784559\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_provide_customer_information(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user validate the new customers is created \"Roman\", \"pat@gmail.com\", \"2145 BroadStone Ave.\", \"Richardson\", \"TX\", \"23467\", \"USA\", \"Reseller\", \"Retail\", \"Office\", \"2346784559\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_validate_the_new_customers_is_created(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user provide customer information \"Donald\", \"arny@gmail.com\", \"23 Lenina\", \"San Francisco\", \"CA\", \"61720\", \"USA\", \"Investor\", \"Culture\", \"Fax\", \"4496784557\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_provide_customer_information(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user validate the new customers is created \"Donald\", \"arny@gmail.com\", \"23 Lenina\", \"San Francisco\", \"CA\", \"61720\", \"USA\", \"Investor\", \"Culture\", \"Fax\", \"4496784557\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_validate_the_new_customers_is_created(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "the user open the Accounts",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_open_the_Accounts()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the Create Account button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_Create_Account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user provide customer information \"Hasan\", \"goodguy@gmail.com\", \"2245 Chicago ave\", \"Los Angeles\", \"CA\", \"35429\", \"USA\", \"Partner\", \"Banking\", \"Mobile\", \"1096784524\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_provide_customer_information(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user validate the new customers is created \"Hasan\", \"goodguy@gmail.com\", \"2245 Chicago ave\", \"Los Angeles\", \"CA\", \"35429\", \"USA\", \"Partner\", \"Banking\", \"Mobile\", \"1096784524\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_validate_the_new_customers_is_created(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the three dot burgerButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_three_dot_burgerButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the Users",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.TestSteps.the_user_clicks_the_Users()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});