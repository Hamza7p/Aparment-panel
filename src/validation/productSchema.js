// src/lib/validation/productSchema.js
import * as Yup from "yup";

export const productSchema = Yup.object().shape({
  name: Yup.string().required("Product name is required"),
  base_price: Yup.number().required("Base price is required"),
  quantity: Yup.number().required("Quantity is required"),
  description: Yup.string().nullable(),
});
