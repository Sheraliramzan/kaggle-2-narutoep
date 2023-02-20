import React from 'react';
import { useForm } from 'react-hook-form';
import Head from 'next/head'

const FormPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <></>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Form Page</h1>

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
    </div>
  );
}

export default FormPage;