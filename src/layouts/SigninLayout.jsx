import '../css/Signin.css'
const SigninLayout = ({heading,children}) => {
  return (
    // <SigninForm/>
    <section className="" style={{minHeight: "85vh"}}>
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
