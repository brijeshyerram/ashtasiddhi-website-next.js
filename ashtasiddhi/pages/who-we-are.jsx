// pages/who-we-are.js
import Link from 'next/link';
import useScrollFadeIn from '../lib/useScrollFadeIn';

export default function WhoWeAre() {
  useScrollFadeIn();

  return (
    <main className="main">
      <header className="navbar fade-in">
        <div className="logo">SHREE ASHTASIDDHI HANUMANJI FOUNDATION</div>
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/who-we-are">Who We Are</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/get-involved">Get Involved</Link>
          <Link href="/blogs">Blogs</Link>
        </nav>
      </header>

      <section className="section fade-in">
        <h1>Who We Are</h1>
        <h2>About Us</h2>
        <p>
          Established on August 20, 2022 in Pune, our Foundation is dedicated to
          uplifting under-served communities by providing meals, education,
          and vocational training. We believe in dignity, empowerment, and
          sustainable impact.
        </p>

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
      </section>
    </main>
  );
}
