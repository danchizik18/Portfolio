import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Contact.scss';

// Make sure to import Leaflet CSS
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default marker icon in react-leaflet
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm('service_lhsgxt5', 'template_dzq2wbk', form.current, '4LJYR1ts629Dnh6H6')
      .then(
        () => {
          setIsLoading(false);
          setIsSuccess(true);
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (error) => {
          setIsLoading(false);
          alert('Failed to send the message, please try again');
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hey y'all! I'm a CS + DS major at UC Berkeley with a passion for AI, ML, and Data Engineering in defense, sports, and in general innovative tech. Feel free to reach out, I'd love to hear from you!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required />
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Berkeley, <br />
          California, <br />
          2601 Warring St, Berkeley, CA 94720 <br />
          <span>danchizik@berkeley.edu</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[37.8692, -122.2590]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[37.8692, -122.2590]}>
              {/* <Popup>UC Berkeley - A hub for innovation and learning!</Popup> */}
            </Marker>
          </MapContainer>
        </div>
      </div>
      {isLoading && <Loader type="pacman" />}
      {isSuccess && <div className="success-message">Message Sent Successfully!</div>}
    </>
  );
};

export default Contact;
