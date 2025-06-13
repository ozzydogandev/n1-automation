@resend_activation
@resend_activation_invalid_email
Feature: Resend Activation - Invalid Email

    Scenario: User enters an invalid email and sees an error toast
        Given the user is on the resend activation page
        When the user enters "invalid@email.com" in the activation email input field
        And clicks the resend activation submit button
        Then a toast error message "Error while requesting activation email" should be shown
        And the user should remain on the resend activation page
