// validations.js
import * as yup from 'yup';
import {
  PASSWORD_MUST_MATCH,
  SUPPORTED_FORMATS,
  CURRENT_PASSWORD_REQUIRED,
  NEW_PASSWORD_REQUIRED,
  PASSWORD_MIN_LENGTH,
  CONFIRM_PASSWORD_REQUIRED,
  FIRST_NAME_REQUIRED,
  LAST_NAME_REQUIRED,
  COUNTRY_REQUIRED,
  ADDRESS_REQUIRED,
  PHONE_REQUIRED,
  PHONE_NUMBER_FORMAT,
  INVALID_EMAIL_FORMAT,
  FILE_SIZE_LIMIT,
  FILE_FORMAT_UNSUPPORTED,
  EMAIL_REQUIRED
} from '../constants';

export const profileValidation = yup.object().shape({
  image: yup
    .mixed()
    .nullable()
    .test(
      'FILE_SIZE',
      FILE_SIZE_LIMIT,
      (value) => value ? (value.size ? value.size <= 5000000 : true) : true
    )
    .test(
      'FILE_FORMAT',
      FILE_FORMAT_UNSUPPORTED,
      (value) => value ? (typeof value === 'string' ? true : SUPPORTED_FORMATS.includes(value.type)) : true
    ),
  first_name: yup.string().required(FIRST_NAME_REQUIRED),
  last_name: yup.string().required(LAST_NAME_REQUIRED),
  about: yup.string(),
  company: yup.string(),
  job: yup.string(),
  country: yup.string().required(COUNTRY_REQUIRED),
  address: yup.string().required(ADDRESS_REQUIRED),
  phone: yup.string().required(PHONE_REQUIRED).matches(/^[0-9]+$/, PHONE_NUMBER_FORMAT),
  email: yup.string().email(INVALID_EMAIL_FORMAT).required(EMAIL_REQUIRED),
  twitter: yup.string(),
  facebook: yup.string(),
  instagram: yup.string(),
  linkedin: yup.string(),
});

export const passwordValidationSchema = yup.object().shape({
  old_password: yup.string().required(CURRENT_PASSWORD_REQUIRED),
  password: yup.string()
    .required(NEW_PASSWORD_REQUIRED)
    .min(8, PASSWORD_MIN_LENGTH),
  password2: yup.string()
    .oneOf([yup.ref('password'), null], PASSWORD_MUST_MATCH)
    .required(CONFIRM_PASSWORD_REQUIRED),
});
