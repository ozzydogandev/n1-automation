@reset_password
@reset_password_display
Feature: Reset Password Form Display

    As a user,
    I want to see the correct form fields based on the identity method selected,
    So that I can reset my password without confusion.

    Background:
        Given the user is on the reset password page
        Then the identity method dropdown is visible

    Scenario: Form elements are correct when "Email" is selected
        When the user opens the identity method dropdown
        And the user selects "Email"
        Then the reset password logo is visible
        Then the reset password email input field is visible
        Then the reset password send button is visible
        Then the last four digits of phone number input field should NOT be visible

    Scenario: Form elements are correct when "Text" is selected
        When the user opens the identity method dropdown
        And the user selects "Text"
        Then the reset password logo is visible
        Then the reset password email input field is visible
        Then the last four digits of phone number input field is visible
        Then the reset password send button is visible