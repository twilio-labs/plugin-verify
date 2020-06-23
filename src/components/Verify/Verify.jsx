import React from 'react';
import { withTaskContext } from '@twilio/flex-ui';

import { 
  StartVerifyButtonStyles,
  VerifiedBannerStyles,
  InputTokenStyles,
} from './Verify.Styles';


const StartVerifyButton = (props) => {
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

export const VerifyButton = withTaskContext(StartVerifyButton);

export const TokenForm = (props) => {
  if (props.tokenSent && !props.verified) {
    return (
      <div>
        <InputTokenStyles>
          <input type="text" placeholder="verification token" name="token" />
          <input type="button" value="Verify" onClick={e => props.checkVerification(e.target.value)} />
          <input type="button" value="Resend" onClick={() => props.startVerification("+12313576187")} />
        </InputTokenStyles>
      </div>
    )
  } else {
    return null;
  }
}

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
