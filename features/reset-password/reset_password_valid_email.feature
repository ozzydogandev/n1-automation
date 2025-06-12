@reset_password
@reset_password_valid_email
Feature: Password Reset - Valid Email Flow

    As a user,
    I want to reset my password using a valid email address,
    So that I can regain access to my account.

    Background:
        Given the user is on the reset password page
        And the user opens the identity method dropdown
        And the user selects "Email"

    Scenario: Password recovery modal is shown when a valid email is entered
        When the user enters a valid registered email in the reset password email field
        And clicks the forgot your password send button
        Then a password recovery modal with "Password recovery email sent" should be shown
