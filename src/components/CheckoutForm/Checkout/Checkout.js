import React, { useState } from "react";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { Link } from "react-router-dom";
import classes from "./Checkout.module.css";

let steps = ["Personal Info", "Payment details"];

const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
  // const [ order, setOrder ]= useState({});

  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState([]);

  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const backStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const next = (data) => {
    setShippingData(data);

    nextStep();
  };

  const Form =
    activeStep === 0 ? (
      <AddressForm next={next} />
    ) : (
      <PaymentForm
        backStep={backStep}
        cart={cart}
        shippingData={shippingData}
        nextStep={nextStep}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  // const fetchOrder= async()=>{
  //     const response= await fetch("https://perfectsnack-c967e-default-rtdb.firebaseio.com/checkout.json");
  //     const data = await response.json();
  //     setOrder(data.newOrder);
  // }
  // useEffect(()=>{
  //     fetchOrder();
  // },[])

  const ConfirmationForm = () => {
    return order.customer ? (
      <div  className="text-center">
          <h5>
            Thank you for ordering with us, {order.customer.firstname}{" "}
            {order.customer.lastname}
          </h5>
          <p className="text-secondary">
            Order Id: {order.payment.payment_id}
          </p>
        <button type="button" className="btn btn-primary">
          <Link to="/" className="text-light">Back to Home</Link>
        </button>
      </div>
    ) : (
      <div className={classes.spinner}>Loading...</div>
    );
  };

  if (error) {
    <div className="text-center">
      <h5>Error: {error}</h5>
      <button className="btn btn-light" type="button">
        <Link to="/">Back to Home</Link>
      </button>
    </div>;
  }

  return (
    <>

      <div className="container mt-3 mb-3 card " style={{"width": "50%"}}>
      <div className="d-flex justify-content-between">
                <h1 className='text-danger'>Checkout </h1>
                <Link to='/cart' className="bg-danger p-3 text-light">X</Link>
                </div>
                <hr className="hr"/>
        <div className={classes.progressbar}>
            <div style={{width: activeStep=== 0 ? "50%": activeStep === 1 ? "100%": "100%"}}></div>
        </div>
          <div class="card-body">
            {activeStep === steps.length ? <ConfirmationForm /> : cart && Form}
        </div>
      </div>
    </>
  );
};

export default Checkout;
