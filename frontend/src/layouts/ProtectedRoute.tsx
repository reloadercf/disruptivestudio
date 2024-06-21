import React from 'react';

import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Loading from '../components/Loading';

const MainWrapper = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className="flex-1 p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export const ProtectedRoute: React.FC = () => {
  // @ts-ignore: Unreachable code error
  const { auth, isLoad } = useAuth();
  if (isLoad) return <Loading />;

  return <>{auth && auth._id ? <MainWrapper /> : <Navigate to="/" />}</>;
};
