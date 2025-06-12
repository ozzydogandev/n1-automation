@registration
@registration_positive
Feature: Successful User Registration

    Background:
        Given the user is on the registration page

    Scenario: Register with all valid register details
        When the user enters a valid register organization name
        And the user enters a valid register first name
        And the user enters a valid register last name
        And the user enters a valid register email address
        And the user enters a valid register password
        And the user re-enters the same password in the verify password field
        And the user enters a valid register phone number
        And clicks the register button
        Then the user is taken to the check your email page