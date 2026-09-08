import { useEffect, useState } from "react";
import "./App.css";
import img1 from "./img/img1.jpeg"
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpeg";
import img4 from "./img/img4.jpeg";
import img5 from "./img/img5.jpeg";
import outer from "./img/Outer.jpeg";

const rooms = [
  {
    title: "Single Room",
    image: img5,
    description: "Private and peaceful room for a comfortable stay.",
  },
  {
    title: "Double Sharing",
    image: img2,
    description: "Spacious room with modern furniture and comfort.",
  },
  {
    title: "Triple Sharing",
    image: img4,
    description: "Affordable and comfortable room for three residents.",
  },
 
];

const amenities = [
  ["bi-wifi", "High Speed Wi-Fi"],
  ["bi-shield-check", "24/7 Security"],
  ["bi-cup-hot", "Homely Food"],
  ["bi-droplet", "Hot Water"],
  ["bi-battery-charging", "Power Backup"],
  ["bi-house-check", "Housekeeping"],
];

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
  
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  
    }, []);
  
// =========================
  // GALLERY STATE
  // =========================

  const [galleryIndex, setGalleryIndex] = useState(0);

  const galleryImages = [
    {
      image: outer,
      alt: "Hostel Exterior",
    },
    {
      image: img1,
      alt: "Hostel Room",
    },
    {
      image: img2,
      alt: "Hostel Interior",
    },
    {
      image: img3,
      alt: "Hostel Common Area",
    },
    {
      image: img4,
      alt: "Hostel Bedroom",
    },
    {
      image: img5,
      alt: "Hostel Living Space",
    },
  ];

  const nextGallery = () => {
    setGalleryIndex(
      (prev) => (prev + 1) % galleryImages.length
    );
  };

  const previousGallery = () => {
    setGalleryIndex(
      (prev) =>
        (prev - 1 + galleryImages.length) %
        galleryImages.length
    );
  };

  const displayedImages = [
    ...galleryImages.slice(galleryIndex),
    ...galleryImages.slice(0, galleryIndex),
  ];

  return (
    <>
      {/* NAVBAR */}

      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container">

          <a className="navbar-brand" href="#home">
            <span>Shiv  Gajanan  PG  Studio  Rooms </span>
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">

            <ul className="navbar-nav ms-auto align-items-lg-center">

              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#rooms">
                  Rooms
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#amenities">
                  Amenities
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Gallery
                </a>
              </li>

              <li className="nav-item">
                <button
                  className="nav-btn"
                  onClick={() => scrollTo("contact")}
                >
                  BOOK NOW
                </button>
              </li>

            </ul>

          </div>
        </div>
      </nav>

      {/* HERO */}

      <section id="home" className="hero">

        <div className="hero-overlay"></div>

        <div className="container hero-container">

          <div className="hero-content">

            <p className="small-title">
              PREMIUM PG & CO-LIVING
            </p>

            <h1>
              LIVE.
              <br />
              <span>CONNECT.</span>
              <br />
              BELONG.
            </h1>

            <p className="hero-description">
              A thoughtfully designed living space for students,
              professionals and dreamers.
            </p>

            <button
              className="main-btn"
              onClick={() => scrollTo("rooms")}
            >
              EXPLORE ROOMS
              <i className="bi bi-arrow-right"></i>
            </button>

          </div>

          <div className="hero-bottom">

            <div>
              <strong>500+</strong>
              <span>Residents</span>
            </div>

            <div>
              <strong>5 ★★★★★</strong>
              <span>Google Rating</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

          </div>

        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE ↓
        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="about section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <p className="section-label">
                ABOUT US
              </p>

              <h2 className="big-heading">
                NOT JUST A
                <br />
                <span>PLACE TO STAY.</span>
              </h2>

            </div>

            <div className="col-lg-6">

              <p className="about-text">
                We create more than accommodation. We create a
                community where you can live comfortably, meet
                amazing people and enjoy every part of your city.
              </p>

              <p className="about-text">
                Fully furnished rooms, modern amenities, delicious
                food and a safe environment — everything you need,
                under one roof.
              </p>

              <button
                className="text-btn"
                onClick={() => scrollTo("contact")}
              >
                KNOW MORE
                <i className="bi bi-arrow-up-right"></i>
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ROOMS */}

      <section id="rooms" className="rooms section">

        <div className="container">

          <div className="section-top">

            <div>
              <p className="section-label">
                OUR ROOMS
              </p>

              <h2 className="big-heading">
                FIND YOUR
                <br />
                <span>SPACE.</span>
              </h2>
            </div>

            <p className="section-info">
              Choose a room that matches your lifestyle,
              comfort and budget.
            </p>

          </div>

          <div className="row g-4">

            {rooms.map((room, index) => (

              <div className="col-lg-4 col-md-6" key={index}>

                <div className="room-card">

                  <div className="room-image">

                    <img
                      src={room.image}
                      alt={room.title}
                    />

                    <div className="room-number">
                      0{index + 1}
                    </div>

                  </div>

                  <div className="room-details">

                    <h3>{room.title}</h3>

                    <p>{room.description}</p>

                    <div className="room-bottom">

                      {/* <div>
                        <small>STARTING FROM</small>
                        <strong>{room.price}</strong>
                        <small>/ MONTH</small>
                      </div> */}

                      <button
                        onClick={() => scrollTo("contact")}
                      >
                        <i className="bi bi-arrow-up-right"></i>
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* AMENITIES */}

      <section id="amenities" className="amenities section">

        <div className="container">

          <div className="row">

            <div className="col-lg-5">

              <p className="section-label">
                AMENITIES
              </p>

              <h2 className="big-heading white">
                EVERYTHING
                <br />
                <span>YOU NEED.</span>
              </h2>

              <p className="amenity-description">
                We've thought about the little things that make
                everyday living easier and better.
              </p>

            </div>

            <div className="col-lg-7">

              <div className="amenity-grid">

                {amenities.map((item, index) => (

                  <div className="amenity" key={index}>

                    <div className="amenity-icon">
                      <i className={`bi ${item[0]}`}></i>
                    </div>

                    <div>
                      <span>0{index + 1}</span>
                      <h4>{item[1]}</h4>
                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

  {/* =========================
    GALLERY
========================= */}

<section id="gallery" className="gallery section">

  <div className="container">

    {/* HEADING */}

    <div className="gallery-heading">

      <p className="section-label">
        OUR SPACE
      </p>

      <h2 className="big-heading">
        EXPERIENCE
        <br />
        <span>THE VIBE.</span>
      </h2>

      <p className="gallery-subtitle">
        Discover our comfortable rooms,
        beautiful interiors and vibrant
        community spaces.
      </p>

    </div>


    {/* GALLERY */}

    <div className="gallery-wrapper">

      {/* PREVIOUS BUTTON */}

      <button
        type="button"
        className="gallery-arrow gallery-prev"
        onClick={previousGallery}
        aria-label="Previous image"
      >
        <i className="bi bi-chevron-left"></i>
      </button>


      {/* IMAGE GRID */}

      <div className="gallery-grid">

        {/* LARGE IMAGE */}

        <div className="gallery-item gallery-large">

          <img
            src={displayedImages[0].image}
            alt={displayedImages[0].alt}
          />

          <div className="gallery-overlay">
            <span>
              {displayedImages[0].alt}
            </span>
          </div>

        </div>


        {/* IMAGE 2 */}

        <div className="gallery-item">

          <img
            src={displayedImages[1].image}
            alt={displayedImages[1].alt}
          />

          <div className="gallery-overlay">
            <span>
              {displayedImages[1].alt}
            </span>
          </div>

        </div>


        {/* IMAGE 3 */}

        <div className="gallery-item">

          <img
            src={displayedImages[2].image}
            alt={displayedImages[2].alt}
          />

          <div className="gallery-overlay">
            <span>
              {displayedImages[2].alt}
            </span>
          </div>

        </div>


        {/* IMAGE 4 */}

        <div className="gallery-item">

          <img
            src={displayedImages[3].image}
            alt={displayedImages[3].alt}
          />

          <div className="gallery-overlay">
            <span>
              {displayedImages[3].alt}
            </span>
          </div>

        </div>


        {/* IMAGE 5 */}

        <div className="gallery-item">

          <img
            src={displayedImages[4].image}
            alt={displayedImages[4].alt}
          />

          <div className="gallery-overlay">
            <span>
              {displayedImages[4].alt}
            </span>
          </div>

        </div>


        {/* IMAGE 6 */}

        <div className="gallery-item">

          <img
            src={displayedImages[5].image}
            alt={displayedImages[5].alt}
          />

          <div className="gallery-overlay">
            <span>
              {displayedImages[5].alt}
            </span>
          </div>

        </div>

      </div>


      {/* NEXT BUTTON */}

      <button
        type="button"
        className="gallery-arrow gallery-next"
        onClick={nextGallery}
        aria-label="Next image"
      >
        <i className="bi bi-chevron-right"></i>
      </button>

    </div>


    {/* DOTS */}

    <div className="gallery-dots">

      {galleryImages.map((_, index) => (

        <button
          key={index}
          type="button"
          className={
            galleryIndex === index
              ? "gallery-dot active"
              : "gallery-dot"
          }
          onClick={() => setGalleryIndex(index)}
          aria-label={`Gallery image ${index + 1}`}
        />

      ))}

    </div>

  </div>

</section>


      {/* CONTACT */}

      <section id="contact" className="contact section">

        <div className="container">

          <div className="row g-5">

            <div className="col-lg-5">

              <p className="section-label">
                CONTACT
              </p>

              <h2 className="big-heading">
                LET'S TALK
                <br />
                <span>ABOUT YOUR STAY.</span>
              </h2>

              <div className="contact-details">

                <p>
                  <i className="bi bi-geo-alt"></i>
                  Lane No. 1, Rakshak Nagar, Kharadi, 
                  Pune, Maharashtra 411014
                </p>

                <p>
                  <i className="bi bi-telephone"></i>
                  +91 77740 40397

                </p>


              </div>

            </div>

            <div className="col-lg-7">

              <form
                className="booking-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We will contact you soon.");
                }}
              >

                <div className="row g-4">

                  <div className="col-md-6">
                    <label>Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Room Type</label>

                    <select required>

                      <option value="">
                        Select room
                      </option>

                      <option>
                        Single Room
                      </option>

                      <option>
                        Double Sharing
                      </option>

                      <option>
                        Triple Sharing
                      </option>

                    </select>

                  </div>

                  <div className="col-12">

                    <label>Message</label>

                    <textarea
                      rows="5"
                      placeholder="Tell us about your requirements..."
                    ></textarea>

                  </div>

                  <div className="col-12">

                    <button className="submit-btn">
                      SEND ENQUIRY
                      <i className="bi bi-arrow-up-right"></i>
                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>
          {/* GOOGLE MAP */}
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps?q=Lane+No.+1,+Rakshak+Nagar,+Kharadi,+Pune,+Maharashtra+411014&output=embed"
      width="100%"
      height="350"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Shiv Gajanan PG Studio Rooms Location"
    ></iframe>
  </div>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="container">

          <div className="footer-top">

            <h2>
              <span>Shiv Gajanan PG Studio Rooms </span>
            </h2>

            <p>
              Your comfort. Your community.
              <br />
              Your second home.
            </p>

          </div>

          <div className="footer-bottom">
            <div className="socials">

              <a href="#instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#whatsapp">
                <i className="bi bi-whatsapp"></i>
              </a>

            </div>

          </div>

        </div>

      </footer>

      {/* WHATSAPP */}

      <a
        href="https://wa.me/917774040397"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

    </>
  );
}

export default App;