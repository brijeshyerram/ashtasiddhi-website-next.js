// pages/gallery.js
import Link from 'next/link';
import Image from 'next/image';
import useScrollFadeIn from '../lib/useScrollFadeIn';
import fs from 'fs';
import path from 'path';

export default function Gallery({ images }) {
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

      <section className="section fade-in gallery">
        <h1>Gallery</h1>
        <div className="gallery-grid">
          {images.map((src) => (
            <div key={src} className="fade-in">
              <Image
                src={`/${src}`}
                alt={src}
                width={300}
                height={200}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const publicDir = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(publicDir);
  const images = files.filter(file =>
    ['.jpg', '.jpeg', '.png', '.webp', '.gif'].includes(path.extname(file).toLowerCase())
  );
  return { props: { images } };
}
