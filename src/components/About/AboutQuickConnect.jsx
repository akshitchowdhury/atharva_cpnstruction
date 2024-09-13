import React, { useState } from 'react';

export default function AboutQuickConnect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    budget: '',
    city: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission here
  };

  return (
    <div className="bg-[#1D2B44] text-white p-8 min-h-[400px] relative">
      <h1 className="text-4xl font-light text-center mb-8">Quick Connect</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email ID</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white"
              placeholder="Email ID"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="mobile" className="sr-only">Mobile</label>
            <div className="flex">
              <span className="text-white/50 pr-2 py-2">+91</span>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white"
                placeholder="Mobile"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="budget" className="sr-only">Budget</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full bg-transparent border-b
              cursor-pointer border-white/30 py-2 focus:outline-none focus:border-white"
              required
            >
              <option className='text-red-600' value="" disabled>Budget</option>
              <option className='text-red-600'value="low">Low</option>
              <option  className='text-red-600' value="medium">Medium</option>
              <option  className='text-red-600' value="high">High</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="city" className="sr-only">City</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-white"
            required
          >
            <option value="" disabled>City</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="bangalore">Bangalore</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label htmlFor="agree" className="text-sm">
            By submitting this form, I agree to be contacted by a member of the Atharva Constructions and Interiors team.
          </label>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-500 text-white px-8 py-2 rounded-full hover:bg-red-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
      {/* <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-2 rotate-90 origin-right">
        Feedback
      </div> */}
    </div>
  );
}
