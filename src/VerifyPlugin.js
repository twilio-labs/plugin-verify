import React from 'react';
import { VERSION } from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import {
  StateLoaderContainer,
  VerifyButtonContainer,
  VerifyBannerContainer,
  TokenFormContainer,
  ErrorMessageContainer,
  AuthenticatedInfoContainer,
} from './components/Verify/Verify.Container';
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'VerifyPlugin';

export default class VerifyPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    this.registerReducers(manager);

    flex.TaskCanvas.Content.add(<StateLoaderContainer key="load-state" />);

    flex.TaskCanvas
      .Content
      .add(
        <VerifyBannerContainer key="verify-banner" />,
        { sortOrder: -1 }
      );

    flex.TaskCanvas
      .Content
      .add(
        <ErrorMessageContainer key="error-message" />,
        { sortOrder: -1 }
      )

    flex.TaskCanvas
      .Content
      .add(
        <VerifyButtonContainer key="verify-button" />,
        { sortOrder: 0 }
      );
    
    flex.TaskCanvas
      .Content
      .add(
        <TokenFormContainer key="token-form" />,
        { sortOrder: 0 }
      );

    // Remove caller information until they are verifiied
    flex.TaskCanvasTabs.Content.remove("info");

    // Show caller information when they are verified
    flex.TaskCanvasTabs.Content.add(
      <AuthenticatedInfoContainer label="info" key="auth-info"/>
    );
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
