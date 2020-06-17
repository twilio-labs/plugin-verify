import React from 'react';

import { NotVerifiedStyles, VerifiedStyles, VerifiedBannerStyles } from './Verify.Styles';

export const VerifyButton = (props) => {
  if (!props.verified) {
    return (
      <NotVerifiedStyles onClick={props.verify}>
        VERIFY
      </NotVerifiedStyles>
    );
  } else {
    return (
      <VerifiedStyles>
        VERIFIED
      </VerifiedStyles>
    );
  }
};

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
