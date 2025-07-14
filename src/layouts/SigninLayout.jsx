import { useSelector } from 'react-redux';
import Alert from '../components/CustomAlert'
import { useAuth } from '../context/AuthContext';
import '../css/Signin.css'
const SigninLayout = ({heading,children}) => {
    const {show} = useSelector((state)=> state.alert)
  return (
    // <SigninForm/>
    <section className="" style={{minHeight: "85vh"}}>
        {show && <Alert severity="success" text="this is success"/>}
            <div className="container-fluid h-custom" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="container">
                        <div className="heading">{heading}</div>
                        {children}
                        <span className="agreement"><a href="#">Learn user licence agreement</a></span>
                    </div>
                </div>
            </div>

            
        </section>
  )
}

export default SigninLayout
