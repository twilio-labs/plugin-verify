const ACTION_MARK_VERIFIED = 'MARK_VERIFIED';

const initialState = {
  verified: false,
};

export class Actions {
  static verify = () => ({
    type: ACTION_MARK_VERIFIED
  })
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_MARK_VERIFIED: {
      return {
        ...state,
        verified: true,
      };
    }

    default:
      return state;
  }
}
