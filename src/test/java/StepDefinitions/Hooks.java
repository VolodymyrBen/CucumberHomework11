package StepDefinitions;

import Utils.BrowserUtils;
import io.cucumber.java.After;
import io.cucumber.java.Scenario;

public class Hooks {

    @After
    public void tearDonw(Scenario scenario){

        if(scenario.isFailed()){
            BrowserUtils.takeScreenShot();
        }
    }


}
