import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions } from '../../states/VerifyState';
import Verify from './Verify';

const mapStateToProps = (state) => ({
  verified: state['verify'].verify.verified
});

const mapDispatchToProps = (dispatch) => ({
  verify: bindActionCreators(Actions.verify, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
