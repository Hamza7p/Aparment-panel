import * as Yup from "yup";

export const loginSchema = Yup.object({
  phone: Yup.string()
    .required("Your phone number is required")
    .matches(/^9639[0-9]{8}$/, "Phone number must start with 9639 and be 12 digits long"),
  password: Yup.string()
    .min(4, "Password must be at least 4 characters")
    .required("Password is required"),
  rememberMe: Yup.boolean(),
});


