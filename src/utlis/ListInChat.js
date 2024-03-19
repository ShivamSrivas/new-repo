import React, { useState, useEffect } from 'react';
import "../../src/Style/ListInChat.css";

const steps = [
  "Take glass of water",
  "Put it on gas",
  "Let it boil for 2 minutes",
  "Add sugar",
  "Add Tea",
  "Wait for 2 mins",
  "Add half glass of milk"
];

export default function ListInChat() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentStep]);

  return (
    <div className="container">
      <ol>
        {steps.slice(0, currentStep + 1).map((step, index) => (
          <li key={index} className="typed">{index + 1}. {step}</li>
        ))}
      </ol>
    </div>
  );
}
