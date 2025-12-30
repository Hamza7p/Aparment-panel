"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { Formik, Form } from "formik";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";

import FormCard from "@/components/forms/FormCard";
import InputField from "@/components/forms/InputField";
import PasswordField from "@/components/forms/PasswordField";
import Button from "@/components/forms/Button";
import { loginSchema } from "@/validation/authSchemas";
import { useLogin } from "@/hooks/useAuth";

const initialValues = {
  phone: "",
  password: "",
  rememberMe: true,
};

export default function LoginPage() {

  const { mutateAsync: login, isPending } = useLogin();
  const [feedback, setFeedback] = useState({ type: null, message: "" });

  const handleSubmit = async (values, helpers) => {
    const { setSubmitting, resetForm } = helpers;
    setFeedback({ type: null, message: "" });

    try {
      const data = await login({ phone: values.phone, password: values.password });


      resetForm({ values: { ...values, password: "" } });
    } catch (error) {
      console.log(error);
      const message =
        error?.response?.data?.errors ||
        error?.message ||
        "Unable to sign in. Please try again.";

      setFeedback({ type: "error", message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid item xs={12} md={6}>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form noValidate>
            <FormCard
              title="Sign in to your account"
              subtitle="Enter your details below to continue dashboard."
            >
              <Stack spacing={3}>
                <Collapse in={Boolean(feedback.type)}>
                  {feedback.type ? (
                    <Alert severity={feedback.type}>{feedback.message}</Alert>
                  ) : null}
                </Collapse>

                <InputField name="phone" label="Enter your phone" type="text" autoComplete="phone" />
                <PasswordField name="password" label="Password" autoComplete="current-password" />

                <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ xs: "flex-start", sm: "center" }} justifyContent="space-between">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.rememberMe}
                        onChange={(event) => setFieldValue("rememberMe", event.target.checked)}
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                  <MuiLink component={Link} href="/forgot-password" fontWeight={600} color="primary">
                    Forgot Password?
                  </MuiLink>
                </Stack>

                <Button type="submit" loading={isSubmitting || isPending} size="large">
                  Sign In
                </Button>
              </Stack>
            </FormCard>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}

