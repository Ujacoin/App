export const LoginUser = data => {
  return {
    type: 'LOGIN_USER',
    payload: data,
  };
};
export const LogoutUser = () => {
  return {
    type: 'LOGOUT_USER',
  };
};
// export const ItemDetail = data => {
//   return {
//     type: 'ITEM_DETAIL',
//     payload: data,
//   };
// };
