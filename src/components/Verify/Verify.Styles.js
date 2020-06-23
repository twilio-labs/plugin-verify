import { default as styled } from 'react-emotion';
import { Button } from '@twilio/flex-ui';


export const StartVerifyButtonStyles = styled(Button)`
  color: white;
  background: #b03937;
`

export const InputTokenStyles = styled('form')`
  margin: 0 auto;
`

export const BannerStyles = styled('div')`
  font-weight: bold;
  color: white;
  padding: 8px;
  line-height: normal;
  text-align: center;
`

export const VerifiedBannerStyles = styled(BannerStyles)`
  background: #3d994b;
`;
