const { GraphQLScalarType, GraphQLError } = require("graphql");

// date validator
const validateDate = (value) => {
  console.log(value);
  const date = new Date(value);
  if (date.toString() === "Invalid Date") {
    throw new GraphQLError(`${value} is not a valid date`);
  } else {
    return date.toISOString();
  }
};

// DateType
const DateType = new GraphQLScalarType({
  name: "DateType",
  description: "It represents a date",
  parseValue: validateDate,
  parseLiteral: (AST) => {
    if (AST.kind === Kind.STRING || AST.kind === Kind.INT) {
      return validateDate(AST.value);
    } else {
      throw GraphQLError(`${AST.value} is not a number or string!`);
    }
  },
  serialize: validateDate,
});

// email validator
function validateEmail(email) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(regex)) {
    return email;
  }
  throw new GraphQLError(`${value} is not a valid Email`);
}

// Email Type
const EmailType = new GraphQLScalarType({
  name: "EmailType",
  description: "It is for email",
  parseValue: validateEmail,
  parseLiteral: (AST) => {
    console.log(AST);
    if (AST.kind === Kind.STRING) {
      return validateEmail(AST.value);
    } else {
      throw GraphQLError(`${AST.value} is not a string!`);
    }
  },
  serialize: validateEmail,
});

// password validator
function passwordValidator(password) {
  console.log(password);
  var pwdRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  if (pwdRegex.test(password)) {
    return password;
  } else {
    throw new GraphQLError("Password is not enough strong!");
  }
}

// password Type
const PasswordType = new GraphQLScalarType({
  name: "PasswordType",
  description:
    "It is for strong password with one uppercase, one lowercase, 1 simple , 1 number",
  parseValue: passwordValidator,
  parseLiteral: (AST) => {
    if (AST.kind === Kind.STRING) {
      return passwordValidator(AST.value);
    } else {
      throw new GraphQLError("Password is not a string!");
    }
  },
  serialize: passwordValidator,
});

module.exports = {
  EmailType,
  PasswordType,
  DateType,
};
