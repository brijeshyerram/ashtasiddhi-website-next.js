// pages/programs.js
import Image from 'next/image';
import Link from 'next/link';
import useScrollFadeIn from '../lib/useScrollFadeIn';

export default function Programs() {
  useScrollFadeIn();

  const programs = [
    {
      img: '/annapurna.jpg',
      title: 'Annapurna Seva',
      desc: 'Nutritious meals & monthly rations for 15,000+ individuals each month.',
    },
    {
      img: '/saksham.jpg',
      title: 'Saksham Program',
      desc: 'Vocational training in tailoring, beautician skills, security & English.',
    },
    {
      img: '/akshara.jpg',
      title: 'Akshara Program',
      desc: 'Educational support & mentorship for underprivileged children.',
    },
    {
      img: '/gaumata.jpg',
      title: 'Gau Mata Seva',
      desc: 'Gaushalas: fodder, healthcare & shelter for sacred cows.',
    },
  ];

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
        <h1>Our Programs</h1>
        {programs.map((p, i) => (
          <div key={i} className="program-item fade-in">
            <Image src={p.img} alt={p.title} width={400} height={300} />
            <div className="program-text">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
