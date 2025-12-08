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


const Brands = () => {

  const { data: brands, isLoading } = useBrands();
  const deleteBrand = useDeleteBrand();

  const [open, setOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const router = useRouter();

  const rows = brands ?? [];

  const handleAdd = () => {
    setSelectedBrand(null);
    setOpen(true);
  };

  const handleEdit = (brand) => {
    setSelectedBrand(brand);
    setOpen(true);
  };

  const handleDelete = (id) => {
    deleteBrand.mutate({ id });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 80 },

    {
      field: "media",
      headerName: "Image",
      width: 120,
      renderCell: (params) => {
        const url = params?.row?.media?.url || null;
        return (
        <Avatar
          src={url}
          sx={{ 
              width: 50, 
              height: 50,
              borderRadius: 2,
              bgcolor: url ? "transparent" : "secondary.main", 
              color: "white",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
        >
          { url ?? "B"}
        </Avatar>
      )},
    },

    { field: "name", headerName: "Name", width: 160 },
    { field: "note", headerName: "Note", flex: 1, minWidth: 150 },

    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   width: 120,
    //   renderCell: (params) => (
    //     <Box sx={{ display: "flex", gap: 1 }}>
    //       <IconButton color="secondary" onClick={() => router.push(`/dashboard/brands/${id}`)}>
    //         <Eye />
    //       </IconButton>
    //       <IconButton color="primary" onClick={() => handleEdit(params.row)}>
    //         <Edit />
    //       </IconButton>

    //       <IconButton
    //         color="error"
    //         onClick={() => handleDelete(params.row.id)}
    //       >
    //         <Delete />
    //       </IconButton>
    //     </Box>
    //   ),
    // },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 100,
      flex: 2,
      getActions: (params) => [
        <GridActionsCellItem
          key='1a'
          icon={<RemoveRedEyeOutlined sx={{color: '##4e474c', border: '1px solid #4e474c', borderRadius: '50%', fontSize: 30, p: 0.5 }} />}
          label="Show Detials"
          onClick={() => router.push(`/dashboard/brands/${params.row.id}`)}
        />,
        <GridActionsCellItem
          key='2a'
          icon={<Edit sx={{color: 'blue', border: '1px solid blue', borderRadius: '50%', fontSize: 30, p: 0.5 }}/>}
          label="Edit"
          onClick={() => handleEdit(params.row)}
        />,
        <GridActionsCellItem
          key='3a'
          icon={<Delete sx={{ color: 'error.main', border:'1px solid', borderColor: 'error.main', borderRadius: '50%', fontSize: '30px', p:0.5 }} />}
          label="Delete"
          onClick={() => handleDelete(params.row.id)}
        />,
      ],
    },
  ];

  return (
    <Box>
      <TitleBar title="Brands" buttonTitle="+ Add Brand" onClick={handleAdd}/>
      <DataTable columns={columns} rows={rows} />

      <BrandDialog
        open={open}
        onClose={() => setOpen(false)}
        brand={selectedBrand}
      />
    </Box>
  )
}


export default Brands