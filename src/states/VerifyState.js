const ACTION_MARK_VERIFIED = 'MARK_VERIFIED';

const initialState = {
  verified: false,
};


function startVerification() {
  const body = { 
    to: '+12313576187' 
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
    .then(data => console.log(data));
}

export class Actions {
  static verify = () => ({
    type: ACTION_MARK_VERIFIED
  })
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_MARK_VERIFIED: {
      startVerification();
      return {
        ...state,
        verified: true,
      };
    }

    default:
      return state;
  }
}
