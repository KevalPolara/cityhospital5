import React from "react";
import {
  CardBody,
  CardSubTitle,
  CardTitle,
  Image,
  Price
} from "./CardOne.style";
import Button from "../../components/UI/Button/Button";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function CardOne({
  name = "",
  img = "",
  price = "",
  id,
  description = "",
  onHandleCart,
  isButton='',
  onHandleFav,
  favButVal='',
  isfavorited,
  favourite,
})

 {


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
              {description}
            </CardSubTitle>
            <Price>
              ₹{price}
            </Price>

            {
              isButton!=='' ? <Button onClick={onHandleCart}>{isButton}</Button> :  null
            }


            {
              favourite ? <FavoriteIcon onClick={onHandleFav} className="favourite">Added Succesfully</FavoriteIcon> : <FavoriteBorderIcon onClick={onHandleFav} className="favourite">Removed Succesfully</FavoriteBorderIcon> 
            }
            
         
          </CardBody>
          
        </div>
      }
    </div>
  );
}

export default CardOne;
