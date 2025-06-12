@registration
@registration_invalid_organization
Feature: Input Validation on Registration Form

    As a user,
    I want the registration form to validate each field properly,
    So that I am guided to correct my mistakes before submission.

    Background:
        Given the user is on the registration page

    # ---------- ORGANIZATION FIELD VALIDATION ----------

    Scenario: Organization field is empty
        When the user clears the organization field
        And clicks the register button
        Then the organization field should show a required error
        And the organization error text should be red
        And the organization input should have error styling
        And the organization label should be red

    Scenario: Organization field contains only spaces
        When the user enters only spaces in the organization field
        And clicks the register button
        Then the organization field should show a required error
        And the organization error text should be red
        And the organization input should have error styling
        And the organization label should be red
