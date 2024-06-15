import { EMAIL_REGEX, TOKEN } from "../constants";

export const getToken = () => localStorage.getItem(TOKEN) || '';
export const setToken = (token) => localStorage.setItem(TOKEN, token);
export const clearToken = () => localStorage.removeItem(TOKEN);

export const getApiCallHeaders = () => {
  const token = getToken() || '';
  
  if(!token) return null
  
  return {
    Authorization: `Bearer ${token}`
  }
}

export const isValidEmail = (email) => {
  const emailRegex = EMAIL_REGEX;
  return emailRegex.test(email);
};

export const validateUsername = (username) => {
  if (!username) {
    return 'Email is required';
  }

  if (!isValidEmail(username)) {
    return 'Please enter a valid email address';
  }

  return '';
};

export const validatePassword = (password) => {
  if (!password) {
    return 'Password is required';
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }

  return '';
};