// @ts-nocheck

import { z } from 'zod';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import Alert from '../components/Alert';
import Input from '../components/Input';
import connect from '../lib/connectAxios';

import useAuth from '../hooks/useAuth';

const loginSchema = z.object({
  email: z.string().email().min(5, { message: 'Complete your email' }),
  password: z.string().min(5, { message: 'Complete your password' }),
});

export const Login = () => {
  const [cookies, setCookie] = useCookies(['session']);

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [notification, setNotification] = useState({
    message: null,
    kind: null,
  });
  const [errorForm, setError] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (errorForm.hasOwnProperty(name)) {
      const errorFound = { ...errorForm };
      delete errorFound[name];
      setError(errorFound);
    }

    setCredentials((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const isValidForm = loginSchema.safeParse(credentials);
    if (isValidForm.success) {
      const dateExpire = new Date();
      dateExpire.setDate(dateExpire.getDate() + 1);
      try {
        const { data } = await connect.user.post('/login', credentials);
        setCookie('session', data.token, {
          sameSite: true,
          expires: dateExpire,
          path: '/',
        });

        setAuth(data);
        setNotification({
          message: `Welcome ${data.email}`,
          kind: 'success',
        });
        navigate('projects');
      } catch (err) {
        setNotification({
          message: err.response.data.msj,
          kind: 'error',
        });
      }
    } else {
      isValidForm.error.issues.forEach((err) => {
        setError((prev) => ({ ...prev, [err.path]: err.message }));
      });
    }
  };
  return (
    <>
      <h1 className="text-indigo-600 font-black text-6xl capitalize">
        admin your
        <span className="text-slate-700"> projects</span>
      </h1>
      {notification.message && (
        <Alert
          message={notification.message}
          kind={notification.kind}
          setNotification={setNotification}
        />
      )}
      <form onSubmit={handleLogin} className="my-10 bg-white shadow px-10 py-5">
        <Input
          id="email"
          kind="email"
          title="Email"
          value={credentials.email}
          placeholder="example@domail.com"
          onInput={handleInputChange}
          error={errorForm.email}
        />
        <Input
          id="password"
          kind="password"
          title="Password"
          value={credentials.password}
          placeholder="***"
          onInput={handleInputChange}
          error={errorForm.password}
        />
        <input
          type="submit"
          value="Login"
          className="bg-indigo-600 w-full m-2 text-white py-2 
          hover:cursor-pointer hover:bg-indigo-950 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-around">
        <Link
          className="block text-center my-5 text-indigo-600 uppercase text-sm"
          to="/register"
        >
          Create account now!
        </Link>
        <Link
          className="block text-center my-5 text-indigo-600 uppercase text-sm"
          to="/forget-password"
        >
          Forgot your password?
        </Link>
      </nav>
    </>
  );
};
