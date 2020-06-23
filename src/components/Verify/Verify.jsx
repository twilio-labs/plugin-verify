import React from 'react';

import { 
  NotVerifiedButtonStyles,
  VerifiedButtonStyles,
  VerifiedBannerStyles,
  InputTokenStyles
} from './Verify.Styles';

export const VerifyButton = (props) => {
  if (!props.verified) {
    return (
      <NotVerifiedButtonStyles onClick={props.startVerification}>
        VERIFY
      </NotVerifiedButtonStyles>
    );
  } else {
    return (
      <VerifiedButtonStyles>
        VERIFIED
      </VerifiedButtonStyles>
    );
  }
};

export const TokenForm = (props) => {
  return (
    <InputTokenStyles>
      <input type="text"/>
      <input type="submit"/>
    </InputTokenStyles>
  )
}

export const VerifyBanner = (props) => {
  if (!props.verified) {
    return null;
  } else {
    return (
      <VerifiedBannerStyles>
        CUSTOMER VERIFIED
      </VerifiedBannerStyles>
    );
  }
};
