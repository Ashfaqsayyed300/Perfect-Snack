import React, { useRef } from "react";
// (data)=> next(data)

const AddressForm = ({ next }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const zipRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const firstname = firstNameRef.current.value;
    const lastname = lastNameRef.current.value;
    const Email = emailRef.current.value;
    const City = cityRef.current.value;
    const Address = addressRef.current.value;
    const Zip = zipRef.current.value;

    const data = {
      firstname,
      lastname,
      Email,
      City,
      Address,
      Zip,
    };
    next(data);
  };
  return (
    <>
      <h3 className="text-center">Personal Info</h3>
      <form onSubmit={onSubmit}>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              ref={firstNameRef}
              required
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              ref={lastNameRef}
              required
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              className="form-control"
              type="email"
              required
              ref={emailRef}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              className="form-control"
              type="text"
              required
              ref={addressRef}
              placeholder="Address"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              ref={cityRef}
              required
              className="form-control"
              placeholder="City"
            />
          </div>
          <div className="col">
            <input
              type="Number"
              ref={zipRef}
              required
              className="form-control"
              placeholder="Postal Code"
            />
          </div>
        </div>
        <div className="row text-right">
            <div className="col">
            <button type="submit" className="btn btn-info">Next</button>

            </div>
        </div>
      </form>
    </>
  );
};

export default AddressForm;