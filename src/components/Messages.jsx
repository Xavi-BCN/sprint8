import loginlogos from "../assets/img/login-logo.png";

const Messages = ({ error }) => {

  return (
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
          <h4 style={{ color: "yellow" }}>MENSAJE DE ERROR</h4>
        </div>
        <div className="w-75 mx-auto mb-3">
            <button
            type="submit"
            data-bs-dismiss="modal"
            className="form-control btn btn-secondary text-center mb-5">
            OK
            </button> 
        </div>
      </div>
    </div>
  </div>
  )
}

export default Messages