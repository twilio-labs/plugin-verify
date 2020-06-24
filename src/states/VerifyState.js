const ACTION_START_VERIFICATION = 'START_VERIFICATION';
const ACTION_CHECK_VERIFICATION = 'CHECK_VERIFICATION';

const initialState = {
  verified: false,
  tokenSent: false,
};

function startVerification(to) {
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
      return data;
    });
}

export class Actions {
  static startVerification = (to) => ({
    type: ACTION_START_VERIFICATION,
    to: to,
  })

  static checkVerification = (token, to) => ({
    type: 'CHECK_VERIFICATION',
    payload: checkVerification(token, to),
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
      return state;
    case `${ACTION_CHECK_VERIFICATION}_FULFILLED`:
      return {
        ...state,
        verified: action.payload.success,
      };
    case `${ACTION_CHECK_VERIFICATION}_REJECTED`:
      return {
        ...state,
        verified: false,
      };
    default: {
      console.log("DEFAULT SAD FACE")
      return state;
    }
  }
}
