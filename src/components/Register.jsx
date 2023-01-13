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
    <button
        type="button"
        className="logbtn btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#register"
      >
        SIGN IN
      </button>


    <div
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
              <h4 style={{ color: "yellow" }}>CREATE YOUR ACCOUNT</h4>
              <button className=" btn btn-dark "> Back </button>
              <span style={{ color: "white" }}>mail de la persona</span>
            </div>
            <form onSubmit={handleSubmit(registerUser)}>
              <div className="w-75 mx-auto mb-3">
                <input
                  type="text"
                  {...register("firstName", {
                    required: true,
                    pattern: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                  })}
                  placeholder="First Name"
                  className="form-control"
                  id="recipient-fname"
                />
              </div>
              {errors.firstName?.type === "required" && (
                <p className="w-75 mx-auto" style={{ color: "red" }}>
                  Required
                </p>
              )}
              {errors.firstName?.type === "pattern" && (
                <p className="w-75 mx-auto" style={{ color: "red" }}>
                  Please enter a valid name.
                </p>
              )}
              <div className="w-75 mx-auto mb-3">
                <input
                  type="text"
                  {...register("lastName", {
                    required: true,
                    pattern: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
                  })}
                  placeholder="Lasst Name"
                  className="form-control"
                  id="recipient-lname"
                />
              </div>
              {errors.lastName?.type === "required" && (
                <p className="w-75 mx-auto" style={{ color: "red" }}>
                  Required
                </p>
              )}
              {errors.lastName?.type === "pattern" && (
                <p className="w-75 mx-auto" style={{ color: "red" }}>
                  Please enter a valid name.
                </p>
              )}
              <div className="w-75 mx-auto mb-3">
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.[A-Za-z])(?=.\d)[A-Za-z\d]{8,}$/,
                  })}
                  placeholder="Password"
                  className="form-control"
                  id="recipient-fname"
                />
              </div>
              {errors.password?.type === "required" && (
                <p className="w-75 mx-auto" style={{ color: "red" }}>
                  Required
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="w-75 mx-auto" style={{ color: "red" }}>
                  Please enter a valid password.
                </p>
              )}
              
              <div className="w-75 mx-auto mb-3">
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="form-control btn btn-secondary text-center mb-5"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default Register