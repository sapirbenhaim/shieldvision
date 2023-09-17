import React, { useEffect, useState } from 'react';
import './SubscriptionPlan.css';
import PlanContent from './PlanContent';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CLIENT_ID } from '../../Config/config';
import { updateSubscriptionLevel } from '../../managers/subscriptionManager';
import { getUser } from '../../managers/authManager';
import { logMessage } from '../../utils/logger';

/**
 * SubscriptionPlan component for displaying subscription plan details and handling payments.
 *
 * @param {object} title - The title of the subscription plan.
 * @param {string} price - The price of the subscription plan.
 * @param {string} oldPrice - The previous price of the subscription plan (if applicable).
 * @param {string} paymentPlan - The billing period (e.g., "Annual", "Monthly").
 * @param {string} info - Additional information about the subscription plan.
 * @param {string} subInfo - Subtext providing further details about the plan.
 * @param {array} planContent - An array of content describing the plan features.
 * @param {boolean} middlePlan - Indicates whether this is the middle subscription plan (for styling).
 * @param {number} priceAsDouble - The price as a floating-point number.
 */
const SubscriptionPlan = ({
  title,
  price,
  oldPrice,
  paymentPlan,
  info,
  subInfo,
  planContent,
  middlePlan,
  priceAsDouble,
}) => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);

  // Creates a PayPal order.
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: title,
          amount: {
            currency_code: "USD",
            value: priceAsDouble,
          },
        },
      ],
    }).then((orderID) => {
      setOrderID(orderID);
      return orderID;
    });
  };

  // Handles approval of the PayPal payment.
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  // Handles PayPal payment errors.
  const onError = (data, actions) => {
    setErrorMessage("An Error occurred with your payment");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      logMessage('Order successful. Your order id is:', orderID);
      const updateSubscription = async () => {
        const updatedUser = await updateSubscriptionLevel(getUser()._id, title);
        alert("Current package: " + updatedUser.subscriptionPackage);
      }
      updateSubscription();
    }
  }, [success]);

  return (
    <PayPalScriptProvider options={{ "client-id": CLIENT_ID }}>
      <div className='SubscriptionPlan'>
        <h3 className='planTitle'>{title}</h3>
        <h2 className='planPrice'>{price}</h2>
        <p className='planOldPrice'>{oldPrice}</p>
        <p className='paymentPlan'>{paymentPlan}</p>
        <p className='planInfo'>{info}</p>
        <p className='planSubInfo'>{subInfo}</p>
        <div className={!middlePlan ? "planContentContainer" : "middlePlanContentContainer"}>
          {planContent.map(content => <PlanContent middlePlan={middlePlan} content={content} />)}
        </div>
        {!show && (
          <button onClick={() => setShow(true)} className='btnUpgradePlan'>Upgrade plan</button>
        )}
        {show && (
          <div className='paymentContainer'>
            <PayPalButtons
              style={{ layout: "vertical" }}
              createOrder={createOrder}
              onApprove={onApprove}
              onError={onError}
            />
          </div>
        )}
      </div>
    </PayPalScriptProvider>
  );
}

export default SubscriptionPlan;
