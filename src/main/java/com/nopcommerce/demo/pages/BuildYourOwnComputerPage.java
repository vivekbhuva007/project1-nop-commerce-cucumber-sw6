package com.nopcommerce.demo.pages;

import com.aventstack.extentreports.Status;
import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());


    public BuildYourOwnComputerPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='product-name']//h1")
    WebElement productNameText;

    @CacheLookup
    @FindBy(id = "product_attribute_1")
    WebElement processor;

    @CacheLookup
    @FindBy(id = "product_attribute_2")
    WebElement ram;

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_3']//li/label")
    List<WebElement> hDDRadios;

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_4']//li/label")
    List<WebElement> oSRadios;

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_5']//li/label")
    List<WebElement> softwareCheckBoxes;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addToCartBtn;

    @CacheLookup
    @FindBy(xpath = "//p[@class='content']")
    WebElement productAddeMessage;


    public String getProductNameText() {
        String message = getTextFromElement(productNameText);
        Reporter.log("Get productName text : " + productNameText.getText() + "<br>");
        return message;
    }

    public void selectProcessor(String processorName) {
        selectByVisibleTextFromDropDown(processor, processorName);

        Reporter.log("Select processor '" + processorName + "'" + "<br>");
    }

    public void selectRam(String ramGB) {
        selectByVisibleTextFromDropDown(ram, ramGB);
        Reporter.log("Select RAM '" + ramGB + "'" + "<br>");
    }

    public void selectHDD(String hDdGB) {
        for (WebElement hdd : hDDRadios) {
            if (hdd.getText().equals(hDdGB)) {
                clickOnElement(hdd);
                Reporter.log("Select HDD '" + hDdGB + "'" + "<br>");
                break;
            }
        }
    }

    public void selectOS(String oSName) {
        for (WebElement os : oSRadios) {
            if (os.getText().equals(oSName)) {
                clickOnElement(os);
                Reporter.log("Select HDD '" + oSName + "'" + "<br>");
                break;
            }
        }
    }

    public void selectSoftware(String softwareName) {
        for (WebElement software : softwareCheckBoxes) {
            if (software.getText().equals(softwareName)) {
                clickOnElement(software);
                Reporter.log("Select Software '" + software + "'" + "<br>");
                break;
            }
        }
    }

    public void clickOnAddToCartButton() {
        clickOnElement(addToCartBtn);
        Reporter.log("Click on 'ADD TO CART' Button" + "<br>");
    }

    public String getProductAddedMessage() {
        String message = getTextFromElement(productAddeMessage);
        Reporter.log("Get productAdded Message : " + productAddeMessage.getText() + "<br>");
        return message;
    }
}

