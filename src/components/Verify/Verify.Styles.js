import { default as styled } from 'react-emotion';
import { Button } from '@twilio/flex-ui';

const VerifyButton = styled(Button)`
  color: white;
  margin-left: 10px;
`

export const VerifiedButtonStyles = styled(VerifyButton)`
  background: #3d994b;
  pointer-events: none;
`;

export const NotVerifiedButtonStyles = styled(VerifyButton)`
  background: #b03937;
`

export const InputTokenStyles = styled('form')`
  background: #3d994b;
`

export const VerifiedBannerStyles = styled('div')`
  background: #3d994b;
`;


