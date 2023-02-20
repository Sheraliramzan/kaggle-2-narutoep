import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Head from 'next/head';

export default function FormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (data) => {
    setSubmitting(true);
  };

  useEffect(() => {
    if (submitting) {
      const timer = setTimeout(() => {
        window.location.href = '/narutoep';
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitting]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center bg-no-repeat bg-fixed bg-cover" style={{backgroundImage: "url(/back.webp)"}}>
         <Head>
        <title>LOGIN</title>
        <meta name="description" content="NarutoEps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Sharingan.webp" />
      </Head>
      <div className={`bg-yellow-100 p-8 rounded-lg shadow-md bg-no-repeat bg-contain  bg-fixed ${submitting ? 'animate-fade-out' : ''}`} style={{backgroundImage: "url(/Sharingan.webp)", backgroundPosition: 'center', backgroundSize: "20%"}}>
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="name">Name:</label>
            <input className="border rounded w-full py-2 px-3" type="text" id="name" {...register('name', { required: true })} />
            {errors.name && <span className="text-red-500">Please enter your name</span>}
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="email">Email:</label>
            <input className="border rounded w-full py-2 px-3" type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <span className="text-red-500">Please enter a valid email address</span>}
          </div>

          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="password">Password:</label>
            <input className="border rounded w-full py-2 px-3" type="password" id="password" {...register('password', { required: true, minLength: 8 })} />
            {errors.password && <span className="text-red-500">Please enter a password with at least 8 characters</span>}
          </div>

          <div className="mt-6">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" type="submit">Submit</button>
          </div>
        </form>
      </div>

      {submitting && (
        <div className="bg- p-8 rounded-lg shadow-md animate-fade-in bg-no-repeat bg-contain  bg-fixed" style={{backgroundImage: "url(/Sharingan.webp)", backgroundPosition: 'center', backgroundSize: "20%"}} >
          <h1 className="text-3xl font-bold mb-6">Thanks for submitting!</h1>
          <p className="text-lg">Redirecting to Naruto episode...</p>
        </div>
      )}
    </div>
  );
}

