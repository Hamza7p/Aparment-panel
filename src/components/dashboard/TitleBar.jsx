import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const TitleBar = ({title, buttonTitle, onClick = () => {}}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography variant="h5" color="black">{ title }</Typography>
        <Button variant="contained" onClick={onClick}>{ buttonTitle }</Button>
      </Box>
  )
}

export default TitleBar