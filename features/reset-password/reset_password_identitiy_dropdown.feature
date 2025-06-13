@reset_password
@reset_password_dropdown
Feature: Verify Identity Method Dropdown

    As a user on the reset password page,
    I want to choose how to verify my identity,
    So that I can receive a reset link via Email or Text

    Background:
        Given the user is on the reset password page

    Scenario: Dropdown defaults to Email
        Then the identity method dropdown should display "Email"

    Scenario: Dropdown shows both Email and Text options
        When the user opens the identity method dropdown
        Then the dropdown should contain "Email" option
        And the dropdown should contain "Text" option

    Scenario: User selects "Text" from the dropdown
        When the user opens the identity method dropdown
        And the user selects "Text"
        Then the identity method dropdown should display "Text"

    Scenario: User re-selects "Email" from the dropdown
        When the user opens the identity method dropdown
        And the user selects "Email"
        Then the identity method dropdown should display "Email"