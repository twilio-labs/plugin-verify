import { default as styled } from 'react-emotion';
import { Button } from '@twilio/flex-ui';

const VerifyButton = styled(Button)`
  color: white;
`

export const VerifiedStyles = styled(VerifyButton)`
  background: #3d994b;
  pointer-events: none;
`;

export const VerifiedBannerStyles = styled('div')`
  background: #3d994b;
`;

export const NotVerifiedStyles = styled(VerifyButton)`
  background: #b03937;
`
