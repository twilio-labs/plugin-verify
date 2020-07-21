# Twilio Flex Plugin for Verify

![demo video](flex-verify-demo.gif)

## Setup

Requirements:

1. [Node](https://nodejs.org/en/download/) version 10.19.0 or later (check version in your terminal with `node -v`).
1. A [Twilio account](https://www.twilio.com/try-twilio).
1. A Flex project. [Create a Flex project in the console](https://www.twilio.com/docs/flex/quickstart/getting-started-plugin#create-a-hosted-twilio-flex-instance).
1. A Verify service. [Create a new Verify service in the console](https://www.twilio.com/console/verify/services).
1. The Twilio CLI. [Install the CLI for your operating system](https://www.twilio.com/docs/twilio-cli/quickstart#install-twilio-cli) and login with your Flex account credentials using twilio login.
1. The Twilio serverless plugin. Install from the command line with `twilio plugins:install @twilio-labs/plugin-serverless`. More details in the [docs](https://www.twilio.com/docs/labs/serverless-toolkit/getting-started).
1. The Twilio Flex plugin. Install from the command line with `twilio plugins:install @twilio-labs/plugin-flex`. More details on [GitHub](https://github.com/twilio-labs/plugin-flex).

After cloning this repository, install dependencies with `npm`:
```
npm install
```

### Deploy verification serverless functions
Copy the serverless config example and fill in the `ACCOUNT_SID`, `AUTH_TOKEN`, and `VERIFY_SERVICE_SID`:
```
cp serverless/.env.serverless.example serverless/.env
```
Deploy the functions with the Twilio CLI:
```
twilio serverless:deploy
```
Save the function URLs that display with the deployment details

Copy the.env.example in the project root to .env:

```
# in the project root
cp .env.example .env
```
Update the REACT_APP_SERVICE_BASE_URL to be your new function url.
```
REACT_APP_SERVICE_BASE_URL="http://verify-plugin-1234-dev.twil.io"
```

### Run the plugin locally

```
twilio flex:plugins:start
```

### Deploy the plugin
```
twilio flex:plugins:deploy
```

## Known issues

- "INFO" tab marker shows (even though it's empty) when the user is not verified

## Todo
- [ ] fix "INFO" tab marker
- [ ] automatic authentication before the call is accepted - use DTMF to input code ([WIP different plugin](https://github.com/robinske/plugin-auto-verify))
- [ ] add resend button
- [ ] add tests
- [ ] use material-ui for form input and errors
- [ ] maybe: [add authentication to Twilio functions](https://www.npmjs.com/package/twilio-flex-token-validator)
- [ ] maybe: add ability for agent to cancel a verification
- [ ] maybe: rearchitect with [custom actions?](https://github.com/twilio-professional-services/flex-dialpad-addon-plugin/blob/c6726b5086162c247d75adcb0851b36845114b51/src/customActions/internalCall/index.js)

## Code of Conduct

This project adheres to the [Twilio Labs Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md).

## Contributing

This project welcomes contributions. Please check out our [contributing guide](CONTRIBUTING.md) to learn more on how to get started.

## License

MIT © Twilio Inc.