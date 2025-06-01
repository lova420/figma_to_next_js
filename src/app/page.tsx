// app/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
  <nav className="portfolio-nav">
    <Link href="#hero-section" className="nav-link">Home</Link>
    <Link href="#about-me" className="nav-link">About Me</Link>
    <Link href="#skills-section" className="nav-link">My Projects</Link>
    <Link href="#explore-section" className="nav-link">My Designs</Link>
    <Link href="#hire-me" className="nav-link">Contact Me</Link>
  </nav>
  <div className="header-skyblue"></div>
  <div className="header-blue"></div>
  <div className="header-violet"></div>
  <div className="header-white"></div>
</header>

      <main className="portfolio-main">
        <section id="hero-section" className="hero-section">
          <div className="hero-text">
            <h2>Welcome!</h2>
            <h2>
              I&apos;m <span>Vaishnavi</span>, a developer
            </h2>
            <p>
              I&apos;m here to guide you to success and turn your goals into reality.
              Let&apos;s achieve them together!
            </p>
            <div className="action-buttons">
              <a href="/resume.pdf" className="btn-primary">
                Resume
              </a>
              <a href="https://linkedin.com" className="btn-primary">
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <div className="hero-image">
              <Image src= "/woman-working-on-a-desk.webp" alt="Hero Image" width={350}  height={300} />
            </div>
            <div className="clock"> 
              <img src="/hero_image_clock.svg" alt="Clock Hero Image" width="180" height="180" />
            </div>
            <div className="bell">
              <img src="/hero_image_bell.svg" alt="Bell Hero Image" width="180" height="180" />
            </div>
            <div className="message">
              <img src="/hero_image_message.svg" alt="Message Hero Image" width="170" height="170" className="inverted"/>
            </div>
            <div className="pink-sphere">
              <img src="/hero_image_pink_sphere.svg" alt="PinkSphere Hero Image" width="45" height="45" />
            </div>
            <div className="sky-blue-sphere">
              <img src="/hero_image_sky_blue_sphere.svg" alt="SkyBlueSphere Hero Image" width="45" height="45" />
            </div>
            <div className="sil-sphere">
              <img src="/hero_image_silver_sphere.svg" alt="SilverSphere Hero Image" width="35" height="35" />
            </div>
          </div>
        </section>

        <section id="explore-section" className="explore-section">
          <div className="explore-background">
            <h1 className="explore-text">Explore</h1>
            <div className="floating-spheres">
              <div className="purple-sphere">
                <img src="/hero_image_purple_sphere.svg" alt="PurpleSphere Hero Image" width="55" height="55" />
              </div>
              <div className="blue-sphere">
                <img src="/hero_image_sky_blue_sphere.svg" alt="SkyBlueSphere Hero Image" width="55" height="55" />
              </div>
              <div className="silver-sphere">
                <img src="/hero_image_silver_sphere.svg" alt="SilverSphere Hero Image" width="53" height="53" />
              </div>
              <div className="purple-sphere-one">
                <img src="/hero_image_purple_sphere.svg" alt="PurpleSphere Hero Image" width="50" height="50" />
              </div>
              <div className="blue-sphere-one">
                <img src="/hero_image_sky_blue_sphere.svg" alt="SkyBlueSphere Hero Image" width="52" height="52" />
              </div>
              <div className="purple-sphere-two">
                <img src="/hero_image_purple_sphere.svg" alt="PurpleSphere Hero Image" width="55" height="55" />
              </div>
              <div className="silver-sphere-one">
                <img src="/hero_image_silver_sphere.svg" alt="SilverSphere Hero Image" width="48" height="48" />
              </div>
            </div>
          </div>
          <div className="explore-cards">
            <div className="explore-card">
              <p>Find My Projects and<br></br>Designs</p>
              <img src="/magnify_glass.svg" alt="MagnifyGlass Hero Image" width="60" height="60" />
            </div>
            <div className="explore-card">
            <p className="top-left">My Blogs</p>
            <p className="bottom-right">About Me</p>
            </div>
          </div>
        </section>

        <section id="about-me" className="about-me">
          <h2>Get to Know More</h2>
          <h1>About Me</h1>
          <p>I am a passionate and experienced web developer with a knack for creating intuitive and</p>
          <p>visually appealing interfaces. I enjoy solving problems, learning new skills, and</p>
          <p>collaborating with teams to bring ideas to life. My focus is on delivering quality work that</p>
          <p>makes a positive impact.</p>
        </section>

        <section id="skills-section" className="skills-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <Image src="/html-svgrepo-com.svg" alt="HTML" width={100} height={80} />
              <p>HTML</p>
            </div>
            <div className="skill-card">
              <Image src="/css-3-svgrepo-com.svg" alt="CSS" width={100} height={80} />
              <p>CSS</p>
            </div>
            <div className="skill-card">
              <Image src="/react-svgrepo-com.svg" alt="React.js" width={100} height={80} />
              <p>React.js</p>
            </div>
            <div className="skill-card">
              <Image src="/angular-svgrepo-com.svg" alt="Angular" width={100} height={80} />
              <p>Angular</p>
            </div>
            <div className="skill-card">
              <Image src="/node-js-svgrepo-com.svg" alt="Node.js" width={100} height={80} />
              <p>Node.js</p>
            </div>
            <div className="skill-card">
              <Image src="/java-svgrepo-com.svg" alt="JAVA" width={100} height={80} />
              <p>JAVA</p>
            </div>
            <div className="skill-card">
              <Image src="/spring-svgrepo-com.svg" alt="SpringBoot" width={100} height={80} />
              <p>Spring Boot</p>
            </div>
            <div className="skill-card">
              <Image src="/redux-svgrepo-com.svg" alt="Redux" width={100} height={80} />
              <p>Redux</p>
            </div>
            <div className="skill-card">
              <Image src="/aws-svgrepo-com.svg" alt="AWS" width={100} height={80} />
              <p>AWS</p>
            </div>
            <div className="skill-card">
              <Image src="/mysql-logo-svgrepo-com.svg" alt="MySQL" width={100} height={80} />
              <p>My SQL</p>
            </div>
            <div className="skill-card">
              <Image src="/postgresql-svgrepo-com.svg" alt="PostgreSQL" width={100} height={80} />
              <p>PostgreSQL</p>
            </div>
            <div className="skill-card">
              <Image src="/mongodb-svgrepo-com.svg" alt="MongoDB" width={100} height={80} />
              <p>MongoDB</p>
            </div>
          </div>
        </section>

        <section className="my-blogs-section">
          <h2 style={{ marginTop: '4rem', marginBottom: '2.5rem', textAlign: 'center', fontWeight: '400', fontSize: '1.8rem', color: '#1F3687' }}>
          My Blogs
          </h2>
      </section>
      <section className="aws-section">
        <section className="aws-section-top">
        </section>
        <section className="aws-section-1">
        </section>
        <section className="aws-section-2">
        </section>

        <div className="aws-container">
          <div className="aws-image-container">
            <Image
              src="/aws_vs_traditional.svg"
        alt="AWS vs Traditional"
        className="aws-image"
        width={350}
              height={350}
            />
          </div>
          <div className="aws-text-container">
          <h1 className="aws-heading">
        Getting Started with Amazon<br />
        Web Services (AWS)
      </h1>
    </div>
  </div>
      </section>

        <section id="hire-me" className="connect">
          <div className="hire_me">
            <h1 className="text-[3rem] font-normal text-[#332761] font-[var(--font-great-vibes)] text-center mt-[300px] mb-[50px]">
              Hire Me!
            </h1>
            <p>Gmail: vaishnavireddyg666@gmail.com</p>
            <p>Phone: | 214-898-3490</p>
            <Image src="/linkedin-svgrepo-com.svg" alt="LinkedIn" width={70} height={70} />
          </div>
        </section>
      </main>
    </div>
  );
}