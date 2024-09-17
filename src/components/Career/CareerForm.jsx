import React from 'react'
import { useForm } from 'react-hook-form'
import careerForm from "../../assets/careerForm.jpg"

const CareerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission here
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      <div className="md:w-1/2 p-16 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-zinc-950">Career Application</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-zinc-950 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && <span className="text-black">{errors.name.message}</span>}
          </div>
          <div>
            <label htmlFor="email" className="block text-zinc-950 mb-1">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.email && <span className="text-black">{errors.email.message}</span>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-zinc-950 mb-1">Phone</label>
            <input
              type="tel"
              id="phone"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.phone && <span className="text-black">{errors.phone.message}</span>}
          </div>
          <div>
            <label htmlFor="position" className="block text-zinc-950 mb-1">Desired Position</label>
            <input
              type="text"
              id="position"
              {...register("position", { required: "Position is required" })}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.position && <span className="text-black">{errors.position.message}</span>}
          </div>
          <div>
            <label htmlFor="resume" className="block text-zinc-950 mb-1">Upload Resume</label>
            <input
              type="file"
              id="resume"
              {...register("resume", { required: "Resume is required" })}
              className="w-full p-2 border border-gray-300 rounded bg-white"
            />
            {errors.resume && <span className="text-black">{errors.resume.message}</span>}
          </div>
          <button type="submit" className="w-full bg-red-600
          md:w-[200px] text-white p-2 rounded hover:bg-gray-800 transition-colors">
            Submit Application
          </button>
        </form>
      </div>
      <div className="md:w-1/2 bg-white flex items-center justify-center p-8">
        <img src={careerForm} alt="Career opportunities" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  )
}

export default CareerForm