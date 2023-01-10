import loginlogos from "../assets/img/login-logo.png";
// Deps
import { useContext } from "react";
import { useForm } from "react-hook-form";
// Context
import { StarshipsContext } from "../context/StarshipsContext";

const Login = () => {
  const { setUser } = useContext(StarshipsContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const loginUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  return (
    <>
      <button
        type="button"
        className="logbtn btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        SIGN IN
      </button>

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
            <form onSubmit={handleSubmit(loginUser)}>
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
      </div>
    </>
  );
};

export default Login;
