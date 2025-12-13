"use client"
import DataTable from '@/components/dashboard/DataTable'
import TitleBar from '@/components/dashboard/TitleBar'
import { useBrands, useDeleteBrand } from '@/hooks/useBrand'
import { Delete, Edit, RemoveRedEyeOutlined } from '@mui/icons-material'
import { Avatar, Box, IconButton } from '@mui/material'
import React, { useState } from 'react'
import BrandDialog from './components/BrandDialog'
import { GridActionsCellItem } from '@mui/x-data-grid'
import { useRouter } from 'next/navigation'
import useBrandService from './service'


const Brands = () => {

  const {
    rows,
    columns,
    loading,
    open,
    setOpen,
    selectedBrand,
    handleAdd,
  } = useBrandService();

  return (
    <Box>
      <TitleBar title="Brands" buttonTitle="+ Add Brand" onClick={handleAdd}/>
      <DataTable columns={columns} rows={rows} loading={loading} />

      <BrandDialog
        open={open}
        onClose={() => setOpen(false)}
        brand={selectedBrand}
      />
    </Box>
  )
}


export default Brands