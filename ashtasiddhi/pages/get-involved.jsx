// pages/get-involved.js
import Link from 'next/link';
import useScrollFadeIn from '../lib/useScrollFadeIn';

export default function GetInvolved() {
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

      <section className="section fade-in get-involved">
        <h1>Get Involved</h1>
        <ul className="involved-list">
          <li><strong>Donate:</strong> Feed a family today.</li>
          <li><strong>Volunteer:</strong> Join our kitchen or teaching teams.</li>
          <li><strong>Partner:</strong> Corporate sponsorships & events.</li>
        </ul>
        <div className="cta-buttons fade-in">
          <button onClick={() => window.location.href='mailto:volunteer@ngo.org'}>Volunteer</button>
          <button onClick={() => window.location.href='#contact'}>Donate</button>
        </div>
      </section>
    </main>
  );
}
