// components/AttributeManager.tsx
import React from 'react';
import { Box, TextField, IconButton, Chip, Stack, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';

type Attribute = { name: string; values: string[] };
type Props = {
  attributes: Attribute[];
  onChange: (attrs: Attribute[]) => void;
};

export default function AttributeManager({ attributes, onChange }: Props) {
  const addAttribute = () => onChange([...attributes, { name: '', values: [] }]);
  const removeAttribute = (idx: number) => onChange(attributes.filter((_, i) => i !== idx));
  const updateName = (idx: number, name: string) => {
    const a = [...attributes]; a[idx].name = name; onChange(a);
  };
  const addValue = (idx: number, val: string) => {
    if (!val) return;
    const a = [...attributes];
    if (!a[idx].values.includes(val)) a[idx].values.push(val);
    onChange(a);
  };
  const removeValue = (attrIdx: number, vIdx: number) => {
    const a = [...attributes]; a[attrIdx].values.splice(vIdx, 1); onChange(a);
  };

  return (
    <Box>
      <Stack spacing={2}>
        {attributes.map((attr, i) => (
          <Paper key={i} sx={{ p: 2 }}>
            <Box display="flex" gap={2} alignItems="start">
              <TextField label="Attribute name" value={attr.name} onChange={(e)=>updateName(i,e.target.value)} sx={{flex:1}} />
              <IconButton color="error" onClick={()=>removeAttribute(i)}><DeleteIcon/></IconButton>
            </Box>
            <Box mt={1}>
              <Typography variant="caption">Values</Typography>
              <Stack direction="row" spacing={1} mt={1} flexWrap="wrap">
                {attr.values.map((v,idx)=>
                  <Chip key={idx} label={v} onDelete={()=>removeValue(i, idx)} sx={{mr:1, mb:1}} />
                )}
              </Stack>
              <Box display="flex" gap={1} mt={1}>
                <TextField size="small" placeholder="Add value (press Enter)" onKeyDown={(e:any)=>{
                  if(e.key==='Enter'){ e.preventDefault(); addValue(i, e.target.value); e.target.value=''; }
                }} />
                <IconButton color="primary" onClick={()=>addValue(i, (document.activeElement as any)?.value || '')}><AddCircleIcon /></IconButton>
              </Box>
            </Box>
          </Paper>
        ))}
        <Box display="flex" justifyContent="flex-end">
          <IconButton color="primary" onClick={addAttribute}><AddCircleIcon /> </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}
