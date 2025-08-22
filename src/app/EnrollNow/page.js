"use client";
import { useState } from "react";

export default function EnrollNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted ✅:", formData);
    alert("Your enrollment request has been submitted!");
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-6">
      <div className="bg-[#F9F7F0] shadow-lg rounded-lg p-8 w-full max-w-2xl">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-[#750B4E] mb-6">
          Enroll Now
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Fill out the form below to join our courses and start your journey.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#750B4E]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#750B4E]"
            />
          </div>
          {/* Contact Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <input
              type="numbers"
              name="contact"
              placeholder="Enter your your number"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#750B4E]"
            />
          </div>

          {/* Course Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Course
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#750B4E]"
            >
              <option value="">-- Choose a course --</option>
              <option value="digital-design">Textile Designing</option>
              <option value="fabric-printing">Digital Printing</option>
              <option value="freelancing">Fashion Illustration</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message (Optional)
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#750B4E]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#750B4E] text-white px-6 py-3 rounded-md font-medium hover:bg-[#5a083c] transition"
            >
              Submit Enrollment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
