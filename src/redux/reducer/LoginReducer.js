const initialState = {
  userId: '1111111111',
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        userId: action.payload,
      });
    case 'LOGOUT_USER':
      return Object.assign({}, state, {
        userId: '',
      });
    default:
      return state;
  }
};
