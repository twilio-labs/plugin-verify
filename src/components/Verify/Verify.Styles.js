import { default as styled } from 'react-emotion';
import { Button } from '@twilio/flex-ui';
// import { formitems } from '@twilio/flex-ui'; //<-- doesn't work
// import { DynamicForm } from '@twilio/flex-ui'; //<-- doesn't work


export const StartVerifyButtonStyles = styled(Button)`
  color: white;
  background: #d32f2f;
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

export const ErrorMessageStyles = styled(BannerStyles)`
  background: #d32f2f;
`

export const VerifiedBannerStyles = styled(BannerStyles)`
  background: #3d994b;
`;
