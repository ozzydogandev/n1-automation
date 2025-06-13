@resend_activation
@resend_activation_login_navigation
Feature: Resend Activation - Login Navigation

    Scenario: Clicking "Go to login" from already activated confirmation
        Given the user is on the resend activation page
        When the user enters a valid already activated email in the activation email input field
        And clicks the resend activation submit button
        Then the message "The specified email already has an activated account." should be visible
        When the user clicks the "Go to login" link
        Then the login page should be displayed

    Scenario: Clicking "Go to login" from successful resend confirmation
        Given the user is on the resend activation page
        When the user enters a valid not activated email in the activation email input field
        And clicks the resend activation submit button
        Then the message "Activation email sent." should be visible
        When the user clicks the "Go to login" link
        Then the login page should be displayed
