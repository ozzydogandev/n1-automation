@login
@login_input_validation
Feature: Login Input Field Validation

    As a user,
    I want the login form inputs to behave correctly,
    So that I can have a smooth and secure login experience.

    Background:
        Given the user is on the login page

    Scenario: Email field is typeable
        When the user enters a valid email
        Then the email field should contain the entered email

    Scenario: Password field is typeable
        When the user types a valid password into the password field
        Then the password field should contain the entered password

    Scenario: Password input should be masked
        Then the password field input type should be "password"

    Scenario: Email field accepts alphanumeric and special characters
        When the user enters a valid email with special characters into the email field
        Then the email field should contain the correct value

    Scenario: Password field accepts complex passwords
        When the user enters a complex password with special characters into the password field
        Then the password field should contain the correct value