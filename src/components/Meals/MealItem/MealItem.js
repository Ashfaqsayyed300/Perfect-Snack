import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice.js";

const MealItem = (props) => {
  const dispatch = useDispatch();

  const { id, name, price, img, description } = props;

  const addToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image: img,
      })
    );
  };
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img className="card-img-top" height="250" src={img} alt="CardImg" />
      <div className="card-body d-flex justify-content-between">
        <div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div>
        <span className="bg-light p-1 font-weight-bold">${price}</span>

        </div>
      </div>
      <button onClick={addToCart} className="btn btn-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cart-plus"
          viewBox="0 0 16 16"
        >
          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </button>
    </div>
  );
};

export default MealItem;
