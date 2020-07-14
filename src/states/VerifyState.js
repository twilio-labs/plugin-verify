const ACTION_START_VERIFICATION = 'START_VERIFICATION';
const ACTION_CHECK_VERIFICATION = 'CHECK_VERIFICATION';
const ACTION_LOAD_STATE = 'LOAD_STATE';

const VERIFIED_STATE_KEY = (taskSid) => `verified:${taskSid}`;
const TOKEN_SENT_STATE_KEY = (taskSid) => `tokenSent:${taskSid}`;

const initialState = {
  pendingSent: false,
  tokenSent: false,
  verified: false,
  error: undefined,
};

function startVerification(to, taskSid) {
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
      return {
        ...data,
        taskSid: taskSid,
      };
    });
}

function checkVerification(token, to, taskSid) {
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
      return {
        ...data,
        taskSid: taskSid,
      };
    });
}

function getState(key, taskSid) {
  const state = localStorage.getItem(key(taskSid));
  return state === "true";
}

export class Actions {
  static loadState = (taskSid) => ({
    type: ACTION_LOAD_STATE,
    verified: getState(VERIFIED_STATE_KEY, taskSid),
    tokenSent: getState(TOKEN_SENT_STATE_KEY, taskSid),
  })

  static startVerification = (to, taskSid) => ({
    type: ACTION_START_VERIFICATION,
    payload: startVerification(to, taskSid),
  })

  static checkVerification = (token, to, taskSid) => ({
    type: ACTION_CHECK_VERIFICATION,
    payload: checkVerification(token, to, taskSid),
  })
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_LOAD_STATE: {
      return {
        ...state,
        verified: action.verified,
        tokenSent: action.tokenSent,
      }
    }
    case `${ACTION_START_VERIFICATION}_PENDING`:
      return {
        ...state,
        pendingSent: true,
      };
    case `${ACTION_START_VERIFICATION}_FULFILLED`: {
      const success = action.payload.success;
      const error = success ? {} : {error: action.payload.error.message}

      const tokenSentKey = TOKEN_SENT_STATE_KEY(action.payload.taskSid);
      localStorage.setItem(tokenSentKey, success);

      return {
        ...state,
        ...error,
        tokenSent: success,
      }
    }
    case `${ACTION_START_VERIFICATION}_REJECTED`: {
      return {
        ...state,
        tokenSent: false,
        error: "System error."
      };
    }
    case `${ACTION_CHECK_VERIFICATION}_PENDING`:
      return state;
    case `${ACTION_CHECK_VERIFICATION}_FULFILLED`: {
      const success = action.payload.success;
      const error = success ? {} : {error: "Incorrect token."};
      const verifiedKey = VERIFIED_STATE_KEY(action.payload.taskSid);
      localStorage.setItem(verifiedKey, success);

      return {
        ...state,
        ...error,
        verified: success,
      }
    }
    case `${ACTION_CHECK_VERIFICATION}_REJECTED`: {
      return {
        ...state,
        verified: false,
        error: "System error."
      };
    }
    default: {
      return state;
    }
  }
}
