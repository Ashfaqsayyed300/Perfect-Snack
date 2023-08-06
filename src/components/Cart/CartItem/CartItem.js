import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

const CartItem = (props) => {
  const { id, name, price, image } = props;
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const RemoveAll = () => {
    dispatch(cartActions.removeAll(id));
  };
  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        image,
      })
    );
  };
  return (
    <div className="d-md-flex justify-content-between mb-3 ">
      <div className="d-md-flex">
        <img src={image} width="250" height="150" alt="prodct-img" />
        <h4 className="ml-md-3">{name}</h4>
      </div>
      <div>
        <button
          type="button"
          className="mr-3 btn btn-light font-weight-bold"
          onClick={removeItemFromCart}
        >
          -
        </button>
        <span className="mr-3 text-light font-weight-bold bg-secondary pr-3 pl-3 pt-1 pb-2">
          {props.amount}
        </span>
        <button
          type="button"
          className="mr-3 btn btn-light font-weight-bold"
          onClick={addItemToCart}
        >
          +
        </button>
        <div>
          <button
            className="btn btn-light m-3"
            type="button"
            onClick={RemoveAll}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
            </svg>{" "}
            Remove
          </button>
        </div>
      </div>
      <div>
        <h5 className="font-weight-bold">
          ${(props.amount * price).toFixed(2)}
        </h5>
      </div>
      <br />
    </div>
  );
};

export default CartItem;
