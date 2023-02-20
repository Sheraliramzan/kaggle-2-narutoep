import React from 'react';
import { useForm } from 'react-hook-form';
import Head from 'next/head';

const FormPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Head>
        <title>NarutoEps</title>
        <meta name="description" content="NarutoEps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link className={` ${isLoaded ? 'animate-bounce' : ""}`} rel="icon" href="/Sharingan.webp" />
      </Head>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register('name', { required: true })} />
          {errors.name && <span>Please enter your name</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Please enter a valid email address</span>}
        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;