@registration
@registration_invalid_first_name
Feature: Input Validation on Registration Form - First Name section

    As a user,
    I want the registration form to validate each field properly,
    So that I am guided to correct my mistakes before submission.

    Background:
        Given the user is on the registration page

    Scenario: First name field is empty
        When the user clears the first name field
        And clicks the register button
        Then the first name field should show a required error
        And the first name error text should be red
        And the first name input should have error styling
        And the first name label should be red

    Scenario: First name field contains only spaces
        When the user enters only spaces in the first name field
        And clicks the register button
        Then the first name field should show a required error
        And the first name error text should be red
        And the first name input should have error styling
        And the first name label should be red