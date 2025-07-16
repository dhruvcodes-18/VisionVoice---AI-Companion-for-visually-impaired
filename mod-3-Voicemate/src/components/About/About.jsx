
import React, { useEffect, useRef } from 'react';
import './about.css';
import rohitImage from './assets/images/rohit.jpg';
import harmanpreetImage from './assets/images/harman.jpg';
import dishantImage from './assets/images/dishant.jpg';

const ServiceCard = React.forwardRef(({ imageSrc, name, description }, ref) => {
  return (
    <div className="service" ref={ref}>
      <img src={imageSrc} alt={name} />
      <div className="text">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
});

function About() {
  const serviceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    serviceRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      serviceRefs.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="Home">
      <header>
        <h1 className="site-title">CAPSTONE PROJECT FINAL</h1>
      </header>
      <section id="hero">
        <div className="hero-content">
          <h1>Welcome to Voice Assist</h1>
          <p>
            Welcome to VoiceAssist, where your success begins with us. We are dedicated to providing cutting-edge solutions that are tailored specifically to meet your unique needs. Discover how our solutions can help you achieve your goals and elevate your business to new heights. Your journey towards success starts now.
          </p>
          <a href="#services">Get Started</a>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <h2>Our Team</h2>
          <div className="services-grid">
            <ServiceCard 
              ref={el => (serviceRefs.current[1] = el)} 
              name="DHRUV SINHA" 
              description="A specialized professional focusing on building web applications using the MERN (MongoDB, Express.js, React, Node.js) technology stack. This stack offers a powerful and efficient way to develop full-stack web applications." 
            />
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2025 Capstone Project-2. All rights reserved. DHRUV SINHA 21BIT0649</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
