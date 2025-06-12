@login
@login_positive
Feature: Successful Login

    As a registered user,
    I want to sign in using valid credentials,
    So that I can access my NinjaOne dashboard.

    Background:
        Given the user is on the login page

    Scenario: Login with valid credentials
        When the user enters a valid email and password
        And clicks the "Sign in" button
        Then the user is redirected to MFA page

    Scenario: Login with email in uppercase
        When the user enters a valid email in uppercase in the email field
        And the user enters a valid password
        And clicks the "Sign in" button
        Then the user is redirected to MFA page

    Scenario: Login by pressing Enter key
        When the user enters a valid email and password
        And presses the Enter key
        Then the user is redirected to MFA page

    Scenario: Login with "Keep me signed in" selected
        When the user selects the "Keep me signed in" checkbox
        And the user enters a valid email and password
        And clicks the "Sign in" button
        Then the user is redirected to MFA page
        And the session is persisted

    Scenario: Login by pressing Enter key
        When the user enters a valid email and password
        And presses the Enter key
        Then the user is redirected to MFA page
@totp
    Scenario: Successful login with valid credentials and TOTP code
        When the user enters a totp valid email and password
        And clicks the "Sign in" button
        Then the user is redirected to MFA page
        When the user enters the MFA code
        Then the user is logged in successfully