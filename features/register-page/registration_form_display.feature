@registration
@registration_display
Feature: Registration Form Display

    As a new user,
    I want to see all necessary registration form elements,
    So that I can register with confidence.

    Background:
        Given the user is on the registration page

    Scenario: All registration form elements are visible
        Then the organization input field is visible
        Then the first name input field is visible
        Then the last name input field is visible
        Then the registration email input field is visible
        Then the registration password input field is visible
        Then the verify password input field is visible
        Then the cell phone input field is visible
        Then the language dropdown is visible
        Then the register button is visible
        Then the missing activation email link is visible
        Then the logo is visible
