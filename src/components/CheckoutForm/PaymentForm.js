import React, { useRef } from "react";
import Review from "./Review.js";
import { sendCartData } from "../../store/cart-actions.js";
import { useDispatch } from "react-redux";

const PaymentForm = ({
  cart,
  backStep,
  shippingData,
  onCaptureCheckout,
  nextStep,
}) => {
  const dispatch = useDispatch();
  const cardNumber = useRef();
  const date = useRef();
  const cvc =useRef()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const CardNumber = cardNumber.current.value;
    const expiry = date.current.value;
    const Cvc= cvc.current.value;

    const orderData = {
      line_items: cart.items,
      customer: {
        firstname: shippingData.firstname,
        lastname: shippingData.lastname,
        email: shippingData.Email,
      },
      shipping: {
        name: "Primary",
        street: shippingData.Address,
        town_city: shippingData.City,
        country: "India",
        postal_code: shippingData.Zip,
      },
      payment: {
        gateway: "card",
        payment_id:
          Math.random().toString(36).slice(2) +
          Math.floor(Math.random() * 10 + 1),
      },
      card_details: {
        card_number: CardNumber,
        card_expiry: expiry,
        cvc: Cvc
      },
    };
    const cart_id = orderData.payment.payment_id;
    onCaptureCheckout(cart_id, orderData);
    nextStep();
    dispatch(
      sendCartData({
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
      })
    );
  };

  return (
    <>
      <Review cart={cart} />
      <h3 className="text-center mb-3">Payment Method</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="row mb-3">
          <div className="col">
            <input
              maxlength="19"
              placeholder="Card Number"
              type="number"
              className="form-control"
              required
              ref={cardNumber}
            />
          </div>
        </div>

        <div className="row mb-3">
            <div className="col">
            <input
              ref={date}
              className="cc-expires form-control"
              maxlength="7"
              name="credit-expires"
              pattern="\d*"
              required
              type="date"
            />
            </div>
            <div className="col">
            <input
              className="cc-cvc form-control"
              maxlength="4"
              placeholder="CVC"
              type="tel"
              required
              ref={cvc}
            />
            </div>
        </div>
        <div className="d-flex justify-content-between">
         <button className="btn btn-info" onClick={backStep}>Back</button>
         <button type="submit" className="btn btn-info">
            Pay Now ${cart.totalPrice.toFixed(2)}
         </button>     
        </div>
      </form>
    </>
  );
};

export default PaymentForm;
