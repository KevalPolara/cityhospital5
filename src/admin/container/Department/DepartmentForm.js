import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import DeptDialogue from './DeptDialogue';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getdepartmentdata } from '../../../redux/action/department.action';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function DepartmentForm(props) {
  const dispatch=useDispatch();
  const deptdata= useSelector((state)=>state.department);


  useEffect(() => {
    dispatch(getdepartmentdata())
  }, []);

  
  // const handleFormSubmit=(data)=>{
  //   console.log(data);


  //   if(editing){
  //     dispatch(updatemedicineData(data))

  //   }else{
  //    dispatch(addmedicineData(data)); 
  //   }

  //   setEditing(false);
  // }


  // const handleDelete = id => {
  //   dispatch(deletemedicineData(id));
  // };


  // const handleEdit = data => {
  //   setEditing(data)
  // };

  const columns = [
    { field: "name", headerName: "Name", width: 70 },
    { field: "", headerName: "Price", width: 130 },
    { field: "expiry", headerName: "expiry", width: 130 },
    { field: "desc", headerName: "desc", width: 130 },
    {
      field: "action",
      headerName: "Action",
      width: 130,
      renderCell: params =>
        <strong>
          <DeleteIcon>
            Delete
          </DeleteIcon>

          <EditIcon/>
        </strong>
    }
  ];

  return (

    <div>
      <DeptDialogue/>
      <DataGrid
        rows={deptdata.department}
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

export default DepartmentForm;