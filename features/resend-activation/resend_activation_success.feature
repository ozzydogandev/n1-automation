@resendActivation @notActivated
Feature: Resend Activation - Successful Resend

    Scenario: User enters a valid email that has not been activated
        Given the user is on the resend activation page
        When the user enters a valid not activated email in the activation email input field
        And clicks the resend activation submit button
        Then the message "Activation email sent." should be visible
        And the "Go to login" link should be visible
