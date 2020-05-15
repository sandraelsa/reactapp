import * as Yup from "yup";

const getSecurityQnSchema = minValue =>
  Yup.string()
    .min(minValue, "Too Short!")
    .required("Required");

const FormSchema = Yup.object().shape({
  activityAddressCode: Yup.string()
    .matches(/^\w+$/, {
      message: "should be alpha numeric only",
      excludeEmptyString: true
    })
    .min(6, "Too Short!")
    .max(6, "Too Long!")
    .required("Required"),
  agency: Yup.string().required("Required"),
  firstName: Yup.string()
    .max(14, "Too Long!")
    .required("Required"),
  middleIntial: Yup.string().length(1, "Too Long!"),
  lastName: Yup.string()
    .max(14, "Too Long!")
    .required("Required"),
  phoneExtension: Yup.number().max(9999999, "should be less than 7 characters"),
  email: Yup.string()
    .email("Invalid email")
    .matches(
      /(.*\.gov$)|(.*.\.mil$)/,
      "You are not authorized for self-registration to access GSAXcess®. Please contact the GSAXcess® Help Desk, 1-866-333-7472 or gsaxcesshelp@gsa.gov"
    )
    .required("Required"),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email")], "Emails do not match")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(16, "Too Long!")
    .matches(/.*\d.*/, "should contain atleast one digit")
    .matches(/.*[a-z].*/, "should contain atleast one lowercase character")
    .matches(/.*[A-Z].*/, "should contain atleast one uppercase character")
    .matches(
      /.*[*@!#%&()^~{}$?+-].*/,
      "should contain atleast one special character"
    )
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Required"),
  state: Yup.string().required("Required"),
  securityQn1: getSecurityQnSchema(7),
  answer1: getSecurityQnSchema(5),
  securityQn2: getSecurityQnSchema(7),
  answer2: getSecurityQnSchema(5),
  securityQn3: getSecurityQnSchema(7),
  answer3: getSecurityQnSchema(5)
});

export default FormSchema;
