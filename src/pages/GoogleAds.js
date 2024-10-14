import React from 'react'
import Googleads from '../assets/googleads.png';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";


const GoogleAds = () => {
  return (
    <div>
         {/* Section 3: Google Ads and SEO */}
      <div className='px-5 py-10'>
          <div className='p-0'>
            <h1 className='text-4xl font-extrabold text-blue-300 px-5 py-10'>
              Drive More Traffic with Google Ads & Search Engine Optimization (SEO)
            </h1>
            <p className='text-2xl text-gray-500 font-bold '>
              Our Google Ads and SEO services are designed to increase organic traffic and help your business rank higher on Google.
            </p>
            <p className='text-gray-300 text-lg '>
            Get your business in front of the people who are searching for your services with our expert Google Ads and SEO strategies. Here’s how we do it:
            </p>

            <div className='text-gray-300 text-xl p-5 '>
              <p className='mb-5'>
                <strong>Precise Targeting:</strong> We identify your target market and create ads that speak directly to their needs.
              </p>
              <p className='mb-5'>
                <strong>Local SEO Focus:</strong> Target customers in your geographical area with local SEO techniques that help your business rank on Google Maps and local searches.
              </p>
              <p className='mb-5'>
                <strong>Competitor Analysis:</strong> Stay ahead of your competitors by understanding their strategies and optimizing your campaigns accordingly.
              </p>
              <p className='mb-5'>
                <strong>Performance Tracking:</strong> We use advanced analytics to track and optimize the performance of your ads, ensuring the best possible ROI.
              </p>
              <p className='mb-5'>
                <strong>Ad Extensions:</strong> Enhance your Google Ads with location, call, and site link extensions that boost visibility.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start '>
            <img src={Googleads} height={200} width={200} alt='googleleads img' className='w-full' />
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-xl'>
              <li>Targeted Ads: Personalized Google Ads campaigns to boost traffic and engagement.</li>
              <li>Boost Organic Traffic: Increase your site's visibility without paying for ads.</li>
              <li>Higher Conversion Rates: Optimize your content for better Google rankings.</li>
              <li>Comprehensive Keyword Strategy: Target the right audience with the most effective keywords.</li>
              <li>Continuous Optimization: We regularly adjust campaigns to maximize ROI.</li>
            </ul>
          </div>

          <p className='text-xl text-gray-200 italic p-5'>
            <strong>Stats:</strong> Companies using SEO experience an average increase in lead generation by 14.6%. Meanwhile, businesses earn R2 for every R1 spent on Google Ads, making it one of the most cost-effective marketing strategies.
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

export default GoogleAds