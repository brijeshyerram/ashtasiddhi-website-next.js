// pages/index.jsx
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const elems = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          o.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    elems.forEach(el => obs.observe(el));
  }, []);

  return (
    <main className="main">
      {/* NAVBAR */}
      <header className="navbar fade-in">
        <div className="logo">
          SHREE ASHTASIDDHI HANUMANJI FOUNDATION
        </div>
        <nav className="nav-links">
          <a href="#hero">Home</a>
          <div className="dropdown">
            <button className="dropbtn">Who We Are ▼</button>
            <div className="dropdown-content">
              <a href="/about">About Us</a>
              <a href="/founders">Founders</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Programs ▼</button>
            <div className="dropdown-content">
              <a href="/annapurna-seva">Annapurna Seva</a>
              <a href="/annapurna-seva">Sakshham Program</a>
              <a href="/annapurna-seva">Akshara Program</a>
              <a href="/annapurna-seva">Gau Mata Seva</a>
              {/* <a href="/founders">Founders</a> */}
            </div>
          </div>
          <a href="/gallery">Gallery</a>
          <a href="/get-involved">Get Involved</a>
          <a href="/blogs">Blogs</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero" className="hero fade-in">
        <Image
          src="/hero.jpg"
          alt="Hero image"
          fill
          className="hero-image"
        />
        <div className="hero-content">
          <h1>हम बनाएं सशक्त और सुदृढ़ जीवन।</h1>
          <p>Rakshalekha Hsg Soc, Koregoan Park, Pune – 411001</p>
          <p>Ph: +91 85305 11172</p>
          <div className="cta-buttons fade-in">
          {/* <button onClick={() => window.location.href='mailto:volunteer@ngo.org'}>Volunteer</button> */}
          <button onClick={() => window.location.href='#contact'}>Donate</button>
          <button onClick={() => window.location.href='mailto:volunteer@ngo.org'}>Volunteer</button>
        </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features fade-in">
        <h2>Explore Our Work</h2>
        <div className="features-grid">
          <div className="feature-item fade-in">
            <Image src="/about-overview.jpg" alt="Who We Are"  fill className="feature-icon" />
            <div className="content-about">
            <h3>Who We Are</h3>
            <p>Learn about our mission, values, and the people driving change.</p>
            <a href="/about">Learn More →</a>
            </div>
          </div>
          <div className="feature-item fade-in">
            <Image src="/programs-overview.jpg" alt="Programs" fill className="feature-icon" />
            <div className="content-about">
            <h3>Programs</h3>
            <p>Discover our initiatives: meals, training, education, and more.</p>
            <a href="#programs">View Programs →</a>
            </div>
          </div>
          <div className="feature-item fade-in">
          <div className="content-about">
            <Image src="/gallery-overview.jpg" alt="Gallery" fill className="feature-icon" />
            <h3>Gallery</h3>
            <p>A glimpse into our daily work and community moments.</p>
            <a href="#gallery">Browse Gallery →</a>
            </div>
          </div>
          <div className="feature-item fade-in">
            <Image src="/involved-overview.jpg" alt="Get Involved" fill className="feature-icon" />
            <div className="content-about">
            <h3>Get Involved</h3>
            <p>Find out how you can volunteer, donate, or partner with us.</p>
            <a href="#get-involved">Get Involved →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT (brief) */}
      <section id="about" className="section fade-in">
        <img src="/about.jpg" alt="About us" className="section-image" />
        <h2>About Us</h2>
        <p>
          Founded on August 20, 2022, our foundation serves underprivileged communities in Pune
          by delivering nutritious meals, educational support, and vocational training.
        </p>
        <a href="/about">Read full About Us →</a>
      </section>

      {/* FOUNDERS (brief) */}
      <section id="founders" className="section fade-in">
        <h2>Founders</h2>
        <div className="foundersGrid">
          <div className="founder fade-in">
            <img src="/founder1.jpg" alt="Dr. A. Sharma" />
            <h3>Dr. A. Sharma</h3>
            <p>20+ years in community health & education.</p>
          </div>
          <div className="founder fade-in">
            <img src="/founder2.jpg" alt="Ms. R. Kulkarni" />
            <h3>Ms. R. Kulkarni</h3>
            <p>Social entrepreneur & women’s empowerment advocate.</p>
          </div>
        </div>
        <a href="/founders">Meet all Founders →</a>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="section fade-in">
        <h2>Our Programs</h2>
        <div className="program-list">
          {[
            { img:'/annapurna.jpg', title:'Annapurna Seva',link:'/annapurna-seva',text:'We are extensively engaged in the distribution of hot meals to more than 15,000 people monthly, we are committed to the distribution of monthly rations to families in need.' },
            { img:'/saksham.jpg', title:'Saksham Program',link:'/annapurna-seva',text:'We provide trainings to empower women. We provide vocational trainings for free including Beauticians courses, Security services, Tailoring program and spoken English thus promoting self- employment.' },
            { img:'/akshara.jpg', title:'Akshara Program',link:'/annapurna-seva',text:'We aspire to provide educational resources to children.We also provide free education assistance to young girls with potential.' },
            { img:'/gaumata.jpg', title:'Gau Mata Seva',link:'/annapurna-seva',text:'According to our scriptures, cow is our mother, at our foundation strive to take care of the cows by building Gaushalas, providing proper fodder with proper medical treatments thus nurturing and nourishing them.' }
          ].map((p,i)=>(
            <div key={i} className="program-item fade-in">
              <Image src={p.img} alt={p.title} width={300} height={300}/>
              <div className="program-text">
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a href={p.link}>Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section fade-in">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {['/hero.jpg','/about.jpg','/about-overview.jpg','/gallery-overview.jpg'].map((src,i)=>(
            <img key={i} src={src} alt={`Gallery ${i+1}`} width={400} height={200}/>
          ))}
          
        </div>
        <a href='/gallery' marginTop='10px'style={{ marginTop: '2rem' }}>See more →</a>
      </section>

      {/* GET INVOLVED */}
      <section id="get-involved" className="section fade-in">
        <h2>Get Involved</h2>
        <ul className="involved-list">
          <li><strong>Donate:</strong> Feed a family today.</li>
          <li><strong>Volunteer:</strong> Join our meal & teaching teams.</li>
          <li><strong>Partner:</strong> Corporate sponsorships & events.</li>
        </ul>
        <div className="cta-buttons fade-in">
          <button onClick={()=>window.location.href='mailto:volunteer@ngo.org'}>Volunteer</button>
          <button onClick={()=>window.location.href='#contact'}>Donate</button>
        </div>
      </section>

      {/* BLOGS */}
      <section id="blogs" className="section fade-in">
        <h2>Blogs</h2>
        {[
          { title:'Community Kitchen Insights', date:'May 1, 2025', excerpt:'Inside our daily meal prep & distribution.' },
          { title:'Women’s Empowerment Stories', date:'Apr 15, 2025', excerpt:'How Saksham graduates are making change.' }
        ].map((b,i)=>(
          <div key={i} className="blog-post fade-in">
            <h3>{b.title}</h3>
            <small>{b.date}</small>
            <p>{b.excerpt}</p>
            <a href="#">Read more →</a>
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer fade-in">
        <p>
          Contact us at{' '}
          <a href="mailto:shriashtasiddhijanumanji@gmail.com">
            shriashtasiddhijanumanji@gmail.com
          </a>
        </p>
        <p>© 2025 SHREE ASHTASIDDHI HANUMANJI FOUNDATION</p>
      </footer>
    </main>
  );
}
