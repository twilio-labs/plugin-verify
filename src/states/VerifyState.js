const ACTION_START_VERIFICATION = 'START_VERIFICATION';
const ACTION_CHECK_VERIFICATION = 'CHECK_VERIFICATION';

const initialState = {
  verified: false,
  tokenSent: false,
  error: undefined,
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

  const { REACT_APP_SERVICE_BASE_URL } = process.env;

  return fetch(`${REACT_APP_SERVICE_BASE_URL}/start-verify`, options)
    .then(resp => resp.json())
    .then(data => {
      return data;
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

  const { REACT_APP_SERVICE_BASE_URL } = process.env;

  return fetch(`${REACT_APP_SERVICE_BASE_URL}/check-verify`, options)
    .then(resp => resp.json())
    .then(data => {
      return data;
    });
}

export class Actions {
  static startVerification = (to, taskId) => ({
    type: ACTION_START_VERIFICATION,
    payload: startVerification(to),
    taskId: taskId,
  })

  static checkVerification = (token, to, taskId) => ({
    type: ACTION_CHECK_VERIFICATION,
    payload: checkVerification(token, to),
    taskId: taskId,
  })
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case `${ACTION_START_VERIFICATION}_PENDING`:
      return state;
    case `${ACTION_START_VERIFICATION}_FULFILLED`: {
      const success = action.payload.success;
      localStorage.setItem(`verified:${action.taskId}`, success);

      if (success) {
        return {
          ...state,
          tokenSent: true,
          error: undefined,
        }
      } else {
        return {
          ...state,
          tokenSent: false,
          error: action.payload.error.message,
        }
      }
    }
    case `${ACTION_START_VERIFICATION}_REJECTED`:
      return {
        ...state,
        verified: false,
        error: "System error."
      };
    case `${ACTION_CHECK_VERIFICATION}_PENDING`:
      return state;
    case `${ACTION_CHECK_VERIFICATION}_FULFILLED`: {
      const success = action.payload.success;
      localStorage.setItem('verified', success);

      const nextState = {
        ...state,
        verified: success,
        error: undefined,
      }
      if (!success) {
        return {
          ...nextState,
          error: "Incorrect token."
        }
      } else {
        return nextState;
      }
    }
    case `${ACTION_CHECK_VERIFICATION}_REJECTED`:
      return {
        ...state,
        verified: false,
        error: "System error."
      };
    default: {
      return state;
    }
  }
}
