import { useCookies } from 'react-cookie';
import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import connect from '../lib/connectAxios';

interface AuthProviderProps {
  children: ReactNode;
}

// @ts-ignore: Unreachable code error
const AuthContext = createContext();

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [isLoad, setLoad] = useState(true);

  const [cookies] = useCookies(['session']);

  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.session) {
      setLoad(false);
      return;
    }
    const getAuth = async () => {
      const config = {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${cookies.session}`,
        },
      };
      try {
        const { data } = await connect.user('/profile ', config);
        setAuth(data);
        setLoad(false);
        navigate('projects');
      } catch (err) {
        console.log(err);
      }
    };
    getAuth();
  }, []);
  
  return (
    <AuthContext.Provider value={{ auth, setAuth, isLoad }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
