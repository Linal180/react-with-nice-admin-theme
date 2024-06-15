// API routes
export const API_URL = 'http://himelbikon.pythonanywhere.com/api/v1';

// REGEX
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// String Literals
export const TOKEN = 'access_token';
export const INVALID_EMAIL_OR_PASSWORD = 'Invalid email or password'
export const PASSWORD_MUST_MATCH = 'Passwords must match';
export const CURRENT_PASSWORD_REQUIRED = 'Current Password is required';
export const NEW_PASSWORD_REQUIRED = 'New Password is required';
export const PASSWORD_MIN_LENGTH = 'Password must be at least 8 characters';
export const CONFIRM_PASSWORD_REQUIRED = 'Confirm Password is required';
export const FIRST_NAME_REQUIRED = 'First Name is required';
export const LAST_NAME_REQUIRED = 'Last Name is required';
export const COUNTRY_REQUIRED = 'Country is required';
export const ADDRESS_REQUIRED = 'Address is required';
export const PHONE_REQUIRED = 'Phone is required';
export const PHONE_NUMBER_FORMAT = 'Phone must be a number';
export const INVALID_EMAIL_FORMAT = 'Invalid email format';
export const EMAIL_REQUIRED = 'Email is required';
export const FILE_SIZE_LIMIT = 'Uploaded file is too big.';
export const FILE_FORMAT_UNSUPPORTED = 'Unsupported file format.';
export const PASSWORD_CHANGED = 'Password changed'
export const INCORRECT_OLD_PASSWORD = 'Incorrect old password'
export const PROFILE_UPDATED = "Profile update successfully"
export const FAILED_TO_UPDATE_PROFILE = 'Failed to update your profile'

export const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png'];
export const PROFILE_TABS = [
  {
    id: '#profile-overview',
    label: 'Overview'
  },
  {
    id: '#profile-edit',
    label: 'Edit Profile'
  }, {
    id: '#profile-settings',
    label: 'Settings'
  }, {
    id: '#profile-change-password',
    label: 'Change Password'
  }
]