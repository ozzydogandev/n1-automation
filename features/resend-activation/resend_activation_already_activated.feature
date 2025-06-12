@resendActivation @alreadyActivated
Feature: Resend Activation - Already Activated Email

    Scenario: User enters an already activated email
        Given the user is on the resend activation page
        When the user enters a valid already activated email in the activation email input field
        And clicks the resend activation submit button
        Then the message "The specified email already has an activated account." should be visible
        And the "Go to login" link should be visible
