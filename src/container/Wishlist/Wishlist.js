import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWishlist } from "../../redux/action/wishlist.action";

function Wishlist(props) {
  const mediData = useSelector((state) => state.medicines);
  const favlist = useSelector((state) => state.fav);
  const dispatch=useDispatch();
  console.log(favlist.fav, mediData);

  let fData = favlist.fav.map((v) => {
    let ans = mediData.medicine.find((m) => v === m.id);

    return { ...ans };
  });

  console.log(fData);

  const handleDelete=(id)=>{
    dispatch(deleteWishlist(id))
  }

  return (
    <div className="cart-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="table-wishlist">
              <div className="cart-wrap">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-heading mb-10">My wishlist</div>
                      <div className="table-wishlist"></div>
                    </div>
                  </div>
                </div>
              </div>
              <table cellPadding={0} cellSpacing={0} border={0} width="100%">
                <thead>
                  <tr>
                    <th width="45%" className="pname">Product Name</th>
                    <th width="15%">Unit Price</th>
                    <th width="10%" className="action">Action</th>
                  </tr>
                </thead>

                {fData.map((v) => {
                  return (
                    <tbody>
                      <tr>
                        <td width="45%">
                          <div className="display-flex align-center">
                            <div className="img-product">
                              {/* <img
                                src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg"
                                alt
                                className="mCS_img_loaded"
                              /> */}
                            </div>
                            <div className="name-product" style={{ fontSize: '20px' ,color: '#FF6337' }}>{v.name}</div>

                          </div>
                        </td>
                        <td width="15%" className="price">
                          ₹{v.price}
                        </td>
                        
                        <td width="10%" className="text-center">
                          <a href="#" className="trash-icon">
                            <i className="far fa-trash-alt" onClick={()=>handleDelete(v.id)} />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
              <table
                cellPadding={0}
                cellSpacing={0}
                border={0}
                width="100%"
              ></table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
