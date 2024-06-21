import React, { useEffect } from 'react';

type SetNotificationType = (notification: {
  message: string | null;
  kind: string | null;
}) => void;

interface AlertPops {
  message: string;
  kind?: string;
  setNotification: SetNotificationType;
}
const Alert: React.FC<AlertPops> = ({ message, kind, setNotification }) => {
  useEffect(() => {
    setTimeout(() => {
      console.log('Borrando estado');
      setNotification({
        message: null,
        kind: null,
      });
    }, 10000);
  }, []);

  return (
    <div>
      {kind === 'success' ? (
        <div
          className="bg-cyan-200 border-t-4 border-cyan-600 rounded-b text-cyan-700 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex justify-center">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-cyan-700 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                />
                <path
                  fill="#fff"
                  d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold">{message}</p>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="bg-pink-300 border border-pink-500 text-pink-600 px-4 py-3 rounded relative flex justify-center"
          role="alert"
        >
          <svg
            className="fill-current h-6 w-6 text-pink-600 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 3 6 2V1m5 2 1-1V1M9 7v11M9 7a5 5 0 0 1 5 5M9 7a5 5 0 0 0-5 5m5-5a4.959 4.959 0 0 1 2.973 1H12V6a3 3 0 0 0-6 0v2h.027A4.959 4.959 0 0 1 9 7Zm-5 5H1m3 0v2a5 5 0 0 0 10 0v-2m3 0h-3m-9.975 4H2a1 1 0 0 0-1 1v2m13-3h2.025a1 1 0 0 1 1 1v2M13 9h2.025a1 1 0 0 0 1-1V6m-11 3H3a1 1 0 0 1-1-1V6"
            />
          </svg>
          <span className="block sm:inline"> {message}</span>
        </div>
      )}
    </div>
  );
};

export default Alert;
