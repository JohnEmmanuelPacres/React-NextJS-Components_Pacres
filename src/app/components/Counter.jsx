import React, { useState } from 'react';

const Counter = ({ 
  initialValue = 0, 
  step: defaultStep = 1 
}) => {
  const [count, setCount] = useState(initialValue);
  const [customStep, setCustomStep] = useState(defaultStep);
  const [inputStep, setInputStep] = useState(defaultStep.toString());

  const increment = () => {
    setCount(prev => prev + customStep);
  };

  const decrement = () => {
    setCount(prev => prev - customStep);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const handleStepChange = (e) => {
    setInputStep(e.target.value);
  };

  const applyCustomStep = () => {
    const newStep = parseFloat(inputStep);
    if (!isNaN(newStep)) {
      setCustomStep(newStep);
    }
  };

  return (
    <div className="bg-black rounded-lg shadow-md p-6 max-w-sm mx-auto border border-gray-200">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-4">
          Interactive Counter
        </h3>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-blue-400">
            {count}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 min-w-[80px]"
          >
            -{customStep}
          </button>
          
          <button
            onClick={reset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 min-w-[80px]"
          >
            Reset
          </button>
          
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 min-w-[80px]"
          >
            +{customStep}
          </button>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <input
              type="number"
              value={inputStep}
              onChange={handleStepChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-24 text-center text-gray-900 bg-white"
              step="any"
            />
            <button
              onClick={applyCustomStep}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
            >
              Set Step
            </button>
          </div>
          <div className="text-sm text-gray-300">
            <p>Current step: {customStep}</p>
            <p>Initial value: {initialValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;