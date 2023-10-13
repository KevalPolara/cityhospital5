import * as React from "react";

import { json } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { constant, update } from "lodash-es";
import MedicineData from "../../../container/Medicine/MedicineData";
import MedicineForm from "./MedicineForm";

export default function DialoguBox() {

  const [mdata, setMdata] = useState([]);
  const [editing, setEditing] = useState(false);

  
  useEffect(() => {
    let localdata = JSON.parse(localStorage.getItem("medicine"));

    if (localdata) {
      setMdata(localdata);
    }
  }, []);


  const handleFormSubmit=(data)=>{
    let localdata = JSON.parse(localStorage.getItem("medicine"));
    let id = Math.floor(Math.random() * 1000);


    if (localdata) {
      if(editing){
        let index = localdata.findIndex(v => v.id === data.id);
        console.log(index);
        localdata[index] = data;
        console.log(localdata);
        localStorage.setItem("medicine", JSON.stringify(localdata));
        setMdata(localdata);
        setEditing(false);
      }else{  
      localdata.push({ id, ...data });
      localStorage.setItem("medicine", JSON.stringify(localdata));
      setMdata(localdata);
      }
    }
       else {
        localStorage.setItem("medicine", JSON.stringify([{ id, ...data }]));
        setMdata([{ id, ...data }]);
    }
  }


  const handleDelete = id => {
    let setItem = mdata.filter(v => v.id !== id);

    setMdata(setItem);
    localStorage.setItem("medicine", JSON.stringify(setItem));
  };


  const handleEdit = data => {
    setEditing(data);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 70 },
    { field: "price", headerName: "Price", width: 130 },
    { field: "date", headerName: "Date", width: 130 },
    { field: "description", headerName: "Date", width: 130 },
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
      <MedicineForm onhandleSubmit={handleFormSubmit} onhandleUpdate={editing}/>
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
