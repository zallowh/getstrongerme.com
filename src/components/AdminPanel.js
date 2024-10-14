import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaNodeJs, FaReact, FaGithub, FaAws } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import fullstack from '../assets/fullstack.png';

const AdminPanel = () => {
  return (
    <div className='relative flex'>
      <aside className='relative min-h-full shadow-md w-full max-w-60 flex flex-col'>
        <div className='flex flex-col justify-center items-center p-4'>
          <hr className='w-full my-4 border-t border-gray-300' />
          <h1 className='text-center text-lg font-sans font-semibold mb-4'>
            CONTACT US
          </h1>

          {/* Social media icons */}
          <main className='text-center mb-4 px-5 py-0'>
            <div style={{ display: 'flex', gap: '20px', fontSize: '2vw', justifyContent: 'flex-end' }}>
              <a href="https://www.facebook.com/profile.php?id=61565659931076&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebook style={{ color: '#3b5998' }} />
              </a>

              <a href="https://www.instagram.com/strongermersa" target="_blank" rel="noopener noreferrer">
                <FaInstagram style={{ color: '#E1306C' }} />
              </a>

              <a href="https://x.com/_strongerme?t=qmSwghjZWNxbuuhzaIiEkw&s=09" target="_blank" rel="noopener noreferrer">
                <FaTwitter style={{ color: '#1da1f2' }} />
              </a>

              <a href="https://wa.me/27663973313" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp style={{ color: '#25d366' }} />
              </a>

              <a href="mailto:strongerme.online@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope style={{ color: '#ea4335' }} />
              </a>

              <a href="tel:+27663973313" target="_blank" rel="noopener noreferrer">
                <FaPhone style={{ color: '#4caf50' }} />
              </a>
            </div>
          </main>

          <hr className='w-full my-4 border-t border-gray-300' />

          {/* StrongerMe section */}
          <div style={{ paddingTop: '250px' }}>
            <div
              style={{
                transform: 'rotate(90deg)',
                fontSize: '10rem',
                textAlign: 'center',
                lineHeight: '0.9',
              }}
            >
              <h1
                style={{
                  fontSize: 'clamp(4rem, 6vw, 12vw)', // Responsive size for the main heading
                  fontWeight: 'bold',
                  margin: '0',
                }}
              >
                STRONGERME
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2vw, 3vw)', // Responsive size for the subtext
                  fontWeight: 'lighter',
                  margin: '0',
                  letterSpacing: 'clamp(0.2rem, 0.5vw, 1vw)', // Adjust letter-spacing responsively
                  whiteSpace: 'nowrap',
                }}
              >
                Popularity, traffic & conversion
              </p>
            </div>
          </div>

          {/* Tech stack icons */}
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '25px', fontSize: '50px', paddingTop: '250px' }}>
            <FaNodeJs style={{ padding: '10px', color: '#68A063' }} />
            <FaReact style={{ padding: '10px', color: '#61DBFB' }} />
            <FaGithub style={{ padding: '10px', color: '#ffffff' }} />
            <SiNetlify style={{ padding: '10px', color: '#00C7B7' }} />
            <FaAws style={{ padding: '10px', color: '#FF9900' }} />
          </div>

          {/* Section for Developers */}
          <div className='p-10'>
            <h1 className='text-2xl font-bold text-white mb-4'>Are you a Developer?</h1>
            <p className='text-lg text-gray-300 mb-6'>
              Whether you're struggling with React apps, JavaScript, CSS, or Frontend deployments on Amazon, Netlify, and Vercel or you want to partner? - Contact Us!
            </p>
            <div className='flex justify-center'>
              <img src={fullstack} alt='fullstack' className='max-w-full h-auto' />
            </div>
          </div>

          {/* Location section */}
          <div style={{ paddingTop: '50px' }}>
            <FaMapMarkerAlt style={{ fontSize: '24px', color: '#FF5722' }} />
            <span className='text-blue-300'>Our Location: MALVERN, Johannesburg, South Africa</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AdminPanel;
