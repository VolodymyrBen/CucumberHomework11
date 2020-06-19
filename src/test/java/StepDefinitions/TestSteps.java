package StepDefinitions;

import Pages.HomePage;
import Utils.BrowserUtils;
import Utils.ConfigReader;
import Utils.Driver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class TestSteps {

    WebDriver driver = Driver.getDriver();
    HomePage homePage = new HomePage(driver);

    @Given("the user navigate the page")
    public void the_user_navigate_the_page() {
        driver.get(ConfigReader.getProperty("url"));
    }

    @When("the user open the home page")
    public void the_user_open_the_home_page() {
            homePage.loginButton.click();

    }

    @Then("the user validate the function names")
    public void the_user_validate_the_function_names(List<String> expectedFunctions) {


        for (int i=0;i<expectedFunctions.size(); i++){
            String actualFunction = homePage.functionNames.get(i).getText().trim();
            Assert.assertEquals("The function name doesn't match",expectedFunctions.get(i),actualFunction);
        }
    }

    @When("the user open the Accounts")
    public void the_user_open_the_Accounts() {
        homePage.accountButton.click();
    }

    @Then("the user clicks the Create Account button")
    public void the_user_clicks_the_Create_Account_button() {
        homePage.createAccountButton.click();
    }

    @Then("the user provide customer information {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
    public void the_user_provide_customer_information(String name, String Email, String street, String city, String state, String postalCode, String country, String type, String industry, String phoneType, String phoneNum) throws InterruptedException {
        homePage.nameBox.sendKeys(name);
        homePage.emailBox.sendKeys(Email);
        homePage.streetBox.sendKeys(street);
        homePage.cityBox.sendKeys(city);
        homePage.stateBox.sendKeys(state);
        homePage.postalCodeBox.sendKeys(postalCode);
        homePage.countryBox.sendKeys(country);
        BrowserUtils.selectByVisibleText(homePage.typeDropDown,type);
        BrowserUtils.selectByVisibleText(homePage.industryDropDown,industry);
        BrowserUtils.selectByVisibleText(homePage.phoneDropdownBox,phoneType);
        homePage.phoneBox.sendKeys(phoneNum);
        homePage.shippingAddressBox.sendKeys(street);
        homePage.shippingCityBox.sendKeys(city);
        homePage.shippingCountryBox.sendKeys(country);
        homePage.shippingStateBox.sendKeys(state);
        homePage.shippingZipBox.sendKeys(postalCode);

        homePage.saveButton.click();
        Thread.sleep(2000);

    }

    @Then("the user validate the new customers is created {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}")
    public void the_user_validate_the_new_customers_is_created(String name, String Email, String street, String city, String state, String postalCode, String country, String type, String industry, String phoneType, String phoneNum) {

        Assert.assertEquals(name ,homePage.customerDetails.get(0).getText().trim());
        Assert.assertEquals(Email ,homePage.customerDetails.get(2).getText().trim());
        Assert.assertTrue(homePage.customerDetails.get(3).getText().trim().contains(phoneNum));
        Assert.assertTrue(homePage.customerDetails.get(3).getText().trim().contains(phoneType));
        Assert.assertTrue(homePage.customerDetails.get(4).getText().trim().contains(street));
        Assert.assertTrue(homePage.customerDetails.get(4).getText().trim().contains(city));
        Assert.assertTrue(homePage.customerDetails.get(4).getText().trim().contains(state));
        Assert.assertTrue(homePage.customerDetails.get(4).getText().trim().contains(postalCode));
        Assert.assertTrue(homePage.customerDetails.get(4).getText().trim().contains(country));
        Assert.assertTrue(homePage.customerDetails.get(5).getText().trim().contains(street));
        Assert.assertTrue(homePage.customerDetails.get(5).getText().trim().contains(city));
        Assert.assertTrue(homePage.customerDetails.get(5).getText().trim().contains(state));
        Assert.assertTrue(homePage.customerDetails.get(5).getText().trim().contains(postalCode));
        Assert.assertTrue(homePage.customerDetails.get(5).getText().trim().contains(country));
        Assert.assertEquals(type ,homePage.customerDetails.get(6).getText().trim());
        Assert.assertEquals(industry ,homePage.customerDetails.get(7).getText().trim());

    }

    @When("the user clicks the three dot burgerButton")
    public void the_user_clicks_the_three_dot_burgerButton() {

        homePage.burgerButton.click();
    }

    @Then("the user clicks the Users")
    public void the_user_clicks_the_Users() {

        homePage.usersButton.click();
    }

    @Then("the user validate Names and Emails")
    public void the_user_validate_Names_and_Emails(Map<String,String> expected) {
        Assert.assertEquals(expected,homePage.getCustomerInfo());
    }
    @Then("the user clicks the logout button")
    public void the_user_clicks_the_logout_button() {
        homePage.loginButton.click();
    }

}
