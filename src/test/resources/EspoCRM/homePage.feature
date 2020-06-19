Feature: EspoCRM project

  Scenario: Validation of function names
    Given the user navigate the page
    When the user open the home page
    Then the user validate the function names
      | Home          |
      | Accounts      |
      | Contacts      |
      | Leads         |
      | Opportunities |
      | Reports       |
      | Quotes        |
      | Sales Orders  |
      | Invoices      |
      | Products      |
      | Emails        |
      | Cases         |
      | Calendar      |
      | Tasks         |
    And the user clicks the logout button

  Scenario Outline: Add four new customers
    Given the user navigate the page
    When the user open the Accounts
    Then the user clicks the Create Account button
    And the user provide customer information "<name>", "<Email>", "<Street>", "<City>", "<State>", "<Postal Code>", "<Country>", "<Type>", "<Industry>", "<phoneType>", "<phoneNum>"
    And the user validate the new customers is created "<name>", "<Email>", "<Street>", "<City>", "<State>", "<Postal Code>", "<Country>", "<Type>", "<Industry>", "<phoneType>", "<phoneNum>"
    Examples:
      | name    | Email             | Street               | City          | State | Postal Code | Country | Type     | Industry  | phoneType | phoneNum   |
      | Valerka | val@gmail.com     | 2145 BroadStone Ave. | Plano         | TX    | 43056       | USA     | Customer | Education | Mobile    | 4696784566 |
      | Roman   | pat@gmail.com     | 2145 BroadStone Ave. | Richardson    | TX    | 23467       | USA     | Reseller | Retail    | Office    | 2346784559 |
      | Donald  | arny@gmail.com    | 23 Lenina            | San Francisco | CA    | 61720       | USA     | Investor | Culture   | Fax       | 4496784557 |
      | Hasan   | goodguy@gmail.com | 2245 Chicago ave     | Los Angeles   | CA    | 35429       | USA     | Partner  | Banking   | Mobile    | 1096784524 |


  Scenario: Validation Names and Emails
    Given the user navigate the page
    When the user clicks the three dot burgerButton
    Then the user clicks the Users
    Then the user validate Names and Emails
      | Admin           | espocrm.demo@gmail.com              |
      | Ben Parter      | ben.parter@example.com.ko           |
      | Bill Chan       | bill_chan@example-demo.so           |
      | Brendon Lewis   | brendon.lewis@re-example.org        |
      | Emma Bard       | emma_bard@rio.demo.su               |
      | Gabliel Brie    | gabrielbrie@exmpl.org.pi            |
      | Jake Forester   | jake_forester@example-espo.demo.com |
      | Jim Williams    | jim_williams@example.com.ca         |
      | Rebecca Maer    | rebecca.maer@demoexmpl.org          |
      | Richard Pan     | richard_pan@read.exmpl-dd.com       |
      | Thomas Peterson | thomas.peterson@demo-user.exmpl.com |