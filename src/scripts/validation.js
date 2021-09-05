// Function validateEmail
// regex : validate an email address using a regular expression
export const validateEmail = (email) => {
  const regEx = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  return regEx.test(email);
};

// function validateUser : new user data exists & email is valid --> return true
export const validateUser = (userEmail, userPassword) => {
  if (
    !validateEmail(userEmail)
    || userEmail === ''
    || userPassword === ''
    || userPassword < 6
  ) {
    return false;
  }
  return true;
};
// new user data is valid
export const validateNewUser = (
  newUserEmail,
  newUserPassword,
  newUserName,
) => {
  if (
    !validateEmail(newUserEmail)
    || newUserEmail === ''
    || newUserPassword === ''
    || newUserPassword < 6
    || newUserName === ''
  ) {
    return false;
  }
  return true;
};
