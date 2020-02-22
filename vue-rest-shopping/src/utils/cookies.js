// class setCookie {
//   constructor () {
//     this.cookiekey = 'til_user';
//   }
//   saveUserToCookie = (value) => {
//     document.cookie = `${this.cookiekey}=${value}`;
//   }
//   getUserFromCookie = () => {
//     let cookieValue = null;
//     if(document.cookie){
//         const array = document.cookie.split((escape(this.cookiekey)+'='));
//         if(array.length >= 2) {
//             cookieValue = unescape(array[1].split(';')[0]);
//         }
//     }
//     return cookieValue;
//   }
//   deleteCookie = () => {
//     document.cookie = `${this.cookiekey}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;`;
//   }
// }
// const obj = new setCookie();

// export const saveUserToCookie = obj.saveUserToCookie(); 
// export const getUserFromCookie = obj.getUserFromCookie();
// export const deleteCookie = obj.deleteCookie();

export const saveUserToCookie = (value) => {
  document.cookie = `til_user=${value}`;
}
export const getUserFromCookie = () => {
  let cookieValue = null;
  if(document.cookie){
      const array = document.cookie.split((escape('til_user')+'='));
      if(array.length >= 2) {
          cookieValue = unescape(array[1].split(';')[0]);
      }
  }
  return cookieValue;
}
export const deleteCookie = () => {
  document.cookie = `til_user= ; expires = Thu, 01 Jan 1970 00:00:00 GMT;`;
}