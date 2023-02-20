import React from 'react';
import { useForm } from 'react-hook-form';

const FormPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Form Page</h1>

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

        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" {...register('message', { required: true })}></textarea>
          {errors.message && <span>Please enter a message</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormPage;