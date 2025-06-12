@reset_password_valid
Feature: Valid Reset Password Request via Text

    As a user,
    I want to request a password reset using valid email and phone number
    So that I can receive a password recovery email successfully

    Background:
        Given the user is on the reset password page
        And the user opens the identity method dropdown
        And the user selects "Text"

    Scenario: Valid email and matching last 4 digits of phone number
        When the user enters a valid registered email in the reset password email field
        And the user enters the correct last four digits of their phone number
        And clicks the forgot your password send button
        Then the security code input should be visible and typeable
