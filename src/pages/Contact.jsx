import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import codingGif from '../assets/Coding.gif';

const Contact = () => {
  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only A-Z letters').required('Required'),
      email: Yup.string().matches(/@gmail\.com$/, 'Must be @gmail.com').required('Required'),
      message: Yup.string().min(1).max(1000).required('Required'),
    }),
    onSubmit: (values) => {
      // This triggers the user's mail client (Gmail, Outlook, etc.)
      const mailtoLink = `mailto:fenilpatel0301@gmail.com?subject=New Portfolio Message from ${values.name}&body=Email: ${values.email}%0D%0A%0D%0AMessage:%0D%0A${values.message}`;
      window.location.href = mailtoLink;
    },
  });

  const getStatusStyle = (field) => {
    if (!formik.touched[field]) return 'text-gray-500';
    return formik.errors[field] ? 'text-red-500' : 'text-green-500';
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-[#050505] border border-white/10 p-8 rounded-xl shadow-2xl">
        <div className="flex justify-center mb-6">
          <img src={codingGif} className="w-16 h-16 rounded-full border border-white/10" alt="Dev" />
        </div>
        
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <input name="name" placeholder="Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name}
              className="w-full bg-transparent border-b border-white/20 p-2 text-xs outline-none" />
            <span className={`text-[9px] ${getStatusStyle('name')}`}>
              {formik.touched.name && (formik.errors.name || "Name is valid")}
            </span>
          </div>

          <div>
            <input name="email" placeholder="example@gmail.com" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
              className="w-full bg-transparent border-b border-white/20 p-2 text-xs outline-none" />
            <span className={`text-[9px] ${getStatusStyle('email')}`}>
              {formik.touched.email && (formik.errors.email || "Email is valid")}
            </span>
          </div>

          <div>
            <textarea name="message" placeholder="Message" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}
              className="w-full bg-transparent border-b border-white/20 p-2 text-xs outline-none resize-none" />
            <span className={`text-[9px] ${getStatusStyle('message')}`}>
              {formik.touched.message && (formik.errors.message || `${formik.values.message.length}/1000 characters`)}
            </span>
          </div>

          <button type="submit" className="w-full bg-white text-black py-3 text-[10px] uppercase font-bold hover:bg-cyan-500 transition-all">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;