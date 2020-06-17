import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions } from '../../states/VerifyState';
import { VerifyButton, VerifyBanner } from './Verify';

const mapStateToProps = (state) => ({
  verified: state['verify'].verify.verified
});

const mapDispatchToProps = (dispatch) => ({
  verify: bindActionCreators(Actions.verify, dispatch),
});

export const VerifyButtonContainer = connect(mapStateToProps, mapDispatchToProps)(VerifyButton);
export const VerifyBannerContainer = connect(mapStateToProps, mapDispatchToProps)(VerifyBanner);
