import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'universal-cookie'

const AuthRoute = (Component) => {
    const AuthenticatedComponent = (props) =>{
        const cookies = new Cookies();
        const isAuthenticated = cookies.get('token');
        const location = useLocation();

        if(!isAuthenticated){
            return <Navigate to="/signin" />;
        }

        return <Component {...props}/>

    }

  return AuthenticatedComponent
}

export default AuthRoute