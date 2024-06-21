import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

// The creation of this hook is for access data of AuthProvider
const useAuth = () => useContext(AuthContext);

export default useAuth;
