// @ts-nocheck
import { useState } from 'react';
import { Link } from 'react-router-dom';
import connect from '../../lib/connectAxios';

import { SchemaRegister } from './SchemaRegister';
import Input from '../../components/Input';
import Alert from '../../components/Alert';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const [errorForm, setError] = useState({});

  const [notification, setNotification] = useState({
    message: null,
    kind: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (errorForm.hasOwnProperty(name)) {
      const errorFound = { ...errorForm };
      delete errorFound[name];
      setError(errorFound);
    }

    setFormData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('hizo click');
    
    const isValid = SchemaRegister.safeParse(formData);
    console.log(isValid);
    
    if (isValid.success) {
      console.log('Voy a mandar');
      console.log(formData);
      
      
      console.log('all ok');
      try {
        const { data } = await connect.user.post('auth/register', formData);
        console.log(data);
        
        setNotification({
          message: data,
          kind: 'success',
        });

        setFormData({
          username: '',
          email: '',
          password: '',
          repeatPassword: '',
        });
      } catch (err) {
        setNotification({
          message: 'Error',
          kind: 'error',
        });
      }
    } else {
      isValid.error.issues.forEach((err) => {
        setError((prev) => ({ ...prev, [err.path]: err.message }));
      });
    }
  };

  return (
    <div>
      <h2 className="capitalize text-center text-indigo-600 font-bold text-2xl">
        Create new account
      </h2>
      {notification.message && (
        <Alert
          message={notification.message}
          kind={notification.kind}
          setNotification={setNotification}
        />
      )}
      <form
        className="my-10 bg-white shadow px-10 py-5"
        onSubmit={handleSubmit}
      >
        <Input
          id="username"
          kind="text"
          title="username"
          value={formData.username}
          placeholder="Input your username"
          onInput={handleInputChange}
          error={errorForm.username}
        />
        <Input
          id="email"
          kind="email"
          title="email"
          value={formData.email}
          placeholder="Write your email"
          onInput={handleInputChange}
          error={errorForm.email}
        />
        <Input
          id="password"
          kind="password"
          title="password"
          value={formData.password}
          placeholder="****"
          onInput={handleInputChange}
          error={errorForm.password}
        />
        <Input
          id="repeatPassword"
          kind="password"
          title="repeat your password"
          value={formData.repeatPassword}
          placeholder="****"
          onInput={handleInputChange}
          error={errorForm.repeatPassword}
        />
        <input
          type="submit"
          value="Register"
          className="bg-indigo-600 w-full m-2 text-white py-2 
          hover:cursor-pointer hover:bg-indigo-950 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-around">
        <Link
          className="block text-center my-5 text-indigo-600 uppercase text-sm"
          to="/"
        >
          Login
        </Link>
      </nav>
    </div>
  );
};
