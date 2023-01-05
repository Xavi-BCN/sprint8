import loginlogos from '../assets/img/login-logos.jpg'

const Login = () => {
  
    return (
        <>
        {/* Button trigger modal */}
        <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
        >
            SIGN IN
        </button>
        {/* Modal */}
        <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark">
                <div className="modal-header">
                <img className='logosInLogin w-75 mx-auto' src={loginlogos} alt="our logos" />
                
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                />
                </div>
                
                <div className="modal-body w-75 mx-auto">
                    
                    <h4 style={{ color: 'yellow' }} >ENTER YOUR EMAIL ADDRESS</h4>
                </div>
                <form>
                    <div className="w-75 mx-auto mb-3">
                        <input type="text" placeholder="Email Address" className="form-control" id="recipient-name" />
                    </div>
                    </form>
                
                <button type="button" className="btn btn-secondary text-center w-75 mx-auto mb-5">
                    Continue
                </button>
                
            </div>
            </div>
        </div>
        </>
  )
}

export default Login