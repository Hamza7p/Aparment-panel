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
import { useLogin } from "@/hooks/useLogin";

const initialValues = {
  email: "",
  password: "",
  rememberMe: true,
};

export default function LoginPage() {
  const router = useRouter();
  const { mutateAsync: login, isPending } = useLogin();
  const [feedback, setFeedback] = useState({ type: null, message: "" });

  const handleSubmit = async (values, helpers) => {
    const { setSubmitting, resetForm } = helpers;
    setFeedback({ type: null, message: "" });

    try {
      const data = await login({ email: values.email, password: values.password });

      const token = data?.token;
      const role = data?.user?.role ?? "customer";
      const name = data?.user?.name ?? "";

      if (token) {
        Cookies.set("token", token, {
          expires: values.rememberMe ? 7 : undefined,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        });
      }

      setFeedback({
        type: "success",
        message: name ? `Welcome back, ${name}!` : "Login successful.",
      });

      setTimeout(() => {
        if (role && role.toLowerCase() === "admin") {
          router.replace("/dashboard");
        } else {
          router.replace("/");
        }
      }, 600);

      resetForm({ values: { ...values, password: "" } });
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Unable to sign in. Please try again.";

      setFeedback({ type: "error", message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        background: (theme) => 
          `radial-gradient(circle at top left, ${theme.palette.primary.main} 0%, rgba(0,87,255,0.35) 35%, ${theme.palette.background.default} 70%)`,
        py: { xs: 6, md: 15 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 6, md: 10 }}
          alignItems="center"
          justifyContent="center"
        >
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
                    subtitle="Enter your details below to continue shopping."
                    footer={
                      <Typography variant="body2" textAlign="center">
                        Don&apos;t have an account?{" "}
                        <MuiLink component={Link} href="/signup" fontWeight={600} color="primary">
                          Sign up
                        </MuiLink>
                      </Typography>
                    }
                  >
                    <Stack spacing={3}>
                      <Collapse in={Boolean(feedback.type)}>
                        {feedback.type ? (
                          <Alert severity={feedback.type}>{feedback.message}</Alert>
                        ) : null}
                      </Collapse>

                      <InputField name="email" label="Email address" type="email" autoComplete="email" />
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
        </Grid>
      </Container>
    </Box>
  );
}

