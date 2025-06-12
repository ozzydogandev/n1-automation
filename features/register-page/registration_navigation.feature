@registration
@registration_links
Feature: Navigation and Link Validations

    Background:
        Given the user is on the registration page

    Scenario: Return to login
        When the user clicks the logo
        Then the user should be taken to the login page

    Scenario: Click "Missing activation email?" link
        When the user clicks the "Missing activation email?" link
        Then the user should be taken to the activation request page
