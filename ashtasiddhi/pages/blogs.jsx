// pages/blogs.js
import Link from 'next/link';
import useScrollFadeIn from '../lib/useScrollFadeIn';

export default function Blogs() {
  useScrollFadeIn();

  const posts = [
    { slug:'community-kitchen', title:'How Our Community Kitchen Works', date:'May 1, 2025', excerpt:'Behind the scenes of serving 600 meals daily.' },
    { slug:'women-empowerment', title:'Empowering Women Through Skill Training', date:'Apr 15, 2025', excerpt:'Meet our first batch of Saksham graduates.' },
    { slug:'akshara-success', title:'Akshara Program Success Stories', date:'Mar 28, 2025', excerpt:'From hardship to scholarship: student journeys.' },
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

      <section className="section fade-in blogs">
        <h1>Blogs</h1>
        {posts.map(p => (
          <article key={p.slug} className="fade-in blog-post">
            <h3>{p.title}</h3>
            <small>{p.date}</small>
            <p>{p.excerpt}</p>
            <Link href={`/blogs/${p.slug}`}>Read more →</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
