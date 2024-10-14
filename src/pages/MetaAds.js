import React from 'react'
import Metaads from '../assets/mata.png';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";


const MetaAds = () => {
  return (
    <div>
         {/* Section 4: Facebook & Instagram Ads */}
      <div className='px-5 py-10'>
          <div className='p-0'>
            <h1 className='text-4xl font-extrabold text-blue-300 py-10 px-5'>
              Expand Your Reach with Facebook & Instagram Ads
            </h1>
            <p className='text-2xl text-gray-500 font-bold '>
              Our tailored Facebook Ads and Instagram advertising strategies increase brand awareness and boost sales.
            </p>
            <p className='text-gray-300 text-xl '>
            With billions of active users on Facebook and Instagram, social media advertising is one of the most effective ways to reach your audience. Here’s what we offer:
            </p>

            <div className='text-gray-300 text-xl  p-5 mb-6'>
              <p className='mb-5'>
                <strong>Creative Content:</strong> Our team creates engaging, scroll-stopping content that resonates with your audience.
              </p>
              <p className='mb-5'>
                <strong>Lookalike Audiences:</strong> Reach new potential customers who are similar to your existing customer base with our advanced targeting strategies.
              </p>
              <p className='mb-5'>
                <strong>Conversion Tracking:</strong> Know exactly which ads are driving traffic and sales with our comprehensive conversion tracking tools.
              </p>
              <p className='mb-5'>
                <strong>Ad Optimization:</strong> We continuously test and refine your ads to ensure optimal performance across Facebook and Instagram.
              </p>
              <p className='mb-5'>
               <strong> Brand Storytelling:</strong> Use powerful visuals and engaging narratives to connect with your audience on a deeper level.
              </p>
            </div>
          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-start '>
            <img src={Metaads} height={200} width={200} alt='metaAds img' className='w-full' />
            <ul className='list-disc pl-5 text-gray-200 space-y-2 text-xl'>
              <li>Tailored Campaigns: Ads customized for your target audience, driving engagement.</li>
              <li>Drive Engagement: Increase brand visibility with social media ads that work.</li>
              <li>Increase Conversions: Higher sales through effective social media campaigns.</li>
              <li>In-Depth Analytics: Get real-time insights into how your ads are performing.</li>
              <li>Audience Retargeting: Re-engage customers who have interacted with your brand before.</li>
            </ul>
          </div>

          <p className='text-xl text-gray-200 italic p-5'>
            <strong>Stats:</strong> On average, Facebook Ads convert at 9.21%, making it one of the highest-converting platforms. Additionally, 68% of users say they have purchased a product directly from seeing an Instagram ad.
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

export default MetaAds