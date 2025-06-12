@login
@login_checkbox
Feature: Keep Me Signed In Checkbox

    As a user,
    I want to stay signed in across sessions,
    So that I don’t have to log in every time.

    Background:
        Given the user is on the login page

    Scenario: Checkbox can be toggled
        Then the checkbox should be unselected by default
        When the user clicks the checkbox
        Then it becomes selected
