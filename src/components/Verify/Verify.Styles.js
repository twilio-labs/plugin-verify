import { default as styled } from 'react-emotion';
import { Button } from '@twilio/flex-ui';

export const InputContainerStyles = styled('div')`
  display: flex;
  align-items: center;
  padding: 6px 10px;
`;

export const InputTokenStyles = styled('input')`
  width: 75%;
  border-radius: 5px;
  padding: 6px;
  border: 1px solid #ccc;
  margin-right: 10px;
`

export const TokenSubmitStyles = styled(Button)`
  width: 20%;
  color: white;
  background: #3d994b;
`

export const StartVerifyButtonStyles = styled(Button)`
  color: white;
  background: #d32f2f;
  text-transform: uppercase;
`

export const DisabledButtonStyles = styled(Button)`
  disabled: true;
  color: white;
  background: #d3d3d3;
  text-transform: uppercase;
`

export const BannerStyles = styled('div')`
  font-weight: bold;
  color: white;
  padding: 8px;
  line-height: normal;
  text-align: center;
`

export const ErrorMessageStyles = styled(BannerStyles)`
  background: #d32f2f;
`

export const VerifiedBannerStyles = styled(BannerStyles)`
  background: #3d994b;
  text-transform: uppercase;
`;
