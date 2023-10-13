import React, { useState } from "react";
import Card from "../Card/Card";
import { Link, useParams } from "react-router-dom";
import CardOne from "../Card/CardOne";
import { Box, TextField } from "@mui/material";
import { GridSearchIcon } from "@mui/x-data-grid";

function MedicineData({increment, fav,SetFav}) {
  let localdata = JSON.parse(localStorage.getItem("medicine"));
  console.log(localdata);

  const [dataone, SetData] = useState(localdata);
  const [input, SetInput] = useState("");
  const [sort, SetSort] = useState("");
  const [search, finalData] = useState([]);
  const { id } = useParams();
  const [favourite, SetFavourite] = useState(false);

  const handleAddCart = (event) => {
    event.preventDefault();
    increment(prev => prev + 1);
  };


  const handleFavIncre = (event,id) => {
    event.preventDefault();

    if(fav.includes(id)){
      let ans=fav.filter((v)=>v!== id)
      SetFav(ans);
    }else{
      SetFav((prev)=> [...prev,id]);
    }


  };

  console.log(fav);


  const handleSortSearch = () => {
    let fdata = dataone.filter(v => {
      // console.log(dataone);
      return (
        v.name.toLowerCase().includes(input.toLowerCase()) ||
        v.description.toLowerCase().includes(input.toLowerCase()) ||
        v.price.toString().includes(input.toString())
      );
    });

    fdata = fdata.sort((a, b) => {
      if (sort === "az") {
        return a.name.localeCompare(b.name);
      } else if (sort === "za") {
        return b.name.localeCompare(a.name);
      } else if (sort === "lh") {
        return a.price - b.price;
      } else if (sort === "hl") {
        return b.price - a.price;
      }
    });

    return fdata;
  };

  let finaldata = handleSortSearch();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-10 col-12">
          <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end" }}>
            <GridSearchIcon />
            <TextField
              type="search" // crossicon..
              fullWidth
              id="input-with-sx"
              onChange={e => SetInput(e.target.value)}
              label="Search medicine..."
              variant="standard"
            />
          </Box>
        </div>
      </div>
      {/* <input
        type="search"
        placeholder="Search Here"
        onChange={e => SetInput(e.target.value)}
      /> */}

      <select className="sort" onChange={e => SetSort(e.target.value)}>
        <option value="0">--Select</option>
        <option value="lh">Low to High</option>
        <option value="hl">High to Low</option>
        <option value="az">A to Z</option>
        <option value="za">Z to A</option>
      </select>

      <div className="row">
        {finaldata.map(v => {
          
          return (
            <div className="col-md-4">
              <Link to={"/medicinealldata/" + v.id}>
                <CardOne
                  name={v.name}
                  price={v.price}
                  description={v.description}
                  isButton="Add to Cart"
                  onHandleCart={handleAddCart}
                  favButVal="btn"
                  onHandleFav={(event)=>handleFavIncre(event,v.id)}
                  favourite={fav.includes(v.id) ? true : false}

                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MedicineData;
