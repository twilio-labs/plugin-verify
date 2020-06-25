import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';


import { 
  StartVerifyButtonStyles,
  VerifiedBannerStyles,
  InputTokenStyles,
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
  if (props.tokenSent && !props.verified && props.task.status === 'accepted') {
    return (
      <div>
        <InputTokenStyles>
          <input type="text" placeholder="Verification token" id="token" />
          <input type="button" value="Verify" onClick={() => {
            const token = document.getElementById("token").value;
            props.checkVerification(token, props.task.defaultFrom);
          }} />
        </InputTokenStyles>
      </div>
    )
  } else {
    return null;
  }
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
  console.log("props.error: ", props.error);
  console.log("props: ", props);
  console.log("typeof props.error: ", typeof props.error);
  // TODO - get this to show up somehow
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
  if (props.verified) {
    return (
      <VerifiedBannerStyles>
        CUSTOMER VERIFIED
      </VerifiedBannerStyles>
    );
  } else {
    return null;
  }
}

export const AuthenticatedTaskInfoPanel = withTaskContext(TaskInfoPanel)
