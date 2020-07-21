import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions } from '../../states/VerifyState';
import {
  VerifyButton,
  VerifyBanner,
  TokenForm,
  ErrorMessage,
  AuthenticatedTaskInfoPanel,
} from './Verify';

const mapStateToProps = (state) => ({
  pendingSent: state['verify'].verify.pendingSent,
  verified: state['verify'].verify.verified,
  tokenSent: state['verify'].verify.tokenSent,
  error: state['verify'].verify.error,
});

const mapDispatchToProps = (dispatch) => ({
  loadState: bindActionCreators(Actions.loadState, dispatch),
  startVerification: bindActionCreators(Actions.startVerification, dispatch),
  checkVerification: bindActionCreators(Actions.checkVerification, dispatch),
});

const connectVerify = connect(mapStateToProps, mapDispatchToProps);

export const VerifyButtonContainer = connectVerify(VerifyButton);
export const TokenFormContainer = connectVerify(TokenForm);
export const VerifyBannerContainer = connectVerify(VerifyBanner);
export const ErrorMessageContainer = connectVerify(ErrorMessage);
export const AuthenticatedInfoContainer = connectVerify(AuthenticatedTaskInfoPanel);
