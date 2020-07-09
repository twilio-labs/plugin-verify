import React from 'react';
import { withTaskContext, Icon, TaskInfoPanel } from '@twilio/flex-ui';

import { 
  StartVerifyButtonStyles,
  VerifiedBannerStyles,
  InputTokenStyles,
  InputContainerStyles,
  TokenSubmitStyles,
  ErrorMessageStyles,
} from './Verify.Styles';


export const VerifyButton = withTaskContext(
  ({verified, tokenSent, task, startVerification}) => {
    if (!verified && !tokenSent && task.status === 'accepted') {
      const to = task.defaultFrom;
      return (
        <StartVerifyButtonStyles onClick={() => startVerification(to, task.sid)}>
          SEND VERIFICATION TOKEN TO USER
        </StartVerifyButtonStyles>
      );
    } else {
      return null;
    }
  }
);

export const TokenForm = withTaskContext(
  ({tokenSent, verified, task, checkVerification}) => {
    if (tokenSent && !verified && task.status === 'accepted') {
      return (
        <InputContainerStyles>
          <InputTokenStyles type="text" placeholder="Verification token" id="token" />
          <TokenSubmitStyles type="button" onClick={() => {
            const token = document.getElementById("token").value;
            checkVerification(token, task.defaultFrom, task.sid);
          }}><Icon icon="AcceptLarge"></Icon></TokenSubmitStyles>
        </InputContainerStyles>
      )
    } else {
      return null;
    }
  }
);

export const VerifyBanner = withTaskContext(({verified, task}) => {
  if (verified && task.status === 'accepted') {
    return (
      <VerifiedBannerStyles>
        CUSTOMER VERIFIED
      </VerifiedBannerStyles>
    );
  } else {
    return null;
  }
});

export const ErrorMessage = ({error}) => {
  if (typeof error != 'undefined') {
    return (
      <ErrorMessageStyles>
        {error}
      </ErrorMessageStyles>
    )
  } else {
    return null;
  }
};

export const AuthenticatedTaskInfoPanel = withTaskContext(({verified}) => {
  if (verified) return <TaskInfoPanel />
  else return null
});
