import React from 'react';

import { VerifyStyles } from './Verify.Styles';

const Verify = (props) => {
  if (!props.verified) {
    return (
      <VerifyStyles>
        <i className="red">NOT verified</i>
        <i className="accented" onClick={props.verify}>
          verify
        </i>
      </VerifyStyles>
    );
  } else {
    return (
      <VerifyStyles>
        <i className="green">Verified</i>
      </VerifyStyles>
    );
  }
};

export default Verify;
