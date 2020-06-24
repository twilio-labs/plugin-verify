Installation workflow:

Node script?
1. Create Verify service
1. Deploy 2 verify functions


# TODO
[x] hide TaskInfoPanel if user is NOT verified
[x] move verification banner so it's task/user specific101618
[x] fix promise handling - actually have a pending/fulfilled state
[x] hide verification banner when the task concludes
[x] hide verification button if call has ended (in the "post call state")
[] add error display when the code is incorrect
[] add error display when there's an issue sending the token
[] show TaskInfoPanel if user IS verified
[] persist verification state on refresh / for duration of the task
[] fix formatting of input token box



# Later features
- add resend button


MVP workflow:
1. Agent clicks a button to "verify customer", that sends a verification to the customer

- Default SMS
- TaskCanvasHeader (button next to end chat?)
- Later: choose method

2. Customer reads/types the code to the agent

3. Agent has a box to input the code

- TaskCanvasHeader input box that appears after the code is sent successfully

4. If correct, customer view is updated to be "verified"

- this displays the TaskInfoPanel tab