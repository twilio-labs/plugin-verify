import React from 'react';
import { withTaskContext, Icon } from '@twilio/flex-ui';

import { 
  StartVerifyButtonStyles,
  VerifiedBannerStyles,
  InputTokenStyles,
  InputContainerStyles,
  TokenSubmitStyles,
  ErrorMessageStyles,
} from './Verify.Styles';


const StartVerify = (props) => {
  if (!props.verified && !props.tokenSent && props.task.status === 'accepted') {
    console.log(props.task);
    const to = props.task.defaultFrom;
    return (
      <StartVerifyButtonStyles onClick={() => props.startVerification(to)}>
        SEND VERIFICATION TOKEN TO USER
      </StartVerifyButtonStyles>
    );
  } else {
    return null;
  }
};

export const VerifyButton = withTaskContext(StartVerify);

export const CheckVerify = (props) => {
  // if (props.tokenSent && !props.verified && props.task.status === 'accepted') {
    return (
      <InputContainerStyles>
        <InputTokenStyles type="text" placeholder="Verification token" id="token" />
        <TokenSubmitStyles type="button" onClick={() => {
          const token = document.getElementById("token").value;
          props.checkVerification(token, props.task.defaultFrom);
        }}><Icon icon="AcceptLarge"></Icon></TokenSubmitStyles>
      </InputContainerStyles>
    )
  // } else {
  //   return null;
  // }
}

export const TokenForm = withTaskContext(CheckVerify);

const ShowVerifyStatus = (props) => {
  if (props.verified && props.task.status === 'accepted') {
    return (
      <VerifiedBannerStyles>
        CUSTOMER VERIFIED
      </VerifiedBannerStyles>
    );
  } else {
    return null;
  }
};

export const VerifyBanner = withTaskContext(ShowVerifyStatus)

export const ErrorMessage = (props) => {
  if (typeof props.error != 'undefined') {
    return (
      <ErrorMessageStyles>
        {props.error}
      </ErrorMessageStyles>
    )
  } else {
    return null;
  }
}

const TaskInfoPanel = (props) => {
  console.log(props.flex);
}

export const AuthenticatedTaskInfoPanel = withTaskContext(TaskInfoPanel)
