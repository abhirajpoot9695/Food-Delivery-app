import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header animate-popIn">
        <h1>Welcome to <span className="brand-name">FoodieHub</span></h1>
        <p>Aapki bhookh ka swadisht ilaaj, bas ek click door!</p>
      </header>

      {/* Main Content Section */}
      <section className="about-content">
        <div className="content-left animate-slideInLeft">
          <h2>Humaari Kahaani</h2>
          <p>
            FoodieHub ki shuruaat 2023 mein ek simple mission ke saath hui thi: 
            shehar ke sabse behtareen khane ko logon ke darwaze tak pahunchana. 
            Humaara maanna hai ki accha khana sirf pet nahin bharta, balki khushiyaan bhi lata hai.
          </p>
          <p>
            Aaj, hum hazaron restaurants ke saath milkar laakhon logon tak fresh aur 
            swadisht khana pahuncha rahe hain, aur har delivery ke saath ek muskaan!
          </p>
        </div>
        <div className="content-right animate-slideInRight">
          <img src="https://via.placeholder.com/500x300.png?text=Delivering+Happiness" alt="Delivery bike and food" className="about-image" />
        </div>
      </section>

      {/* Features/Values Section */}
      <section className="about-values">
        <h2>Hum Par Kyun Bharosa Karein?</h2>
        <div className="values-grid">
          <div className="value-card animate-fadeIn">
            <div className="icon">🚀</div>
            <h3>Tez Delivery</h3>
            <p>Humaara delivery team ensure karta hai ki aapka khana garam aur fresh mile, on time.</p>
          </div>
          <div className="value-card animate-fadeIn delay-1">
            <div className="icon">🥗</div>
            <h3>Quality Restaurants</h3>
            <p>Hum sirf shehar ke best rated restaurants ke saath hi collaborate karte hain.</p>
          </div>
          <div className="value-card animate-fadeIn delay-2">
            <div className="icon">💰</div>
            <h3>Affordable Prices</h3>
            <p>Pocket-friendly deals aur offers hamesha humaari priority hoti hai.</p>
          </div>
        </div>
      </section>
      
      {/* Additional Stats Section with Progress Bars (Optional) */}
        <section className="about-stats">
          <div className="stat-item">
            <div className="circular-progress-bar active" data-progress="95">
                <div className="progress-circle">95%</div>
            </div>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <div className="circular-progress-bar active" data-progress="98">
                <div className="progress-circle">98%</div>
            </div>
            <p>On-Time Delivery</p>
          </div>
        {/* </div> */}
        </section>
    </div>
  );
};

export default AboutPage;