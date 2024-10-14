import React from 'react';
import '../home.css';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";

const Home = () => {
  return (
    <div className='px-5 py-5'>

      
        {/* Section 1: Introduction and Overview */}
<div className='text-white '>
  <h1 className='text-4xl font-extrabold text-blue-300  py-5 px-10'>
    Transform Your Business with Our All-Inclusive Digital Solutions!
  </h1>
  <p className='text-gray-300 text-2xl font-sm p-5'>
    Welcome to StrongerMe! We empower businesses to thrive in the digital world by providing expert solutions that yield measurable results. In a rapidly changing digital landscape, simply having a website or social media presence is not enough. Success requires a carefully crafted strategy, consistent execution, and the right tools to unlock your business's full potential. Our focus is on helping you grow with our comprehensive services tailored to your unique needs. We pride ourselves on being one of the <strong>leading digital marketing agencies in South Africa</strong>, and we are here to assist you in building a powerful <strong>online presence</strong> that stands out in the competitive market.
  </p>

  <p className='text-gray-300 text-2xl font-sm px-5'>
    In this fast-paced era, effective <strong>digital marketing</strong> is essential for the growth and sustainability of any business. Whether you're targeting local customers through <strong>digital marketing in Johannesburg</strong> or expanding your reach across the country with <strong>digital marketing in South Africa</strong>, our team provides customized solutions to help you meet your goals. We understand the importance of reaching the right audience at the right time, which is why we specialize in <strong>advertising online</strong> through various platforms including <strong>social media advertising</strong>, search engines, and email campaigns. With StrongerMe, your business will thrive in an increasingly digital world.
  </p>

  <p className='text-gray-300 text-xl mt-4 px-5'>
    <strong>Our mission is to help your business connect with the right audience, increase sales, and maintain a competitive edge.</strong>
    We offer a wide range of services, from <strong>brand advertising</strong> and search engine optimization (SEO), to web development, content creation, and <strong>social media marketing in South Africa</strong>. By leveraging data-driven insights and industry trends, we ensure that your business stays ahead of competitors while delivering personalized, impactful campaigns that resonate with your customers. Whether it’s building brand awareness or driving sales, we’ve got the expertise to help your business succeed.
  </p>

  <p className='text-xl text-gray-200 mt-6 italic px-5 py-10'>
    Just as you’ve easily discovered us, your customers can discover you. Let us help your business achieve visibility and growth in the digital world with our strategic, data-driven approach to <strong>digital marketing</strong>. Success is just one click away.
  </p>
</div>
        <div className='px-5'>
          <p className='text-xl text-gray-300'>
            Maximizing sales is the key to long-term success for any business. By reaching your customers at the right time, with the right message, you can drive meaningful engagement and conversions. Our digital strategies ensure that your business remains at the forefront of your industry, consistently attracting new customers
           </p>
          </div>
           
          <div className=''>
          <hr className='w-full my-4 border-t border-gray-300' />
          <h5 className='block my-5 text-2xl font-bold text-blue-300 hover:text-gray-700 text-center blink-text'>
            Your Graphical User Interface(GUI) Is Not The Best, If It Is Not From Us!
          </h5>
          <hr className='w-full my-4 border-t border-gray-300' />
        </div>

            {/* Section 7: End Section */}
    <div className='px-5 py-10'>
      <h2 className='text-3xl font-extrabold text-blue-300 mb-6'>
        Don't Let Lost Sales Be Your Story
      </h2>
      <p className='text-xl text-gray-200'>
        Not making sales can critically impact your business. When your products or services are not reaching the right audience, you lose opportunities. A strategic, well-optimized digital presence prevents this from happening, keeping your business thriving.
        Losing sales due to poor visibility or lack of engagement can be detrimental to your growth. At StrongerMe, we help businesses like yours avoid these pitfalls by creating tailored marketing strategies that ensure you are always one step ahead of the competition.

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
  );
}
    
export default Home; 