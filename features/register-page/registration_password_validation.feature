@registration
@registration_password
Feature: Password Field Validation

    Background:
        Given the user is on the registration page

    Scenario: Password field masks input
        Then the password and verify password fields should be of type "password"