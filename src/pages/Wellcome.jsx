import ReactHowler from "react-howler";
import themeStarWars from "../assets/music/StarWarsTheme.mp3";
import "bootstrap/dist/css/bootstrap.min.css";

const Wellcome = () => {
  return (
    <>
      <ReactHowler src={themeStarWars} playing={false} />
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={3000}>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/ep4_ilm_233_c9ad1a7e.jpeg"
              className="d-block w-75 mx-auto"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Rebel Alliance</h5>
              <p>
                The Rebel Alliance stood bravely against the evil of the
                Galactic Empire, never backing down despite overwhelming odds.
                Formed from resistance movements that arose during the Clone
                Wars, the Rebellion worked in secret for decades to overthrow
                the Emperor and restore democracy to the galaxy. Eventually,
                armed with the firepower of ships like the X-wing and A-wing,
                and the leadership of figures including Princess Leia and
                Admiral Ackbar, the Rebel Alliance triumphed over the Empire at
                the Battle of Endor.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/ep4_ilm_169_ad7be5fe.jpeg"
              className="d-block w-75 mx-auto"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Darth Vader</h5>
              <p>
                Once the heroic Jedi Knight named Anakin Skywalker, Darth Vader
                was seduced by the dark side of the Force. Forever scarred by
                his defeat on Mustafar, Vader was transformed into a
                cybernetically-enhanced Sith Lord. At the dawn of the Empire,
                Vader led the Empire’s eradication of the Jedi Order and the
                search for survivors. He remained in service of the Emperor --
                the evil Darth Sidious -- for decades, enforcing his Master’s
                will and seeking to crush the Rebel Alliance and other
                detractors. But there was still good in him….
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/ep4_ilm_167_9976ed61.jpeg"
              className="d-block w-75 mx-auto"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Obi-Wan Kenobi</h5>
              <p>
                A legendary Jedi Master, Obi-Wan Kenobi was a noble man and
                gifted in the ways of the Force. He trained Anakin Skywalker,
                served as a general in the Republic Army during the Clone Wars,
                and guided Luke Skywalker as a mentor.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </>
  );
};

export default Wellcome;
