// pages/about.js
import Link from 'next/link';
import useScrollFadeIn from '../lib/useScrollFadeIn';

export default function About() {
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
        <h1>About Us</h1>
        <p>
          Founded on August 20, 2022, Shri Ashtasiddhi Hanumanji Foundation is
          committed to uplifting underprivileged communities in Pune through
          meals, education, and vocational training.
        </p>
        <p>
          Our mission is to nourish, educate, and empower—building a stronger,
          healthier society for all.
        </p>
      </section>
    </main>
  );
}