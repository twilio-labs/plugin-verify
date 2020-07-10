# Twilio Flex Plugin for Verify

![demo video](flex-verify-demo.gif)

## Setup

Install [Node.js](https://nodejs.org) and [`npm`](https://npmjs.com).

Then install the dependencies by running `npm install`:

```bash
npm install
```

`REACT_APP_SERVICE_BASE_URL`: your Twilio Functions base url (this will be available after you deploy your functions). In local development environment, it could be your localhost base url. 

## Development

Start the server by running:

```bash
npm start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`. If you want to change that you can do this by setting the `PORT` environment variable:

```bash
PORT=3001 npm start
```

## Deploy

When you are ready to deploy your plugin, in your terminal run:

```bash
npm run deploy
```

This will publish your plugin as a Private Asset that is accessible by the Functions & Assets API. If you want to deploy your plugin as a Public Asset, you may pass --public to your deploy command:

```bash
npm run deploy --public
```

For more details on deploying your plugin, refer to the [deploying your plugin guide](https://www.twilio.com/docs/flex/plugins#deploying-your-plugin).

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.

## TODO

- [ ] add tests
- [ ] go through @jfischelli's feedback
- [ ] don't show "INFO" tab marker (even tho it's empty) until it's verified
- [ ] add verify service as part of the plugin installation/setup instructions
- [ ] get reviews (@fplacido, @nshetty). Ricky recs: (se: @cavila and @jfischelli, support: @rbeatie or  @dclarke)
- [ ] partner promotion content - talk to justin pirie
- [ ] improve README / write blog post
- [x] reference deployed functions in VerifyState instead
- [x] make verified and tokenSent task specific (task.sid)
- [x] remove task info panel tab until it needs to show up
- [x] condense 'withTaskContext's
- [x] don't hardcode function URLs
- [x] persist verification state on refresh / for duration of the task (localStorage) ? 
- [x] add functions as part of the plugin. see: https://www.twilio.com/blog/flex-plugins-vs-code-functions-cli
- [x] show TaskInfoPanel only if user IS verified
- [x] fix formatting of input token box
- [x] get async functions on send working
- [x] add error display when there's an issue sending the token
- [x] add error display when the code is incorrect
- [x] hide TaskInfoPanel if user is NOT verified
- [x] move verification banner so it's task/user specific101618
- [x] fix promise handling - actually have a pending/fulfilled state
- [x] hide verification banner when the task concludes
- [x] hide verification button if call has ended (in the "post call state")

# Questions for code reviewers

1. I'm not an experienced React or Flex developer, open to any feedback on the general structure/layout!
1. How do I persist state for the duration of a task? Currently the state resets on refresh.
1. This flow requires the agent to type in the code. Is this use case valuable or should I focus on a pre-call automatic authentication (using DTMF input)
1. How would you toggle content viewability based on plugin state? [See this example for what I'm trying to do](https://github.com/robinske/plugin-verify/blob/master/src/VerifyPlugin.js#L62)
1. Is it possible to extend flex-ui form styling? Or should I just be using Material UI? [See this Slack post](https://twilio.slack.com/archives/C782V4C3Z/p1593111279494100)
1. Any other suggestions or ideas?


# Later features
- [ ] automatic authentication before the call is accepted - use dtmf to input code (different plugin?)
- [ ] add resend button
- [ ] use material-ui?
- [ ] add authentication to Twilio functions (https://www.npmjs.com/package/twilio-flex-token-validator)
- [ ] figure out how to deploy functions seamlessly
- [ ] rearchitect with custom actions? https://github.com/twilio-professional-services/flex-dialpad-addon-plugin/blob/c6726b5086162c247d75adcb0851b36845114b51/src/customActions/internalCall/index.js