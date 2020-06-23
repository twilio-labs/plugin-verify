const ACTION_START_VERIFICATION = 'START_VERIFICATION';
const ACTION_CHECK_VERIFICATION = 'CHECK_VERIFICATION';

const initialState = {
  verified: false,
  tokenSent: false,
};

function startVerification(to) {
  console.log("To: ", to);
  const body = { 
    to: to 
  };

  const options = {
    method: 'POST',
    body: new URLSearchParams(body),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  };

  fetch('http://flex-verify-4625-dev.twil.io/start-verify', options)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      return data.success;
    });
}

function checkVerification(token, to) {
  console.log(token);
  console.log(to);
  const body = { 
    to: to,
    verification_code: token,
  };

  const options = {
    method: 'POST',
    body: new URLSearchParams(body),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  };

  return fetch('http://flex-verify-4625-dev.twil.io/check-verify', options)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      return data.success;
    });
}

export class Actions {
  static startVerification = (to) => ({
    type: ACTION_START_VERIFICATION,
    to: to,
  })

  static checkVerification = (token, to) => ({
    type: ACTION_CHECK_VERIFICATION,
    token: token,
    to: to,
  })
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_START_VERIFICATION: {
      startVerification(action.to);
      return {
        ...state,
        tokenSent: true,
      }
    }

    case `${ACTION_CHECK_VERIFICATION}_PENDING`:
      console.log("=====================================")
      console.log("==========PENDING=========")
      console.log("=====================================")
      return state;
  
    case `${ACTION_CHECK_VERIFICATION}_FULFILLED`: {
      console.log("=====================================")
      console.log("==========FULFILLED=========")
      console.log(action.verified.success);
      console.log("=====================================")
      return {
        ...state,
        verified: action.verified.success,
      }
    }

    case ACTION_CHECK_VERIFICATION: {
      // todo this is still what gets triggered, why doesn't the pending/fulfilled work?
      // see: https://www.twilio.com/docs/flex/ui/redux#writing-asynchronous-actions
      console.log("=====================================")
      console.log("==========NO PROMISE HANDLING========")
      const verified = Promise.resolve(checkVerification(action.token, action.to))
      console.log(verified);
      console.log("=====================================")
      return {
        ...state,
        verified: verified,
      }
    }

    case `${ACTION_CHECK_VERIFICATION}_REJECTED`:
      console.log("=====================================")
      console.log("==========REJECTED=========")
      console.log("=====================================") 
      return state;

    default:
      return state;
  }
}
