import DataTable from '@/components/dashboard/DataTable'
import TitleBar from '@/components/dashboard/TitleBar'
import { Box } from '@mui/material'
import React from 'react'

const Brands = () => {

  const brands = useBrands();

  return (
    <Box>
      <TitleBar title="Brands" buttonTitle="+ Add Brand" />
      <DataTable columns={columns} rows={brands} />
    </Box>
  )
}


const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "media", headerName: "Image", width: 150 },
    { field: "name", headerName: "Name", width: 100 },
    { field: "note", headerName: "Note", flex: 1, minWidth: 150 },
  ];

export default Brands