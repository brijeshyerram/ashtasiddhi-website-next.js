// pages/founders.js
import Link from 'next/link';
import useScrollFadeIn from '../lib/useScrollFadeIn';

export default function Founders() {
  useScrollFadeIn();

  return (
    <main className="main">
      <header className="navbar fade-in">
        <div className="logo">SHREE ASHTASIDDHI HANUMANJI FOUNDATION</div>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <div className="dropdown">
            <button className="dropbtn">Who We Are ▼</button>
            <div className="dropdown-content">
              <Link href="/about">About Us</Link>
              <Link href="/founders">Founders</Link>
            </div>
          </div>
          <Link href="/programs">Programs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/get-involved">Get Involved</Link>
          <Link href="/blogs">Blogs</Link>
        </nav>
      </header>

      <section className="section fade-in">
        <h1>Founders</h1>
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
      </section>
    </main>
  );
}
