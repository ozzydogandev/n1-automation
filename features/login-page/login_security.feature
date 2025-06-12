@login
@login_security
Feature: Login Security and Behavior

    As a user,
    I want secure behavior while logging in,
    So that my credentials and session are safe.

    Background:
        Given the user is on the login page

    Scenario: User cannot access dashboard without login
        When the user navigates directly to the dashboard URL
        Then the user redirected to the login page

    Scenario: SQL injection in email field fails
        When the user enters "' OR 1=1 --" in the email field
        And the user enters a valid password
        And clicks the "Sign in" button
        Then a human verification error message is displayed

    Scenario: Session cookie is created upon successful login
        When the user enters a totp valid email and password
        And clicks the "Sign in" button
        Then the user is redirected to MFA page
        When the user enters the MFA code
        Then the user is logged in successfully
        Then a session cookie is created

    Scenario: Email with leading and trailing spaces fails
        When the user enters email with leading and trailing spaces in the email field
        And the user enters a valid password
        And clicks the "Sign in" button
        Then a human verification error message is displayed

    Scenario: Email and password filled via automation are blocked
        When the user fills the email and password fields using automation
        And clicks the "Sign in" button
        Then a human verification error message is displayed
