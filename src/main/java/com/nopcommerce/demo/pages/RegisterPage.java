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

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(css = "div[class='page-title'] h1")
    WebElement registerText;

    @CacheLookup
    @FindBy(xpath = "//div[@id='gender']//label")
    List<WebElement> genderRadios;

    @CacheLookup
    @FindBy(id = "FirstName")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(id = "LastName")
    WebElement lastNameField;

    @CacheLookup
    @FindBy(name = "DateOfBirthDay")
    WebElement dateOfBirthDay;

    @CacheLookup
    @FindBy(name = "DateOfBirthMonth")
    WebElement dateOfBirthMonth;

    @CacheLookup
    @FindBy(name = "DateOfBirthYear")
    WebElement dateOfBirthYear;

    @CacheLookup
    @FindBy(name = "Email")
    WebElement emailField;

    @CacheLookup
    @FindBy(id = "Password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPasswordField;

    @CacheLookup
    @FindBy(css = "#register-button")
    WebElement registerBtn;

    @CacheLookup
    @FindBy(className = "field-validation-error")
    List<WebElement> fieldValidationErrors;

    @CacheLookup
    @FindBy(css = ".result")
    WebElement yourRegCompletedText;

    @CacheLookup
    @FindBy(css = ".button-1.register-continue-button")
    WebElement continueBtn;


    public String getRegisterText() {
        String message = getTextFromElement(registerText);
        Reporter.log("Get registerText : " + registerText.getText() + "<br>");
        return message;
    }

    public void selectGender(String gender) {
        for (WebElement radio : genderRadios) {
            if (radio.getText().contains(gender)) {
                Reporter.log("Select '" + gender + "' radio button" + "<br>");
                clickOnElement(radio);
                break;
            }
        }
    }

    public void enterFirstName(String firstName) {
        sendTextToElement(firstNameField, firstName);
        Reporter.log("Enter Firstname : '" + firstName + "' to firstName field" + "<br>");
    }

    public void enterLastName(String lastName) {
        sendTextToElement(lastNameField, lastName);
        Reporter.log("Enter Lastname : '" + lastName + "' to lastName field" + "<br>");
    }

    public void selectDateOfBirth(String day, String month, String year) {
        selectByVisibleTextFromDropDown(dateOfBirthDay, day);
        selectByVisibleTextFromDropDown(dateOfBirthMonth, month);
        selectByVisibleTextFromDropDown(dateOfBirthYear, year);
        Reporter.log("Select day : '" + day + "', month : '" + month + "', year : '" + year + "'" + "<br>");
    }

    public void enterEmail(String email) {
        sendTextToElement(emailField, email);
        Reporter.log("Enter Email : '" + email + "' to email field" + "<br>");
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        Reporter.log("Enter Password : '" + password + "' to password field" + "<br>");
    }

    public void enterConfirmPassword(String confPassword) {
        sendTextToElement(confirmPasswordField, confPassword);
        Reporter.log("Enter Confirm password : '" + confPassword + "' to confirm password field" + "<br>");
    }

    public void clickOnRegisterButton() {
        Reporter.log("Click on 'REGISTER' button" + "<br>");
        clickOnElement(registerBtn);
    }

    public String getValidationErrorMessageForField(String fieldName) {
        String validationMessage = null;
        for (WebElement message : fieldValidationErrors) {
            if (message.getAttribute("data-valmsg-for").equals(fieldName)) {
                validationMessage = message.getText();
                Reporter.log("Click on 'REGISTER' button" + "<br>");
                break;
            }
        }
        return validationMessage;
    }

    public String getYourRegCompletedText() {
        String message = getTextFromElement(yourRegCompletedText);
        Reporter.log("Get your reg completed text : " + yourRegCompletedText.getText() + "<br>");
        return message;
    }

    public void clickOnContinueButton() {
        Reporter.log("Click on 'CONTINUE' button" + "<br>");
        clickOnElement(continueBtn);
    }

}


