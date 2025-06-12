@registration
@registration_invalid_verify_password
Feature: Input Validation on Registration Form - Email Section

    As a user,
    I want the registration form to validate each field properly,
    So that I am guided to correct my mistakes before submission.

    Background:
        Given the user is on the registration page

    # ---------- VERIFY PASSWORD ----------
    Scenario: Verify password is empty
        When the user fills register password field with "Test123!"
        And clears the verify password field
        And clicks the register button
        And the verify password input should have error styling
        And the verify password label should be red

    Scenario: Passwords do not match
        When the user enters "Test123!" in the register password field
        And the user enters "Mismatch1!" in the verify password field
        And clicks the register button
        Then a password mismatch error should be shown
        And the verify password error text should be red
        And the verify password input should have error styling
        And the verify password label should be red

    Scenario: Passwords match
        When the user enters "Test123!" in the register password field
        And the user enters "Test123!" in the verify password field
        Then the verify password field should not show an error