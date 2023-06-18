const KEY = 'token_moreuse'

export const setToken = (value) => {
  localStorage.setItem(KEY, value);
}

export const getToken = () => {
  return localStorage.getItem(KEY);
}

export const removeToken = () => {
  localStorage.removeItem(KEY);
}
