"use client";
import React from 'react';
import WelcomeCard from './components/WelcomeCard';
import Counter from './components/Counter';
import StudentInfo from './components/StudentInfo';

export default function Home() {
  const handleNameChange = (newName) => {
    console.log('Name changed to:', newName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-yellow-500 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            REACT COMPONENTS
          </h1>
          <p className="text-lg text-gray-600">
            Modern Software Analysis and Design - Basic React Components Showcase
          </p>
        </div>

        {/* Components Grid */}
        <div className="space-y-12">
          {/* Welcome Card Section */}
          <section>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                1. WelcomeCard Component
              </h2>
              <p className="text-gray-600">
                Displays welcome message with customizable props
              </p>
            </div>
            <WelcomeCard 
              initialName="Guest"
              greeting="Hello"
              message="Welcome to our application!" 
            />
          </section>

          {/* Counter Section */}
          <section>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                2. Counter Component
              </h2>
              <p className="text-gray-600">
                Interactive counter with state management and custom step size
              </p>
            </div>
            <div className="grid center gap-4">
              <Counter initialValue={0} step={1} />
            </div>
          </section>

          {/* Student Info Section */}
          <section>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                3. StudentInfo Component
              </h2>
              <p className="text-gray-600">
                Form component with controlled inputs and validation
              </p>
            </div>
            <StudentInfo />
          </section>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Component Features Demonstrated
          </h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <strong>Props & Javascript:</strong> Dynamic type handling and customizable props
            </div>
            <div>
              <strong>State Management:</strong> useState hook for interactivity
            </div>
            <div>
              <strong>Event Handling:</strong> Form inputs and button interactions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}