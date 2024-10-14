import React from 'react'
import Webdev from '../assets/web.jpg';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";

const WebDev = () => {
  return (
            <div>
                {/* Section 2: Static Websites and Deployment */}
            <div className=' px-5 py-10 m-0'>
                <div className='py-0 px-5 m-0'>
                    <h1 className='text-4xl font-extrabold text-blue-300 px-5 py-10'>
                    Unlock the Full Potential of Your Business Online with Us! Static Websites and Custom Web Development
                    </h1>
                    <p className='text-2xl text-gray-500 font-bold '>
                    Partner with us to create a professional website that is tailored to your business needs and drives customer engagement.
                    </p>
                    <p className='text-gray-300 text-xl '>
                    Our custom website development services ensure your business achieves greater visibility and engagement.
                    In today’s competitive market, having a user-friendly, secure, and visually appealing website is crucial for any business. At StrongerMe, we develop custom static websites designed to:
                    </p>

                    <div className='text-gray-300 text-xl p-5 '>
        <p className='mb-5'>
            <strong>Capture User Attention:</strong> Beautifully designed, responsive websites that work seamlessly across all devices.
        </p>
        <p className='mb-5'>
            <strong>Faster Load Times:</strong> Optimized websites that load quickly, reducing bounce rates and increasing user engagement.
        </p>
        <p className='mb-5'>
            <strong>Cost-Effective Development:</strong> A static website is ideal for businesses looking to establish an online presence quickly and affordably.
        </p>
        <p className='mb-5'>
            <strong>Easy Maintenance:</strong> Our static websites require minimal updates and are perfect for small businesses or startups.
        </p>
        <p className='mb-5'>
            <strong>Optimized for Conversions:</strong> Every element of the website is designed to turn visitors into customers, through various methods or clear calls to action.
        </p>
        </div>

          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start py-0 px-5 m-0'>
            <img src={Webdev} height={300} width={400} alt='webdev img' className='w-full' />
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-xl'>
              <li>Maximize Your Reach: Tap into new markets with a mobile-friendly website that enhances user experience.</li>
              <li>Boost Visibility with SEO: Our SEO-optimized websites help increase your site's ranking on Google.</li>
              <li>Engage and Convert: Turn visitors into loyal customers with content that drives engagement.</li>
              <li>Secure and Scalable: Built to last, ensuring your website can handle growth over time.</li>
              <li>Custom Integrations: Tailored solutions that fit your business workflows and needs.</li>
            </ul>
          </div>

        <p className='text-xl text-gray-200 italic p-5'>
          <strong>Stats:</strong> Did you know that 94% of first impressions of your business website are design-related? Moreover, 88% of online consumers are less likely to return to a site after a bad experience.
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

export default WebDev