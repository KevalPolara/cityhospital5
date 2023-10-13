import * as React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from 'react';
import DoctorFormDialogue from './DoctorFormDialogue';


  
export default function Doctor() {
  const [mdata, setMdata] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    let localdata = JSON.parse(localStorage.getItem("doctor"));

    if (localdata) {
      setMdata(localdata);
    }
  }, []);

  const handleAdd = data => {
   
  };

  const handleUpdate = dataone => {
    console.log(dataone);
    // console.log('kkkk');
   
  };

  const handleDelete = id => {
    let setItem = mdata.filter(v => v.id !== id);

    setMdata(setItem);
    localStorage.setItem("doctor", JSON.stringify(setItem));
  };

  const handleEdit = data => {
    setEditing(data);
  };

  const handleFormSubmit=(data)=>{

    let localdata = JSON.parse(localStorage.getItem("doctor"));
    let id = Math.floor(Math.random() * 1000);

    if (localdata) {
      if(editing){
        let localdata = JSON.parse(localStorage.getItem("doctor"));
        let index = localdata.findIndex(v => v.id === data.id);
        console.log(index);
        localdata[index] = data;
        console.log(localdata);
        localStorage.setItem("doctor", JSON.stringify(localdata));
        setMdata(localdata);
        setEditing(false);
      }else{
        
      localdata.push({ id, ...data });
      localStorage.setItem("doctor", JSON.stringify(localdata));
      setMdata(localdata);
      }
    } else {
      localStorage.setItem("doctor", JSON.stringify([{ id, ...data }]));
      setMdata([{ id, ...data }]);
    }
  }

  
  const columns = [
    { field: "name", headerName: "Name", width: 70 },
    { field: "description", headerName: "Description", width: 130 },
    { field: "designation", headerName: "Designation", width: 130 },
    { field: " fb_profile", headerName: " Fb_profile", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: params =>
        <strong>
          <DeleteIcon onClick={() => handleDelete(params.row.id)}>
            Delete
          </DeleteIcon>

          <EditIcon onClick={() => handleEdit(params.row)} />
        </strong>
    }
  ];

  return (
    <div>
      <DoctorFormDialogue onhandleSubmit={handleFormSubmit} onhandleUpdate={editing}/>
      <DataGrid
        rows={mdata}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}