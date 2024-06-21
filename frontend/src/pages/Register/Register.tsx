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
    role:["READER"]
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

  const handleCreator = () => {
    setFormData((preData) => ({
      ...preData,
      role: preData.role[0]==="READER"?["CREATOR"]:["READER"],
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
          role:["READER"]
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

        <div className="relative">
          <input
            className="text-violet-500 focus:ring-violet-300 border-gray-300 peer rounded-lg w-6 h-6 absolute top-7 left-4 "
            id="custom-checkbox"
            name="custom-checkbox"
            type="checkbox"
            value="custom-checkbox"
            onChange={handleCreator}
          />
          <label
            className="w-[400px] h-[80px] cursor-pointer flex flex-row justify-between items-center border rounded-lg p-4  
          active:bg-violet-700 
          peer-focus:outline-none peer-focus:ring peer-focus:ring-violet-300 
          peer-checked:border-violet-300 peer-checked:bg-violet-100
          hover:bg-violet-100"
            htmlFor="custom-checkbox"
          >
            <div className="flex flex-row justify-between items-center w-[380px] ml-10 mr-4">
              <div>
                <h3 className="font-bold">I want a creator</h3>
                <p className="text-sm text-gray-400">Access to create content</p>
              </div>
              <p className="font-bold text-violet-600">Free</p>
            </div>
          </label>
        </div>

        <input
          type="submit"
          value="Register"
          className="bg-indigo-600 w-full m-5 text-white py-2 
          hover:cursor-pointer hover:bg-indigo-950 transition-colors "
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
