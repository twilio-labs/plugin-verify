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

- [ ] don't show "INFO" tab marker (even though it's empty) until it's verified
- [ ] improve README / write blog post

# Questions for code reviewers

1. Any ideas how to remove the [`INFO` tab](https://github.com/robinske/plugin-verify/blob/master/src/VerifyPlugin.js#L66) completely until the `verified` state is set to `true`? The current code only removes the tab *content* but not the tab label when the user is not verified.
1. Open to any feedback on the general structure/layout/javascriptyness.


# Later features
- [ ] automatic authentication before the call is accepted - use DTMF to input code ([WIP different plugin](https://github.com/robinske/plugin-auto-verify))
- [ ] add resend button
- [ ] add tests
- [ ] use material-ui for form input and errors
- [ ] maybe: [add authentication to Twilio functions](https://www.npmjs.com/package/twilio-flex-token-validator)
- [ ] maybe: rearchitect with [custom actions?](https://github.com/twilio-professional-services/flex-dialpad-addon-plugin/blob/c6726b5086162c247d75adcb0851b36845114b51/src/customActions/internalCall/index.js)