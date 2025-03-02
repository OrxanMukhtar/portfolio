import React, { useState, useEffect } from 'react';
import hero from './assets/img/heroPic.jpg';
import secretCallc from './assets/img/secretcallsProj.jpg';
import flowers from './assets/img/flowers.jpg'
import aboutImg from './assets/img/project1.jpg';
import toDoApp from './assets/img/toDoApp.jpg';
import ardunioPic from './assets/img/ardunioPic.jpg'
import complainsPic from './assets/img/complainsPic.jpg'

// import { useForm, ValidationError } from '@formspree/react';

const projects = [
  {
    id: 1,
    title: "SecureCalc Vault",
    description:
      "SecureCalc Vault is a unique application that blends the simplicity of a calculator with the security of a private gallery. After registering, users are prompted to enter a designated PIN code. Once the correct PIN is provided, the app reveals a hidden gallery where users can safely store and manage their photos and videos. This seamless fusion of functionality and privacy ensures that everyday calculations and your most treasured media are all secured in one innovative platform.",
    img: secretCallc,
    link: "https://secretcallc.vercel.app/"
  },
  {
    id: 2,
    title: "FlexiSite",
    description: "This is a flexible template that can be used as both an informational website and a sales platform. It can be customized upon request and adapted into an e-commerce site in any desired theme. With its modern design and user-friendly structure, it fits various business models seamlessly.",
    img: flowers,
    link: "https://flowers-theta-one.vercel.app/"
  },
  {
    id: 3,
    title: "To Do App",
    description: "Manage your tasks easily with a simple and user-friendly To-Do app. Add new tasks, mark completed ones, and keep your daily activities organized.",
    img: toDoApp,
    link: "https://todo1001.vercel.app/"
  },
  {
    id: 4,
    title: "Compiler & Emulator",
    description: "On our website, you can find comprehensive lessons on the Assembly programming language and Arduino. We provide detailed explanations and examples covering everything from basic concepts to advanced techniques. Our goal is to create a clear and informative resource for anyone interested in learning Assembly and Arduino.",
    img: ardunioPic,
    link: "https://flowgorithms.netlify.app/assets/html/argument-2"
  },
  {
    id: 5,
    title: "Comlains",
    description: "We have a website where you can easily share your complaints and suggestions. You can express your thoughts on any topic and make your voice heard. Our platform allows users to share their experiences and provide feedback for better solutions.",
    img: complainsPic,
    link: "https://sikayet.netlify.app/"
  }
];

const me = {
  name: "Allahverdi Mukhtarli",
  github: "https://github.com/mukhtarli.web",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  description1: "Web Designer & Developer",
  description: "Premium Web Design, Development, and SEO services to help your business stand out."
};

// function ContactForm() {
//   const [state, handleSubmit] = useForm("xanqrnol");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const animateElements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );
    animateElements.forEach(el => observer.observe(el));
    return () => {
      animateElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">Mukhtarli</div>
          <button
            className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu Toggle"
            aria-expanded={menuOpen}
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
          <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About me
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="section hero animate">
        <div className="container hero-container">
          <div className="hero-text">
            <h1>{me.description1}</h1>
            <p>{me.description}</p>
            <a href="#projects" className="btn">
              Projects
            </a>
          </div>
          <div className="hero-image">
            <img src={hero} alt="Hero" />
          </div>
        </div>
      </section>

      <section id="ticker">
  <div className="ticker-wrapper">
    <div className="ticker-content">
      <span>lets talk </span>
      <span> +++ </span>
      <span>lets talk </span>
      <span> +++ </span>
      <span className='dispNon'>lets talk </span>
      <span className='dispNon'> +++ </span>
      <span className='dispNon'>lets talk </span>
      <span className='dispNon'> +++ </span>

    </div>
    <div className="ticker-content">
      <span>lets talk </span>
      <span> +++ </span>
      <span>lets talk </span>
      <span> +++ </span>
      <span className='dispNon'>lets talk </span>
      <span className='dispNon'> +++ </span>
      <span className='dispNon'>lets talk </span>
      <span className='dispNon'> +++ </span>

    </div>
  </div>
</section>
      {/* About */}
      <section id="about" className="section about aboutDiv animate">
        <img src={aboutImg} alt="About" />
        <div className="container marginNull contSecond">
          <h2>About me</h2>
          <p className="textColor">
            Hi, I'm {me.name} - a freelancer specializing in premium web design, development, and SEO services. I'm passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let's work together to bring your vision to life!
          </p>
          <div className='contactLinkDiv'>
            <a href={me.instagram} target='blank'>Instagram</a>
            <a href='https://wa.me/994508335557' target='blank'>Whatsapp</a>
            <a href={me.github} target='blank'>GitHub</a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects animate">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <div className='imgDivP'>
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} rel="noopener noreferrer" target="_blank" className="btn btn-outline">
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact animate">
        <div className="container">
          <h2>Contact</h2>
          <form className="contact-form" action="https://formspree.io/f/xanqrnol" method="POST">
            <div className="form-row">
              <div className="form-group">
                <input type="text" id="formName" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" id="formEmail" name='email' placeholder="Email" />
              </div>
            </div>
            <div className="form-group">
              <textarea id="formMessage" name='message' rows="4" placeholder="Message"></textarea>
            </div>
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </div>
        {/* <ContactForm /> */}
        
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className='contactLinkDivFooter'>
          <a href={me.instagram} target='blank'>Instagram</a>
          <a href='https://wa.me/994508335557' target='blank'>Whatsapp</a>
          <a href={me.github} target='blank'>GitHub</a>
        </div>

      </footer>
    </div>
  );
}

export default App;
