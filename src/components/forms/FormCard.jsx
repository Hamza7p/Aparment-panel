"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function FormCard({ title, subtitle, children, footer }) {
  return (
    <Card
      elevation={2}
      sx={{
        width: "100%",
        borderRadius: 4,
        px: { xs: 3, sm: 6 },
        py: { xs: 4, sm: 6 },
        backdropFilter: "blur(12px)",
        background: "rgba(255,255,255,0.92)",
      }}
    >
      <Stack spacing={3} alignItems="stretch">
        <Box>
          {title ? (
            <Typography variant="h4" fontWeight={600} gutterBottom>
              {title}
            </Typography>
          ) : null}
          {subtitle ? (
            <Typography variant="body1" color="text.secondary">
              {subtitle}
            </Typography>
          ) : null}
        </Box>

        <CardContent sx={{ px: 0, pt: 0 }}>{children}</CardContent>

        {footer ? <Box>{footer}</Box> : null}
      </Stack>
    </Card>
  );
}

