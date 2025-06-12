@registration
@registration_invalid_email
Feature: Input Validation on Registration Form - Email Section

    As a user,
    I want the registration form to validate each field properly,
    So that I am guided to correct my mistakes before submission.

    Background:
        Given the user is on the registration page
   
    # ---------- EMAIL ----------
    Scenario: Email field shows error when left empty
        And clicks the register button
        When the user leaves the registration email field blank
        Then an invalid email error should be shown
        And the email error text should be red
        And the email input should have error styling
        And the email label should be red

    Scenario: Email field shows error when missing '@'
        And clicks the register button
        When the user enters "asd" in the registration email field
        Then an invalid email error should be shown
        And the email error text should be red
        And the email input should have error styling
        And the email label should be red

    Scenario: Email field shows error when missing domain after '@'
        And clicks the register button
        When the user enters "asd@" in the registration email field
        Then an invalid email error should be shown
        And the email error text should be red
        And the email input should have error styling
        And the email label should be red

    Scenario: Email field shows error when missing top-level domain
        And clicks the register button
        When the user enters "asd@asd" in the registration email field
        Then an invalid email error should be shown
        And the email error text should be red
        And the email input should have error styling
        And the email label should be red

    Scenario: Email field shows error when dot is used incorrectly
        And clicks the register button
        When the user enters "asd@." in the registration email field
        Then an invalid email error should be shown
        And the email error text should be red
        And the email input should have error styling
        And the email label should be red

    Scenario: Email field shows error when domain ends with a dot
        And clicks the register button
        When the user enters "asd@asd." in the registration email field
        Then an invalid email error should be shown
        And the email error text should be red
        And the email input should have error styling
        And the email label should be red

    Scenario: Email field shows error with space in the middle
        And clicks the register button
        When the user enters "asd @asd.com" in the registration email field
        Then an invalid email error should be shown
        And the email error text should be red
        And the email input should have error styling
        And the email label should be red
@same_email
    Scenario: Register with already registered email address
        When the user enters a valid register organization name
        And the user enters a valid register first name
        And the user enters a valid register last name
        And the user enters an already registered email address
        And the user enters a valid register password
        And the user re-enters the same password in the verify password field
        And the user enters a valid register phone number
        And clicks the register button
        Then an email has already been registered error should be shown
        And the email has already been registered error text should be red
        And the email input should have error styling
        And the email label should be red
