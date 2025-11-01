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
import Divider from "@mui/material/Divider";

import FormCard from "@/components/forms/FormCard";
import InputField from "@/components/forms/InputField";
import PasswordField from "@/components/forms/PasswordField";
import Button from "@/components/forms/Button";
import { signUpSchema } from "@/validation/authSchemas";
import { useSignUp } from "@/hooks/useSignUp";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpPage() {
  const router = useRouter();
  const { mutateAsync: signUp, isPending } = useSignUp();
  const [feedback, setFeedback] = useState({ type: null, message: "" });

  const handleSubmit = async (values, helpers) => {
    const { setSubmitting } = helpers;
    setFeedback({ type: null, message: "" });

    try {
      const payload = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      const data = await signUp(payload);
      const token = data?.token;
      const role = data?.user?.role ?? "customer";
      const name = data?.user?.name ?? values.name;

      if (token) {
        Cookies.set("token", token, {
          expires: 7,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        });
      }

      setFeedback({
        type: "success",
        message: `Welcome aboard, ${name}! Your account is ready.`,
      });

      setTimeout(() => {
        if (role && role.toLowerCase() === "admin") {
          router.replace("/dashboard");
        } else {
          router.replace("/");
        }
      }, 700);
    } catch (error) {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Unable to create your account. Please try again.";

      setFeedback({ type: "error", message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: (theme) =>
          `linear-gradient(135deg, rgba(0,87,255,0.08) 0%, ${theme.palette.background.default} 25%, rgba(23,195,7,0.08) 100%)`,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 6, md: 10 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={signUpSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form noValidate>
                  <FormCard
                    title="Create your account"
                    subtitle="Join the community and unlock exclusive drops, curated edits, and style inspiration."
                    footer={
                      <Typography variant="body2" textAlign="center">
                        Already have an account?{" "}
                        <MuiLink component={Link} href="/login" fontWeight={600} color="primary">
                          Sign in
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

                      <InputField name="name" label="Full name" autoComplete="name" />
                      <InputField name="email" label="Email address" type="email" autoComplete="email" />
                      <PasswordField name="password" label="Password" autoComplete="new-password" />
                      <PasswordField name="confirmPassword" label="Confirm password" autoComplete="new-password" />

                      <Button type="submit" loading={isSubmitting || isPending} size="large">
                        Create account
                      </Button>
                    </Stack>
                  </FormCard>
                </Form>
              )}
            </Formik>
          </Grid>

          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Stack spacing={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="h2" fontWeight={700} color="primary">
                Elevate your style
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Sign up to access personalized recommendations, early access to product drops, and seamless checkout experiences tailored for you.
              </Typography>
              <Divider sx={{ width: { xs: "60%", md: "40%" }, mx: { xs: "auto", md: 0 } }} />
              <Typography variant="body1" color="text.secondary">
                Our community is all about authentic street luxury. Join us, curate your wardrobe, and never miss the next limited release.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

