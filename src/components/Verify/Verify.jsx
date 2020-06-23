import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';

import { 
  StartVerifyButtonStyles,
  VerifiedBannerStyles,
  InputTokenStyles,
} from './Verify.Styles';


const StartVerify = (props) => {
  if (!props.verified && !props.tokenSent) {
    const to = props.task.defaultFrom;
    console.log(to);
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
  if (props.tokenSent && !props.verified) {
    return (
      <div>
        <InputTokenStyles>
          <input type="text" placeholder="verification token" id="token" />
          <input type="button" value="Verify" onClick={() => {
            const token = document.getElementById("token").value;
            props.checkVerification(token, props.task.defaultFrom);
          }} />
          {/* <input type="button" value="Resend" onClick={() => props.startVerification(props.to)} /> */}
        </InputTokenStyles>
      </div>
    )
  } else {
    return null;
  }
}

export const TokenForm = withTaskContext(CheckVerify);

export const VerifyBanner = (props) => {
  if (props.verified) {
    return (
      <VerifiedBannerStyles>
        CUSTOMER VERIFIED
      </VerifiedBannerStyles>
    );
  } else {
    return null;
  }
};
