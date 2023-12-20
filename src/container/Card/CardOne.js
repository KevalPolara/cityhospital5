import React, { useState } from "react";
import {
  CardBody,
  CardSubTitle,
  CardTitle,
  Image,
  Price
} from "./CardOne.style";
import Button from "../../components/UI/Button/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";

function CardOne({
  name = "",
  img = "",
  price = "",
  id,
  description = "",
  onHandleCart,
  isButton = "",
  onHandleFav,
  favButVal = "",
  isfavorited,
  favourite
})

{

  const fav=useSelector(state=>state.fav);
  console.log(fav);

const [check , ischeck] = useState(false);

  return (
    <div className="row">
      {
        <div className="col-4">
          <CardBody>
            <Image src={img} />
            <CardTitle>
              {name}
            </CardTitle>
            <CardSubTitle>
              {description.substring("20")}
            </CardSubTitle>
            <Price>
              ₹{price}
            </Price>

            {isButton !== ""
              ? <Button onClick={onHandleCart}>
                  {isButton}
                </Button>
              : null}

            {favourite
              ? <FavoriteIcon onClick = {onHandleFav} className="favourite"/>
              :  <FavoriteBorderIcon onClick = {onHandleFav}  className="favourite"/>
               }
          </CardBody>
        </div>
      }
    </div>
  );
}

export default CardOne;
