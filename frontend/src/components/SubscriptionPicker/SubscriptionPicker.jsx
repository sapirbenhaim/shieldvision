import React, { useState } from 'react';
import './SubscriptionPicker.css';
import SubscriptionPlan from '../SubscriptionPlan/SubscriptionPlan';

/**
 * SubscriptionPicker component for selecting and displaying subscription plans.
 *
 * @param {object} subscriptionPlansData - Data containing subscription plans.
 */
const SubscriptionPicker = ({ subscriptionPlansData }) => {
  // State to track the selected plan (e.g., "Annual", "Monthly", "Business").
  const [selectedPlan, setSelectedPlan] = useState("Annual"); 

  // Check if subscriptionPlansData is not available.
  if (!subscriptionPlansData) {
    return (
      <h1>Something went wrong when trying to load the subscription packages, please refresh the page</h1>
    );
  }

  // Destructure the subscription plan data.
  const [planOneA, planTwoA, planThreeA, planOneB, planTwoB, planThreeB] = subscriptionPlansData;

  // Determine the selected subscription plans based on the selected period ("Monthly" or "Annual").
  const selectedPlanOne = selectedPlan === "Monthly" ? planOneA : planOneB;
  const selectedPlanTwo = selectedPlan === "Monthly" ? planTwoA : planTwoB;
  const selectedPlanThree = selectedPlan === "Monthly" ? planThreeA : planThreeB;

  return (
    <div className='PlanSelection'>
      <div className='SubscriptionPicker'>
        {/* Buttons for selecting the subscription period */}
        <button onClick={() => setSelectedPlan("Annual")} className={selectedPlan === "Annual" && "selectedPlanButton"}>Annual</button>
        <button onClick={() => setSelectedPlan("Monthly")} className={selectedPlan === "Monthly" && "selectedPlanButton"}>Monthly</button>
        <button onClick={() => setSelectedPlan("Business")} className={selectedPlan === "Business" && "selectedPlanButton"}>Business</button>
      </div>

      <div className='planPicker'>
        <div className='leftPlan'>
          {/* Display the first subscription plan */}
          <SubscriptionPlan 
            title={selectedPlanOne.subscriptionPackage}
            price={"$" + selectedPlanOne.price}
            oldPrice={"$" + selectedPlanOne.oldPrice}
            paymentPlan={selectedPlanOne.billedPeriod}
            info={selectedPlanOne.description}
            subInfo={selectedPlanOne.subDescription}
            planContent={selectedPlanOne.planContent}
            priceAsDouble={selectedPlanOne.price}
          />
        </div>
        <div className='midPlan'>
          {/* Display the second subscription plan */}
          <SubscriptionPlan 
            title={selectedPlanTwo.subscriptionPackage}
            price={"$" + selectedPlanTwo.price}
            oldPrice={"$" + selectedPlanTwo.oldPrice}
            paymentPlan={selectedPlanTwo.billedPeriod}
            info={selectedPlanTwo.description}
            subInfo={selectedPlanTwo.subDescription}
            planContent={selectedPlanTwo.planContent}
            priceAsDouble={selectedPlanTwo.price}
            middlePlan={true}
          />
        </div>
        <div className='rightPlan'>
          {/* Display the third subscription plan */}
          <SubscriptionPlan 
            title={selectedPlanThree.subscriptionPackage}
            price={"$" + selectedPlanThree.price}
            oldPrice={"$" + selectedPlanThree.oldPrice}
            paymentPlan={selectedPlanThree.billedPeriod}
            info={selectedPlanThree.description}
            subInfo={selectedPlanThree.subDescription}
            planContent={selectedPlanThree.planContent}
            priceAsDouble={selectedPlanThree.price}
          />
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPicker;
