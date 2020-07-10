const ACTION_START_VERIFICATION = 'START_VERIFICATION';
const ACTION_CHECK_VERIFICATION = 'CHECK_VERIFICATION';

const VERIFIED_STATE_KEY = (taskSid) => `verified:${taskSid}`;
const TOKEN_SENT_STATE_KEY = (taskSid) => `tokenSent:${taskSid}`;

const initialState = {
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

function getStatus(taskSid) {
  const tokenSentKey = TOKEN_SENT_STATE_KEY(taskSid);
  const verifiedKey = VERIFIED_STATE_KEY(taskSid);
  return ({
    tokenSentKey: localStorage.get(tokenSentKey),
    verifiedKey: localStorage.get(verifiedKey),
  })
}

export class Actions {
  static startVerification = (to, taskSid) => ({
    type: ACTION_START_VERIFICATION,
    payload: startVerification(to),
    taskSid: taskSid,
  })

  static checkVerification = (token, to, taskSid) => ({
    type: ACTION_CHECK_VERIFICATION,
    payload: checkVerification(token, to),
    taskSid: taskSid,
  })
}

export function reduce(state = initialState, action) {
  state = {
    ...state,
    ...getStatus(action.taskSid),
  }

  const tokenSentKey = TOKEN_SENT_STATE_KEY(action.taskSid);
  const verifiedKey = VERIFIED_STATE_KEY(action.taskSid);

  switch (action.type) {
    case `${ACTION_START_VERIFICATION}_PENDING`:
      return state;
    case `${ACTION_START_VERIFICATION}_FULFILLED`: {
      const success = action.payload.success;
      localStorage.setItem(tokenSentKey, success);

      if (success) {
        return {
          ...state,
          tokenSentKey: true,
          error: undefined,
        }
      } else {
        return {
          ...state,
          tokenSentKey: false,
          error: action.payload.error.message,
        }
      }
    }
    case `${ACTION_START_VERIFICATION}_REJECTED`:
      return {
        ...state,
        verifiedKey: false,
        error: "System error."
      };
    case `${ACTION_CHECK_VERIFICATION}_PENDING`:
      return state;
    case `${ACTION_CHECK_VERIFICATION}_FULFILLED`: {
      const success = action.payload.success;
      localStorage.setItem(verifiedKey, success);

      const nextState = {
        ...state,
        verifiedKey: success,
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
    case `${ACTION_CHECK_VERIFICATION}_REJECTED`: {
      return {
        ...state,
        verifiedKey: false,
        error: "System error."
      };
    }
    default: {
      return state;
    }
  }
}
