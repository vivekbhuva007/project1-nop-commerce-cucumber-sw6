@Regressions
Feature: Register Test

  As user I want to navigate register into nop commerce website

  Scenario : verify User Should Navigate To Register Page Successfully
   Given  I am on register page
    When I click on register link
    Then I should see register page is displayed

    Scenario: mandatory fields are required
      Given  I am on register page
      When I click on register link
      When I click on registration buttonn
      And  I should see First name is required "FirstName"
      And  I should see last name is required "LastName"
      And  I should see email is required "Email"
      And  I should see password is required "Password"
      Then  I should see  confirm password is required "ConfirmPassword"


Scenario: verify That User Should Create Account Successfully
  Given  I am on register page
  When I click on register link
   And I select Gender "Male"
   And I enter first name  "prime"
   And I enter last name "test"
   And I select date of birth "22","February","1980"
   And I select Gender "Male"
  And I enter email "prime1234@gmail.com"
  And I enter password "Prime123"
  And I enter Confirm password "Prime123"
  And I click on registration button
  And I should see registration message
  Then I click on continue button

