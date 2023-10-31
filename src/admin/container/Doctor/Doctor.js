import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import DoctorFormDialogue from "./DoctorFormDialogue";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoctorData,
  deleteDoctor,
  getDoctorData,
  putDoctorData
} from "../../../redux/action/doctor.action";
import { addmedicineData } from "../../../redux/action/medicine.action";
import { deleteDoctorData } from "../../../common/api/doctor.api";

export default function Doctor() {
  const [mdata, setMdata] = useState([]);
  const [editing, setEditing] = useState(false);
  const doctor = useSelector(state => state.doctor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctorData());
  }, []);

  const handleUpdate = dataone => {
    console.log(dataone);
  };

  const handleDelete = id => {
    dispatch(deleteDoctor(id));
  };

  const handleEdit = data => {
    setEditing(data);
  };

  const handleFormSubmit = data => {
    if (editing) {
      dispatch(putDoctorData(data));
    } else {
      dispatch(addDoctorData(data));
    }
  };

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
      <DoctorFormDialogue
        onhandleSubmit={handleFormSubmit}
        onhandleUpdate={editing}
      />
      <DataGrid
        rows={doctor.doctor}
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
