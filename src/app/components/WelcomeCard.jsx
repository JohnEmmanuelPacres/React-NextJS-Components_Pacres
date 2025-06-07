import React, { useState } from 'react';

const WelcomeCard = ({ 
  initialName, 
  message, 
  className,
  greeting, 
  showEditButton = true, 
  onNameChange 
}) => {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing(true);
    setTempName(name);
  };

  const handleSaveClick = () => {
    const newName = tempName.trim();
    setName(newName);
    setIsEditing(false);
    if (onNameChange) {
      onNameChange(newName);
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleNameChange = (e) => {
    setTempName(e.target.value);
  };

  return (
    <div className={`bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg shadow-lg p-6 text-white max-w-md mx-auto ${className}`}>
      <div className="text-center">
        {isEditing ? (
          <div className="mb-4">
            <input
              type="text"
              value={tempName}
              onChange={handleNameChange}
              className="w-full p-2 rounded text-gray-800 mb-2"
              autoFocus
              placeholder="Enter your name"
            />
            <div className="flex justify-center gap-2">
              <button
                onClick={handleSaveClick}
                className="bg-white text-blue-600 px-4 py-1 rounded-md font-medium hover:bg-gray-100 transition"
                disabled={!tempName.trim()} // Disable if empty
              >
                Save
              </button>
              <button
                onClick={handleCancelClick}
                className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md font-medium hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="mb-2">
            <h2 className="text-2xl font-bold mb-2">
              {greeting}, {name}! 👋
            </h2>
            {showEditButton && (
              <button
                onClick={handleEditClick}
                className="text-blue-100 text-sm underline hover:text-white transition"
              >
                Edit Name
              </button>
            )}
          </div>
        )}
        
        <p className="text-blue-100 text-lg">
          {message}
        </p>
        <div className="mt-4 p-3 bg-blue-400 bg-opacity-20 rounded-md">
          <p className="text-sm">
            We're glad to have you here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;