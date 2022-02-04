const checkPasswordValidity = (value) => {
  console.log('value :>> ', value);
  const isNonWhiteSpace = /^\S*$/;
  if (!isNonWhiteSpace.test(value)) {
    return 'Password must not contain Whitespaces.';
  }

  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  if (!isContainsUppercase.test(value)) {
    return 'Password must have at least one Uppercase Character.';
  }

  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  if (!isContainsLowercase.test(value)) {
    return 'Password must have at least one Lowercase Character.';
  }

  const isContainsNumber = /^(?=.*[0-9]).*$/;
  if (!isContainsNumber.test(value)) {
    return 'Password must contain at least one Digit.';
  }

  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if (!isContainsSymbol.test(value)) {
    return 'Password must contain at least one Special Symbol.';
  }

  const isValidLength = /^.{6,16}$/;
  if (!isValidLength.test(value)) {
    return 'Password must be 6-16 Characters Long.';
  }

  const dotValidation =
    /^(?!.*\.\.)[a-zA-Z0-9_'-](?:[a-zA-Z0-9_'.-]{0,62}[a-zA-Z0-9_'-])?$/;
  if (!dotValidation.test(value)) {
    return 'Password must not start or end with a dot and must not have consecutive dots.';
  }
  return null;
};

[
  'abcA1#!A',
  'abcA..1#!A',
  'abcA1#!A.',
  '.abcA1#!A',
  '#!asdfSFD1;',
  '# a f F1 ;',
  '1111111111',
  'aaaaaaaa',
  '11111111',
  'AAAAAAAA',
  '########',
  'aA1#',
  'Aa22',
  'Aa$l',
].forEach((s) => {
  const message = checkPasswordValidity(s);

  if (!message) {
    console.log('Valid password\n');
  } else {
    console.log(message + '\n');
  }
});

const emailValidator = (mail) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const result = re.test(mail);
  console.log('result :>> ', result);
  return result;
};

function ValidateCreditCardNumber(ccNum) {
  const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
  let isValid = false;
  let cardType = null;

  if (visaRegEx.test(ccNum)) {
    isValid = true;
    cardType = 'Visa';
  } else if (mastercardRegEx.test(ccNum)) {
    isValid = true;
    cardType = 'Master Card';
  }

  if (isValid) {
    return { isValid, cardType };
  } else {
    return { isValid };
  }
}

const validateCard = (cardNum) => {
  const re =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  return re.test(cardNum);
};
