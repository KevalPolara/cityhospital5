import React, { useState } from "react";
import Card from "../Card/Card";
import { Link, useParams } from "react-router-dom";
import CardOne from "../Card/CardOne";
import { Box, TextField } from "@mui/material";
import { GridSearchIcon } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { addToCart } from "../../redux/slice/cart.slice";
import { addWishlist, colourWishlist, colurWishlist } from "../../redux/action/wishlist.action";
import { getmedicine } from "../../redux/slice/medicine.slice";

function MedicineData({ increment,  SetFav }) {
  let localdata = JSON.parse(localStorage.getItem("medicine"));

  const [dataone, SetData] = useState(localdata);
  const [input, SetInput] = useState("");
  console.log(input);
  const [sort, SetSort] = useState("");
  const [search, finalData] = useState([]);
  const { id } = useParams();
  const [favourite, SetFavourite] = useState(false);
  const dispatch = useDispatch();
  const medidata = useSelector(state => state.medicines);
  console.log(medidata);

  const cart= useSelector(state => state.cart);
  const fav=useSelector(state=>state.fav);
  console.log(cart);

  useEffect(() => {
    dispatch(getmedicine());
  }, []);

  const handleAddCart = (event,id) => {
    event.preventDefault();
    dispatch(addToCart({id,qty:1}));
     dispatch(colourWishlist(id))

    // increment(prev => prev + 1);
  };

  const handleFavIncre = (event, id) => {
    event.preventDefault();
    dispatch(addWishlist(id))
  };

 const handlecolourFav=(event,id) =>{
  event.preventDefault();

 }


  const handleSortSearch = () => {
    // let fdata = medidata.medicine.filter(v => {
     
    //   return (
    //     v.name.toLowerCase().includes(input.toLowerCase()) ||
    //     v.price.toString().includes(input.toString())
    //   );
    // });


    // fdata = medidata.medicine.sort((a, b) => {
    //   if (sort === "az") {
    //     return a.name.localeCompare(b.name);
    //   } else if (sort === "za") {
    //     return b.name.localeCompare(a.name);
    //   } else if (sort === "lh") {
    //     return a.price - b.price;
    //   } else if (sort === "hl") {
    //     return b.price - a.price;
    //   }
    // });

    // return fdata;
  };

  let finaldata = handleSortSearch();

  return (
    <div className="container">
    <div className="row">
      {
        medidata.errors ? null :
        <>   
        <Box
          sx={{
            width: "50%",
            display: "flex",
            
            alignItems: "flex-end"
          }}
        >
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

          
        <select
          className="sort"

          onChange={e => SetSort(e.target.value)}
        >
          <option value="0">--Select</option>
          <option value="lh">Low to High</option>
          <option value="hl">High to Low</option>
          <option value="az">A to Z</option>
          <option value="za">Z to A</option>
        </select>

        </>
      }
          
      {medidata.errors
        ? <img src="../assets/img/Erorr-404.avif" className="error" />
        : medidata.isLoading
          ? <Box sx={{ display: "flex" }} className="justify-content-center">
              <CircularProgress />
            </Box>
          : medidata.medicine.map(v => {
              return (
                <div className="col-md-4 mt-5">
                  <Link to={"/medicinealldata/" + v.id}>
                    <CardOne
                      name={v.name}
                      price={v.price}
                      description={v.description}
                      
                      isButton="Add to Cart"
                      onHandleCart={event=> handleAddCart(event,v.id)}
                      favButVal="btn"
                      onHandleFav={event => handleFavIncre(event, v.id)}
                      // favourite={fav.fav.includes(v.id) ? true : false}
                      favourite={event=>handlecolourFav(event,v.id)}
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
