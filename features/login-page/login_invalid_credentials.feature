@login
@login_negative
Feature: Failed Login Attempt

    As a user,
    I want to be notified if my credentials are incorrect,
    So that I can retry logging in.

    Background:
        Given the user is on the login page

    Scenario: Login with incorrect password
        When the user enters a valid email and an invalid password
        And clicks the "Sign in" button
        Then an error message is displayed

    Scenario: Login with unregistered email
        When the user enters an unregistered email and any password
        And clicks the "Sign in" button
        Then an error message is displayed

    Scenario: Login with email containing leading spaces
        When the user enters email with leading spaces in the email field
        And the user enters a valid password
        And clicks the "Sign in" button
        Then an error message is displayed
        And both input fields and labels are highlighted in red

    Scenario: Login with email containing tailing spaces
        When the user enters email with tailing spaces in the email field
        And the user enters a valid password
        And clicks the "Sign in" button
        Then an error message is displayed
        And both input fields and labels are highlighted in red

    Scenario: Login with both fields empty
        When the user clicks the "Sign in" button
        Then a toast error message is displayed
        And both input fields and labels are highlighted in red

    Scenario: Login with missing password
        When the user enters a valid email in the email field
        And clicks the "Sign in" button
        Then a toast error message is displayed
        And only the password input and label are red

    Scenario: Login with missing email
        When the user enters a valid password in the password field
        And clicks the "Sign in" button
        Then a toast error message is displayed
        And only the email input and label are red

    Scenario: Login with email in uppercase and wrong password
        When the user enters a valid email in uppercase in the email field
        And the user enters an invalid password
        And clicks the "Sign in" button
        Then an error message is displayed

    Scenario: Login with space-only email and password
        When the user enters "     " in the email field
        And the user enters "     " in the password field
        And clicks the "Sign in" button
        Then a toast error message is displayed
        And both input fields and labels are highlighted in red
