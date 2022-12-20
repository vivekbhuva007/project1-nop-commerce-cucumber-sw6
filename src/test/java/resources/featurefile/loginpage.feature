@login
Feature: Login Test
  As user I want to login into nop commerce website

  Scenario: verify User Should Navigate To Login Page
    Given I am On login Page
    When I click On login Link
    Then Welcome Message displayed

  Scenario: verify Error Message With Invalid Credentials
    Given I am On login Page
    When I click On login Link
    And I enter email "prime1234@gmail.com"
    And I enter password "prime123"
    And I click on login button
    Then I should see error message displayed

  Scenario: verify That User Should LogIn SuccessFully With Valid Credentials
    Given I am On login Page
    When I click On login Link
    And I enter email "prime1234@gmail.com"
    And I enter password "Prime123"
    And I click on login button
    Then I should  see Logout link displayed


  Scenario:verify That User Should LogOut SuccessFully
    Given I am On login Page
    When I click On login Link
    And I enter email "prime123@gmail.com"
    And I enter password "Prime123"
    And I click on login button
    And I click On logout link
    Then i should see login link is displayed





