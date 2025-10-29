import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export default function AttributeSection({ formik }) {
  const [attrName, setAttrName] = useState("");

  const addAttribute = () => {
    if (attrName) {
      formik.setFieldValue("attributes", [
        ...formik.values.attributes,
        { name: attrName, values: [] },
      ]);
      setAttrName("");
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
      <TextField
        label="Add Attribute (e.g. Size)"
        value={attrName}
        onChange={(e) => setAttrName(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button onClick={addAttribute} variant="outlined">
        Add
      </Button>
    </Box>
  );
}
