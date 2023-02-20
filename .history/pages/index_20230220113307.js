import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    // Code to run on component mount
  }, []);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      // Code to handle login API call
      history.push('/dashboard'); // Navigate to dashboard on successful login
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false);
  }

  return (
    <div>
      <h1>Login</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <Form.Text className="text-danger">Please enter a valid email address</Form.Text>}
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register('password', { required: true })} />
          {errors.password && <Form.Text className="text-danger">Please enter your password</Form.Text>}
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log in'}
        </Button>

        {errorMessage && <Form.Text className="text-danger">{errorMessage}</Form.Text>}
      </Form>
    </div>
  );
}

export default Login;