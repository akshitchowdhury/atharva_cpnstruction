import React, { useState } from 'react'
import contactBg from "../../assets/contactBg.jpg"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    location: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission here
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-12">
      <div className="md:w-1/2 h-[200px] md:h-auto text-white p-8 flex items-center justify-center relative overflow-hidden">
        <img src={contactBg} alt="Background" className="absolute inset-0 
        w-full h-full md:h-full object-contain md:object-cover mix-blend-multiply" />
        
      </div>
      <div className="md:w-1/2 p-8">
        <h2 className="text-3xl font-light mb-6">Personalised Full Home Interior Design</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name (required)</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (required)</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number (required)</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Location</label>
            <div className="mt-2 flex space-x-4">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, location: 'city1' }))}
                className={`p-4 border rounded-md ${formData.location === 'city1' ? 'border-indigo-500' : 'border-gray-300'}`}
              >
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, location: 'city2' }))}
                className={`p-4 border rounded-md ${formData.location === 'city2' ? 'border-indigo-500' : 'border-gray-300'}`}
              >
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border
               border-transparent rounded-md shadow-sm text-sm
               md:w-[200px] h-[40px] font-medium text-white
                bg-red-600 hover:bg-black 
               transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
