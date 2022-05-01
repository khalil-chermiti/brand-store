import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const publishableKey =
        "pk_test_51KgnRMF64TnqtlZWCqZcnCV6t9qJVU9NV86fCNJI7ZnBVNLTDsALsri5KVGyLYrKpyfX9hm8DSzn2fz4hXvzIZ9h00ipKICim4";
    const priceForStripe = price * 100;

    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token,
            },
        })
            .then(response => {
                alert("Payment Succesful");
            })

            .catch(error => {
                console.log("Payment error : ", JSON.parse(error));
                alert("there was an issue with the payment");
            });
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
