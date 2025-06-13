@resend_activation
@resend_activation_form_displays
Feature: Resend Activation Form Display

    As a user,
    I want to see all elements of the Resend Activation modal,
    So that I can resend my activation email without confusion.

    Background:
        Given the user is on the resend activation page

    Scenario: Resend activation modal elements are visible
        Then the resend activation logo is visible
        Then the "Resend Activation" title is visible
        Then the email label is visible
        Then the activation email input field is visible
        Then the submit button is visible
