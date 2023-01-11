import loginlogos from "../assets/img/login-logo.png";
import { useForm } from "react-hook-form";

const Register = () => {

    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();

    const registerUser = () => {



    } 


  return (
    <>

    <h1>HOLA ENTRARE EN REGISTRO</h1>
   {/*  <div
        className="modal fade"
        id="register"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="registerLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <img
                className="logosInLogin w-75 mx-auto"
                src={loginlogos}
                alt="our logos"
              />
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body w-75 mx-auto">
              <h4 style={{ color: "yellow" }}>ENTER YOUR EMAIL ADDRESS</h4>
            </div>
            <form onSubmit={handleSubmit(registerUser)}>
              <div className="w-75 mx-auto mb-3">
                <input
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                  placeholder="Email Address"
                  className="form-control"
                  id="recipient-name"
                />
              </div>
              {errors.email?.type === "required" && (
                <p className="w-75 mx-auto" style={{ color: "red" }}>
                  Required
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="w-75 mx-auto" style={{ color: "red" }}>
                  Please enter a valid email address.
                </p>
              )}
              <div className="w-75 mx-auto mb-3">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="form-control btn btn-secondary text-center mb-5"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
  
}

export default Register