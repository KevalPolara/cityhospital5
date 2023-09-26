import React, { useState } from "react";
import { CardBody, CardSubTitle, CardTitle, Image, Price } from "./Card.style";

function Card({ name='',img='',price='',id,description='' }) {
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
                    {price}
                  </Price>
                </CardBody>
              </div>
      }
    </div>
  );
}

export default Card;
