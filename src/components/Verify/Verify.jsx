import React from 'react';

import { 
  NotVerifiedButtonStyles,
  VerifiedButtonStyles,
  VerifiedBannerStyles,
  InputTokenStyles
} from './Verify.Styles';

export const VerifyButton = (props) => {
  if (props.verified) {
    return (
      <VerifiedButtonStyles>
        VERIFIED
      </VerifiedButtonStyles>
    );
  } else {
    return (
      <NotVerifiedButtonStyles onClick={props.startVerification}>
        VERIFY
      </NotVerifiedButtonStyles>
    );
  }
};

export const TokenForm = (props) => {
  return (
    <InputTokenStyles>HELLOOOOO</InputTokenStyles>
  )
  // if (props.tokenSent) {
  //   return (
  //     <InputTokenStyles>
  //       <input type="text"/>
  //       <input type="submit" onClick={props.checkVerification}/>
  //     </InputTokenStyles>
  //   )
  // } else {
  //   return null;
  // }
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
