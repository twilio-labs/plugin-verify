# TODO
[] add error display when the code is incorrect
[] add error display when there's an issue sending the token
[] show TaskInfoPanel if user IS verified
[] persist verification state on refresh / for duration of the task
[] fix formatting of input token box
[] add verify service as part of the plugin installation/setup?
[] add functions as part of the plugin. see: https://www.twilio.com/blog/flex-plugins-vs-code-functions-cli
[] get reviews (@fplacido, @nshetty). Ricky recs: (se: @cavila and @jfischelli, support: @rbeatie or  @dclarke)
[x] hide TaskInfoPanel if user is NOT verified
[x] move verification banner so it's task/user specific101618
[x] fix promise handling - actually have a pending/fulfilled state
[x] hide verification banner when the task concludes
[x] hide verification button if call has ended (in the "post call state")


# Questions for code reviewers

1. I'm not an experienced React developer, open to any feedback on the general structure/layout.
1. TBD


# Later features
[] add resend button
[] automatic authentication before the call is accepted (different plugin?)
