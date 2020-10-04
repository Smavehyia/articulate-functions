// checks if string is empty
const isEmpty = (str) => {
  return str.trim() === "";
};

// checks if email is valid
const isValidEmail = (email) => {
  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(emailRegEx);
};

exports.validateSignupData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Must not be empty";
  if (!isValidEmail(data.email)) {
    errors.email = "Must be a valid email address";
  }
  if (isEmpty(data.password)) errors.password = "Must not be empty";
  if (isEmpty(data.confirmPassword))
    errors.confirmPassword = "Must not be empty";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Passwords must match";
  if (isEmpty(data.userName)) {
    errors.userName = "Must not be empty";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

exports.validateLoginData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Must not be empty";
  if (isEmpty(data.password)) errors.password = "Must not be empty";
  if (!isValidEmail(data.email)) errors.email = "Must be a valid email";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
