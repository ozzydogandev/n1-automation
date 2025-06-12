@reset_password
@reset_password_text_invalid
Feature: Reset Password via Text - Invalid Scenarios

    As a user,
    I want to be guided when entering incorrect email or phone information,
    So that I know how to correct mistakes and successfully reset my password.

    Background:
        Given the user is on the reset password page
        And the user opens the identity method dropdown
        And the user selects "Text"

    Scenario: Email field shows error when left empty
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: Email field shows error when missing '@'
        When the user enters "asd" in the reset password email field
        And the user enters "1234" in the reset password phone number field
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: Email field shows error when missing domain
        When the user enters "asd@" in the reset password email field
        And the user enters "1234" in the reset password phone number field
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: Email field shows error when missing TLD
        When the user enters "asd@asd" in the reset password email field
        And the user enters "1234" in the reset password phone number field
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: Email field shows error when space is present
        When the user enters "asd @asd.com" in the reset password email field
        And the user enters "1234" in the reset password phone number field
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: Error is shown when phone number does not match user
        When the user enters a valid registered email in the reset password email field
        And the user enters incorrect last 4 digits of their phone number
        And clicks the forgot your password send button
        Then an error toast with "Error during password reset" should be shown
