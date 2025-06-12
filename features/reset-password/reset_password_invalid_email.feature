@reset_password
@reset_password_invalid_email
Feature: Input Validation on Reset Password Form - Email Field

    As a user,
    I want the reset password form to prevent submission with an invalid email,
    So that I don’t proceed without providing a valid email address.

    Background:
        Given the user is on the reset password page
        And the user opens the identity method dropdown
        And the user selects "Email"

    Scenario: Email field shows no feedback but user cannot proceed when left empty
        When the user leaves the reset password email field blank
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: User enters email without '@' symbol
        When the user enters "asd" in the reset password email field
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: User enters email missing domain after '@'
        When the user enters "asd@" in the reset password email field
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: User enters email missing top-level domain
        When the user enters "asd@asd" in the reset password email field
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: User enters email with dot used incorrectly
        When the user enters "asd@." in the reset password email field
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: User enters email with domain ending in a dot
        When the user enters "asd@asd." in the reset password email field
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    Scenario: User enters email with space in the middle
        When the user enters "asd @asd.com" in the reset password email field
        And clicks the forgot your password send button
        Then the user should not be able to proceed

    @reset_password_toast
    Scenario: Email format is valid but not a registered user
        When the user enters a non-existent but valid email in the reset password email field
        And clicks the forgot your password send button
        Then an error toast with "Error during password reset" should be shown
