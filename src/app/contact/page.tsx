'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              
              {/* Phone */}
              <div className="mb-8">
                <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-400">+91 9876 543 210</p>
                <p className="text-gray-500 text-sm mt-1">Mon-Fri 9AM-6PM IST</p>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-400">info@fitacademy.com</p>
                <p className="text-gray-500 text-sm mt-1">We'll reply within 24 hours</p>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-white font-semibold text-lg mb-2">Address</h3>
                <p className="text-gray-400">123 Fitness Hub</p>
                <p className="text-gray-400">New Delhi, Delhi 110001</p>
                <p className="text-gray-500 text-sm mt-1">India</p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="text-blue-400 hover:text-blue-300 transition">
                    Facebook
                  </Link>
                  <Link href="#" className="text-blue-400 hover:text-blue-300 transition">
                    Twitter
                  </Link>
                  <Link href="#" className="text-blue-400 hover:text-blue-300 transition">
                    Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              
              {submitted ? (
                <div className="bg-green-900/20 border border-green-500 rounded-lg p-6 text-center">
                  <p className="text-green-400 font-semibold text-lg">
                    ✓ Message Sent Successfully!
                  </p>
                  <p className="text-gray-400 mt-2">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                      placeholder="Satyam Mishra"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                      placeholder="mishra@satyam.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                      placeholder="+91 9876 543 210"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="course">Course Inquiry</option>
                      <option value="membership">Membership</option>
                      <option value="training">Personal Training</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden h-96">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="FitAcademy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7234234!2d77.1234567!3d28.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFitAcademy%2C%20New%20Delhi!5e0!3m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}