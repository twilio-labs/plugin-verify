import React from 'react';
import { withTaskContext, Icon, TaskInfoPanel } from '@twilio/flex-ui';

import {
  DisabledButtonStyles,
  StartVerifyButtonStyles,
  VerifiedBannerStyles,
  InputTokenStyles,
  InputContainerStyles,
  TokenSubmitStyles,
  ErrorMessageStyles,
} from './Verify.Styles';


export const VerifyButton = withTaskContext(
  ({verified, pendingSent, tokenSent, task, startVerification, loadState}) => {
    // load task status from localstorage
    loadState(task.sid);

    if (verified || tokenSent || task.status !== 'accepted') {
      return null;
    }

    const to = task.defaultFrom;
    if (pendingSent) {
      return (
        <DisabledButtonStyles>
          verification sent
        </DisabledButtonStyles>
      )
    }

    return (
      <StartVerifyButtonStyles onClick={() => startVerification(to, task.sid)}>
        send verification token to user
      </StartVerifyButtonStyles>
    );
  }
);

export const TokenForm = withTaskContext(
  ({tokenSent, verified, task, checkVerification}) => {
    if (!tokenSent || verified || task.status !== 'accepted') {
      return null;
    }

    return (
      <InputContainerStyles>
        <InputTokenStyles type="text" placeholder="Verification token" id="token" />
        <TokenSubmitStyles type="button" onClick={() => {
          const token = document.getElementById("token").value;
          checkVerification(token, task.defaultFrom, task.sid);
        }}><Icon icon="AcceptLarge"></Icon></TokenSubmitStyles>
      </InputContainerStyles>
    )
  }
);

export const VerifyBanner = withTaskContext(({verified, task}) => {
  if (!verified || task.status !== 'accepted') {
    return null;
  }

  return (
    <VerifiedBannerStyles>
      customer verified
    </VerifiedBannerStyles>
  );
});

export const ErrorMessage = ({error}) => {
  if (typeof error === 'undefined') {
    return null;
  }

  return (
    <ErrorMessageStyles>
      {error}
    </ErrorMessageStyles>
  );
};

export const AuthenticatedTaskInfoPanel = withTaskContext(({verified}) => {
  if (!verified) return null;

  return <TaskInfoPanel />
});
