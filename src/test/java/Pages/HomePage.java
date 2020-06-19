package Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class HomePage {

    public HomePage(WebDriver driver){
        PageFactory.initElements(driver,this);
    }

    @FindBy(id = "btn-login")
    public WebElement loginButton;

    @FindBy(xpath = "//li[contains(@class,'not-in-more tab')]")
    public List<WebElement> functionNames;

    @FindBy(xpath = "//li[@data-name='Account']")
    public WebElement accountButton;

    @FindBy(xpath = "//a[@data-action='create']")
    public WebElement createAccountButton;

    @FindBy(xpath = "//input[@data-name='name']")
    public WebElement nameBox;

    @FindBy(xpath = "//input[@type='email']")
    public WebElement emailBox;

    @FindBy(xpath = "//textarea[@data-name='billingAddressStreet']")
    public WebElement streetBox;

    @FindBy(xpath = "//input[@data-name='billingAddressCity']")
    public WebElement cityBox;

    @FindBy(xpath = "//input[@data-name='billingAddressState']")
    public WebElement stateBox;

    @FindBy(xpath = "//input[@data-name='billingAddressPostalCode']")
    public WebElement postalCodeBox;

    @FindBy(xpath = "//input[@data-name='billingAddressCountry']")
    public WebElement countryBox;

    @FindBy(xpath = "//select[@data-name='type']")
    public WebElement typeDropDown;

    @FindBy(xpath = "//select[@data-name='industry']")
    public WebElement industryDropDown;

    @FindBy(xpath = "//button[.='Save']")
    public WebElement saveButton;

    @FindBy(xpath = "//input[@data-name='shippingAddressCountry']")
    public WebElement shippingCountryBox;

    @FindBy(xpath = "//select[@class='form-control']")
    public  WebElement phoneDropdownBox;
    @FindBy(xpath = "//input[@class='form-control phone-number no-margin-shifting']")
    public  WebElement phoneBox;
    @FindBy(xpath = "//textarea[@data-name='shippingAddressStreet']")
    public  WebElement shippingAddressBox;
    @FindBy(xpath = "//input[@data-name='shippingAddressCity']")
    public  WebElement shippingCityBox;
    @FindBy(xpath = "//input[@data-name='shippingAddressState']")
    public  WebElement shippingStateBox;
    @FindBy(xpath = "//input[@data-name='shippingAddressPostalCode']")
    public  WebElement shippingZipBox;

    @FindBy(xpath = "//div[@class='middle']//div[@class='cell col-sm-6 form-group']//div[@class='field']")
    public  List<WebElement> customerDetails;

    @FindBy(id = "nav-more-tabs-dropdown")
    public WebElement burgerButton;
    //  //a[@href='#User']
    @FindBy(xpath = "//span[contains(text(),'Users')]")
    public WebElement usersButton;

    @FindBy(xpath = "//tr[@class='list-row']//a[@class='link']")
    public List<WebElement> customerNames;

    @FindBy(xpath = "//tr[@class='list-row']//td[@data-name='emailAddress']")
    public List<WebElement> customerEmails;


    public Map<String,String> getCustomerInfo(){
        Map<String,String> info = new LinkedHashMap<>();

        for (int i=0; i<customerNames.size(); i++ ){
            info.put(customerNames.get(i).getText().trim(),customerEmails.get(i).getText().trim());
        }
        return info;
    }


}
