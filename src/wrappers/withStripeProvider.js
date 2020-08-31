import React from "react";
import { StripeProvider, Elements, injectStripe } from "react-stripe-elements";

/**
 * HOF wrapper for <StripeProvider> and <Elements>
 * - required by stripe API
 * - provides [this.]props.stripe to Consumer for managing payments
 * @param {*} Consumer a Stripe utilizing payment component
 */
const withStripeProvider = Consumer => props => {
  const StripeForm = injectStripe(Consumer);

  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
      <Elements>
        <StripeForm {...props} />
      </Elements>
    </StripeProvider>
  );
};

export default withStripeProvider;
