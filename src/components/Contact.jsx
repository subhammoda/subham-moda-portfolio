import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('🏁 Thank you for your message! I will get back to you!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Team Radio',
      link: 'mailto:subham.moda4@gmail.com'
    },
    {
      icon: '📱',
      title: 'Pit Wall',
      link: 'tel:+15513445739'
    },
    {
      icon: '📍',
      title: 'Home Circuit',
      value: 'United States',
      link: null
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg',
      url: 'https://linkedin.com/in/subhammoda',
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      url: 'https://github.com/subhammoda',
      color: '#333'
    },
    {
      name: 'X',
      icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg',
      url: 'https://x.com/modasubham',
      color: '#1a1a1a'
    }
  ];

  return (
    <section id="contact" className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-title"
      >
        <h2>📞 Pit Lane Access</h2>
      </motion.div>

      <div className="row justify-content-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="col-lg-8 col-md-10 col-sm-12 mb-4"
        >
          <div className="card" style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
            <h4 className="mb-4">📲 Let's Connect</h4>
            <p className="contact-intro mb-4">
              Ready to join the championship team? I'm always interested in new opportunities and collaborations. Whether you have a question or just want to discuss data engineering or talk about F1, feel free to reach out!
            </p>
            
            <div className="contact-info">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="contact-item"
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h6>{info.title}</h6>
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        Click to {info.title === 'Team Radio' ? 'Email' : 'Call'}
                      </a>
                    ) : (
                      <span className="contact-link">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links" style={{ marginTop: '2rem' }}>
              <h6 className="mb-3">🏆 Follow the Championship</h6>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ '--social-color': social.color }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <img src={social.icon} alt={social.name + ' logo'} width="20" height="20" style={{marginRight: '0.4rem', verticalAlign: 'middle', filter: 'brightness(0) invert(1)'}} />
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 