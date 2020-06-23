const ACTION_START_VERIFICATION = 'START_VERIFICATION';
const ACTION_CHECK_VERIFICATION = 'CHECK_VERIFICATION';

const initialState = {
  verified: false,
  tokenSent: false,
};

function startVerification(to) {
  console.log("To: ", to);
  // const body = { 
  //   to: "+12313576187"
  // };

  // const options = {
  //   method: 'POST',
  //   body: new URLSearchParams(body),
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //   }
  // };

  // fetch('http://flex-verify-4625-dev.twil.io/start-verify', options)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     console.log(data);
  //     return data.success;
  //   });
}

function checkVerification(event) {
  console.log(event);
  console.log('VERIFICATION CHECKED!!!!');
  // const body = { 
  //   to: '+12313576187',
  //   verification_code: '123456',
  // };

  // const options = {
  //   method: 'POST',
  //   body: new URLSearchParams(body),
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  //   }
  // };

  // fetch('http://flex-verify-4625-dev.twil.io/check-verify', options)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     console.log(data);
  //     return data.success;
  //   });
  return true;
}

export class Actions {
  static startVerification = (to) => ({
    type: ACTION_START_VERIFICATION,
    to: to,
  })

  static checkVerification = (token) => ({
    type: ACTION_CHECK_VERIFICATION,
    token: token,
  })
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_START_VERIFICATION: {
      startVerification(action.to);
      return {
        ...state,
        tokenSent: true,
        to: action.to,
      }
    }

    case ACTION_CHECK_VERIFICATION: {
      var verified = checkVerification(action.token);
      return {
        ...state,
        verified: verified,
      }
    }

    default:
      return state;
  }
}
