@login
@login_display
Feature: Login Form Display

    As a user,
    I want to see the login form elements clearly,
    So that I can attempt to sign in without confusion.

    Background:
        Given the user is on the login page

    Scenario: All form elements are visible
        Then the email input field is visible
        Then the password input field is visible
        Then the keep me signed in checkbox is visible
        Then the sign in button is visible
        Then the login "Forgot your password?" link is visible
        Then the login "Do not have an account?" link is visible
        Then the login "Footer" text is visible
        Then the login "Contact us" link is visible