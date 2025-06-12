@registration
@registration_invalid_cellphone
Feature: Input Validation on Registration Form - Cell Phone section

    As a user,
    I want the registration form to validate each field properly,
    So that I am guided to correct my mistakes before submission.

    Background:
        Given the user is on the registration page

    # ---------- CELL PHONE ----------
    Scenario: Cell phone field is empty
        When the user leaves the cell phone field empty
        And clicks the register button
        Then an invalid phone number error should be shown
        And the cell phone error text should be red
        And the cell phone input should have error styling
        And the cell phone label should be red

    Scenario: Cell phone field does not accept letters
        When the user attempts to type letters in the phone number field
        Then the phone number field should remain empty

    Scenario: Cell phone field shows error when all digits are the same
        When the user enters "9999999999" in the phone number field
        And clicks the register button
        Then an invalid phone number error should be shown
        And the cell phone error text should be red
        And the cell phone input should have error styling
        And the cell phone label should be red

    Scenario: Cell phone field shows error when area code digits are the same
        When the user enters "1112223333" in the phone number field
        And clicks the register button
        Then an invalid phone number error should be shown
        And the cell phone error text should be red
        And the cell phone input should have error styling
        And the cell phone label should be red