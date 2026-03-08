import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import codingGif from '../assets/Coding.gif';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ loading: false, message: '' });

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string().matches(/^[A-Za-z\s]+$/, 'Only letters allowed').required('Required'),
      email: Yup.string().matches(/@gmail\.com$/, 'Must be a @gmail.com address').required('Required'),
      message: Yup.string().min(1).max(500).required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      setStatus({ loading: true, message: 'Sending...' });

      // DO NOT USE PLACEHOLDERS HERE. COPY-PASTE FROM DASHBOARD.
      emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        form.current, 
        'YOUR_PUBLIC_KEY' 
      )
      .then(() => {
        setStatus({ loading: false, message: 'Message sent!' });
        resetForm();
      })
      .catch((err) => {
        setStatus({ loading: false, message: `Error: ${err.text}` });
      });
    },
  });

  return (
    <div className="min-h-[100vh] bg-[#020202] text-white flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-[#050505] border border-white/10 p-8 rounded-xl">
        <div className="flex justify-center mb-6">
          <img src={codingGif} alt="Dev" className="w-16 h-16 rounded-full border border-white/10" />
        </div>

        <form ref={form} onSubmit={formik.handleSubmit} className="space-y-4">
          <input name="name" placeholder="Name" onChange={formik.handleChange} value={formik.values.name}
            className="w-full bg-transparent border-b border-white/20 p-2 text-xs outline-none" />
          
          <input name="email" placeholder="example@gmail.com" onChange={formik.handleChange} value={formik.values.email}
            className="w-full bg-transparent border-b border-white/20 p-2 text-xs outline-none" />
          
          <textarea name="message" placeholder="Message" rows="3" onChange={formik.handleChange} value={formik.values.message}
            className="w-full bg-transparent border-b border-white/20 p-2 text-xs outline-none resize-none" />

          <button type="submit" disabled={status.loading}
            className="w-full bg-white text-black py-2 text-[10px] uppercase font-bold hover:bg-gray-200 transition-all">
            {status.loading ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {status.message && <p className="mt-4 text-[9px] text-center text-gray-400">{status.message}</p>}
      </div>
    </div>
  );
};

export default Contact;