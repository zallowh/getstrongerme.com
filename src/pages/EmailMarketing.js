import React from 'react'
import Emailmarketing from '../assets/email.webp';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";


const EmailMarketing = () => {
  return (
    <div>
         {/* Section 5: Email Marketing */}
      <div className='px-5 py-10'>
          <div className='p-0'>
            <h1 className='text-4xl font-extrabold text-blue-300 px-5 py-10'>
              Boost Engagement with Email Marketing
            </h1>
            <p className='text-2xl text-gray-500 font-bold '>
              Our personalized email marketing strategies are designed to nurture customer relationships, increase customer loyalty, and drive conversions.
            </p>
            <p className='text-gray-300 text-xl '>
              Keep your customers engaged and coming back for more with personalized, targeted email campaigns. Our email marketing services include:
            </p>

            <div className='text-gray-300 text-xl  p-5'>
              <p className='mb-5'>
                <strong>Segmentation: </strong>We segment your audience to ensure each customer receives emails tailored to their interests and behavior.
              </p>
              <p className='mb-5'>
                <strong>Automated Workflows:</strong> Set up drip campaigns that nurture leads and convert them into customers over time.
              </p>
              <p className='mb-5'>
                <strong>Interactive Content:</strong> Use polls, surveys, and interactive elements to engage your email subscribers.
              </p>
              <p className='mb-5'>
                <strong>Personalization:</strong> Send emails with personalized subject lines and content to increase open rates and engagement.
              </p>
              <p className='mb-5'>
                <strong>Re-Engagement Campaigns:</strong> Win back inactive subscribers with strategic re-engagement campaigns that reignite their interest in your business.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start '>
            <img src={Emailmarketing} height={200} width={200} alt='email marketing img' className='w-full' />
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-xl'>
              <li>Personalized Emails: Tailored content that resonates with your audience.</li>
              <li>Boost Customer Loyalty: Keep customers coming back with regular, value-driven emails.</li>
              <li>Increase Sales: Use email promotions to drive sales and maximize ROI.</li>
              <li>Track Campaign Performance: Get detailed analytics on open rates, click-throughs, and conversions.</li>
              <li>Automated Campaigns: Set up drip campaigns to continuously engage with leads.</li>
            </ul>
          </div>

          <p className='text-xl text-gray-200 italic p-5'>
            <strong>Stats:</strong> Email marketing delivers an average ROI of R4 for every R1 spent. Moreover, personalized email campaigns have been shown to increase click-through rates by 14% and conversion rates by 10%.
          </p>
      </div>

      <div className='flex justify-between items-center py-15 px-2 m-5 gap-0'> 
  
  <div className="items-center gap-2">
    <IoLocationSharp style={{ color: '#ea4335', fontSize: '30px' }} />
    <p className="text-xl text-gray-200 italic">Johannesburg,</p>
    <p className="text-xl text-gray-200 italic">South Africa</p>   
</div>


<div className='py-15 px-0 m-0 gap-0'>
        <h4 className='text-blue-300 text-right px-5 text-3xl font-sm blink-text'>CONTACT US</h4>
        <div >
          <div style={{ display: 'flex', gap: '20px', fontSize: '40px', justifyContent: 'flex-end' }}>
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
            <a href="mailto:info@getstrongerme.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope style={{ color: '#ea4335' }} />
            </a>
            <a href="tel:+27663973313" target="_blank" rel="noopener noreferrer">
              <FaPhone style={{ color: '#4caf50' }} />
            </a>
          </div>
        </div>
    </div>
    </div>
       
    </div>
  )
}

export default EmailMarketing