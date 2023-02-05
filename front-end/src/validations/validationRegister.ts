import * as yup from "yup";

export const schemaClientRegister = yup.object().shape({
  name: yup
    .string()
    .min(4, "Name must contain at least 2 characters")
    .required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  telephone: yup.string().required(),
  password: yup.string().required("Password is required"),
});

export const schemaContactRegister = yup.object().shape({
  name: yup
    .string()
    .min(4, "Name must contain at least 2 characters")
    .required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  telephone: yup.string().required(),
});
