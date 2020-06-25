import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions } from '../../states/VerifyState';
import { VerifyButton, VerifyBanner, TokenForm, ErrorMessage } from './Verify';

const mapStateToProps = (state) => ({
  verified: state['verify'].verify.verified,
  tokenSent: state['verify'].verify.tokenSent,
  error: state['verify'].verify.error,
});

const mapDispatchToProps = (dispatch) => ({
  startVerification: bindActionCreators(Actions.startVerification, dispatch),
  checkVerification: bindActionCreators(Actions.checkVerification, dispatch),
});

export const VerifyButtonContainer = connect(mapStateToProps, mapDispatchToProps)(VerifyButton);
export const TokenFormContainer = connect(mapStateToProps, mapDispatchToProps)(TokenForm);
export const VerifyBannerContainer = connect(mapStateToProps, mapDispatchToProps)(VerifyBanner);
export const ErrorMessageContainer = connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);
