"use client";

import { Grid } from '@mui/material'
import { Formik, Form, useFormik } from 'formik'
import React from 'react'
import FormCard from '@/components/forms/FormCard'
import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse'
import Alert from '@mui/material/Alert'
import InputField from '@/components/forms/InputField'
import Button from '@/components/forms/Button'

const ForgotPasswordPage = () => {
  const formik = useFormik({
    initialValues: {
      phone: '',
    },
    // validationSchema: forgotPasswordSchema,
    // onSubmit: handleSubmit,
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

    return (
    <Grid item xs={12} md={6}>
      <Form noValidate>
            <FormCard
              title="Forgot Password"
              subtitle="Enter your phone number to reset your password."
            >
              <Stack spacing={3}>
                <Collapse in={Boolean(feedback.type)}>
                  {feedback.type ? (
                    <Alert severity={feedback.type}>{feedback.message}</Alert>
                  ) : null}
                </Collapse>
                <InputField name="phone" label="Enter your phone" type="text" autoComplete="phone" />
                <Button type="submit" loading={isSubmitting || isPending} size="large">
                  Reset Password
                </Button>
              </Stack>
            </FormCard>
          </Form>
    </Grid>
  );
};

export default ForgotPasswordPage;