@login
@login_links
Feature: Navigation Links on Login Page

    As a user,
    I want to navigate to registration or password recovery easily,
    So that I can access my account or create one.

    Background:
        Given the user is on the login page
        
    Scenario: Forgot password link works
        When the user clicks the Forgot your password link
        Then the user is navigated to the password recovery page

    Scenario: Registration link works
        When the user clicks the Do not have an account link
        Then the user is navigated to the registration page