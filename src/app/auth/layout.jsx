"use client"
import { Box, Container, Grid } from '@mui/material'
import React from 'react'

const Auth = ({children}) => {
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
            {children}
        </Grid>
      </Container>
    </Box>
  )
}

export default Auth