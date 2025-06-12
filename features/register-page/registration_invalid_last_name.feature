@registration
@registration_invalid_last_name
Feature: Input Validation on Registration Form - First Name section

    As a user,
    I want the registration form to validate each field properly,
    So that I am guided to correct my mistakes before submission.

    Background:
        Given the user is on the registration page

    Scenario: Last name field is empty
        When the user clears the last name field
        And clicks the register button
        Then the last name field should show a required error
        And the last name error text should be red
        And the last name input should have error styling
        And the last name label should be red

    Scenario: Last name field contains only spaces
        When the user enters only spaces in the last name field
        And clicks the register button
        Then the last name field should show a required error
        And the last name error text should be red
        And the last name input should have error styling
        And the last name label should be red
