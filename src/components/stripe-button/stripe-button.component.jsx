import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const publishableKey =
    "pk_test_51KgnRMF64TnqtlZWCqZcnCV6t9qJVU9NV86fCNJI7ZnBVNLTDsALsri5KVGyLYrKpyfX9hm8DSzn2fz4hXvzIZ9h00ipKICim4";
  const priceForStripe = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Brand Clothing"
      billingAddress
      shippingAddress
      description={`your total is : ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
