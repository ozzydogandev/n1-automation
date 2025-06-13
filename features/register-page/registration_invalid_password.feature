@registration
@registration_invalid_password
Feature: Input Validation on Registration Form - Password Section

    As a user,
    I want the registration form to validate the password field properly,
    So that I am guided to correct my mistakes before submission.

    Background:
        Given the user is on the registration page

    # ---------- PASSWORD VALIDATIONS ----------
    Scenario: Password field is empty
        When the user leaves the register password field empty
        And clicks the register button
        Then the password field should show the general password validation error
        And the password error text should be red
        And the password input should have error styling
        And the password label should be red

    Scenario: Password is too short (less than 8 characters)
        When the user enters "Ab1!" in the register password field
        And clicks the register button
        Then the password field should show the general password validation error
        And the password error text should be red
        And the password input should have error styling
        And the password label should be red

    Scenario: Password exceeds max character limit (more than 72)
        When the user enters a 73-character password in the register password field
        And clicks the register button
        Then the password field should show the general password validation error
        And the password error text should be red
        And the password input should have error styling
        And the password label should be red

    Scenario: Password missing lowercase letters and numbers
        When the user enters "TESTTEST!" in the register password field
        And clicks the register button
        Then the password field should show the general password validation error
        And the password error text should be red
        And the password input should have error styling
        And the password label should be red

    Scenario: Password missing uppercase letters and special characters
        When the user enters "testtest123" in the register password field
        And clicks the register button
        Then the password field should show the general password validation error
        And the password error text should be red
        And the password input should have error styling
        And the password label should be red

    Scenario: Password missing numbers and uppercase letters
        When the user enters "test@#$!" in the register password field
        And clicks the register button
        Then the password field should show the general password validation error
        And the password error text should be red
        And the password input should have error styling
        And the password label should be red

    Scenario: Password missing special characters and lowercase letters
        When the user enters "TEST1234" in the register password field
        And clicks the register button
        Then the password field should show the general password validation error
        And the password error text should be red
        And the password input should have error styling
        And the password label should be red

    Scenario: Password meets only one requirement
        When the user enters "abcdefgh" in the register password field
        And clicks the register button
        Then the password field should show the general password validation error
        And the password error text should be red
        And the password input should have error styling
        And the password label should be red

    Scenario: Password meets three valid criteria
        When the user enters "abc123!!" in the register password field
        Then the password field should not show an error

    Scenario: Password meets all four criteria
        When the user enters "Abc123!" in the register password field
        Then the password field should not show an error
