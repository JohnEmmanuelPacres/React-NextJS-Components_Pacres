import React, { useState } from 'react';

const StudentInfo = () => {
  const [student, setStudent] = useState({
    name: '',
    age: 0,
    email: '',
    course: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({
      ...prev,
      [name]: name === 'age' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false); // Re-enable if needed (remove this if you want it permanently disabled)
    }, 500);
  };

  const handleClear = () => {
    setStudent({
      name: '',
      age: 0,
      email: '',
      course: ''
    });
    setSubmitted(false);
    setIsSubmitting(false);
  };

  const isFormValid = student.name.trim() && student.age > 0 && student.email.trim() && student.course;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Student Information Form
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Student Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={student.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            placeholder="Enter student name"
            required
          />
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            value={student.age || ''}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            placeholder="Enter age"
            min="1"
            max="120"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
            placeholder="Enter email address"
            required
          />
        </div>

        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">
            Course
          </label>
          <select
            id="course"
            name="course"
            value={student.course}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-600"
            required
          >
            <option value="">Select a course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
          </select>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting || submitted}
            className={`flex-1 py-2 px-4 rounded-md font-semibold transition-colors duration-200 ${
              isFormValid && !isSubmitting && !submitted
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          
          <button
            type="button"
            onClick={handleClear}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Clear
          </button>
        </div>
      </form>

      {submitted && isFormValid && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <h4 className="text-lg font-semibold text-green-800 mb-2">
            Student Information Submitted! ✅
          </h4>
          <div className="text-sm text-green-700 space-y-1">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Age:</strong> {student.age} years old</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Course:</strong> {student.course}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentInfo;