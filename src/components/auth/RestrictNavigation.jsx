import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie';

const RestrictNavigation = (Component) => {
    const AuthComponent = (props) => {
        const cookies = new Cookies();
        const location = useLocation();
        const isAuthenticated = cookies.get('token');
    
        if (isAuthenticated && location.pathname === '/signin' || isAuthenticated && location.pathname === '/signup') {
            return <Navigate to="/" />;
        }

        return <Component {...props} />;
      };
      return AuthComponent
}

export default RestrictNavigation