const saveUserToCookie = (value) => {
  document.cookie = `til_user=${value}`;
}

const getUserFromCookie = () => {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
    '$1',
  );
}

const deleteCookie = () => {
  document.cookie = `til_user= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;`;
}

export {
  saveUserToCookie,
  getUserFromCookie,
  deleteCookie,
};
