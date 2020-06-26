# TODO
[] add functions as part of the plugin. see: https://www.twilio.com/blog/flex-plugins-vs-code-functions-cli
[] show TaskInfoPanel only if user IS verified
[] persist verification state on refresh / for duration of the task
[] add verify service as part of the plugin installation/setup?
[] get reviews (@fplacido, @nshetty). Ricky recs: (se: @cavila and @jfischelli, support: @rbeatie or  @dclarke)
[] partner promotion content - talk to justin pirie
[x] fix formatting of input token box
[x] get async functions on send working
[x] add error display when there's an issue sending the token
[x] add error display when the code is incorrect
[x] hide TaskInfoPanel if user is NOT verified
[x] move verification banner so it's task/user specific101618
[x] fix promise handling - actually have a pending/fulfilled state
[x] hide verification banner when the task concludes
[x] hide verification button if call has ended (in the "post call state")


# Questions for code reviewers

1. I'm not an experienced React developer, open to any feedback on the general structure/layout.
1. How do I persist state for the duration of a task? Currently the state resets on refresh.
1. Is it possible to extend form styling? [See this Slack post](https://twilio.slack.com/archives/C782V4C3Z/p1593111279494100)


# Later features
[] automatic authentication before the call is accepted - use dtmf to input code (different plugin?)
[] add resend button

