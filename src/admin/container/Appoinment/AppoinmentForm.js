import * as React from "react";
import { json } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { constant, update } from "lodash-es";
import MedicineData from "../../../container/Medicine/MedicineData";
// import AppoinmentForm from "./AppoinmentForm";
import { useDispatch, useSelector } from "react-redux";
import { addmedicineData, deletemedicineData, getmedicineData, updatemedicineData } from "../../../redux/action/medicine.action";
import AppoinmentDialogueBox from "./AppoinmentDialogueBox";
import { addAppoinmentData } from "../../../redux/slice/appoinment.slice";

export default function AppoinmentForm() {

  const [mdata, setMdata] = useState([]);
  const [editing, setEditing] = useState(false);
  const dispatch=useDispatch()
  const medidata= useSelector((state)=>state.medicines);

  useEffect(() => {
    dispatch(getmedicineData())
  }, []);


  const handleFormSubmit=(data)=>{  
    console.log(data);

    dispatch(addAppoinmentData(data));

    // if(editing){
    //   dispatch(updatemedicineData(data))
    // }else{
    //   if(medidata.errors){
    //     <p>{medidata.errors}</p>
    //     }else{
    //       dispatch(addmedicineData(data));
    //     }
    //   }  
    //   setEditing(false);
    }
 
//   const handleDelete = id => {
//     dispatch(deletemedicineData(id));
//   };


//   const handleEdit = data => {
//     setEditing(data)
//   };

//   const columns = [
//     { field: "name", headerName: "Name", width: 70 },
//     { field: "price", headerName: "Price", width: 130 },
//     { field: "expiry", headerName: "expiry", width: 130 },
//     { field: "desc", headerName: "desc", width: 130 },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 130,
//       renderCell: params =>
//         <strong>
//           {/* <DeleteIcon onClick={() => handleDelete(params.row.id)}>
//             Delete
//           </DeleteIcon>

//           <EditIcon onClick={() => handleEdit(params.row)} /> */}
//         </strong>
//     }
//   ];

  return (
    <div>
       <AppoinmentDialogueBox onhandleSubmit={handleFormSubmit} onhandleUpdate={editing}/>
      {/* <DataGrid
        rows={medidata.medicine}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />  */}
    </div>
  );
}


