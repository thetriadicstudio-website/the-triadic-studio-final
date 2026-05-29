'use client';

import { useState } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  className: string;
  img: string;
}

export default function Home() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { id: '01', title: 'The Moongate Garden', category: 'Sanctuary', className: 'layer-01', img: '/portfolio/1.jpg' },
    { id: '02', title: 'Hearth & Aviary', category: 'Pavilion', className: 'layer-02', img: '/portfolio/2.jpg' },
    { id: '03', title: 'The Threshold', category: 'Observatory', className: 'layer-03', img: '/portfolio/3.jpg' },
    { id: '04', title: 'Wabi Pavilion', category: 'Water Scape', className: 'layer-04', img: '/portfolio/4.jpg' },
    { id: '05', title: 'The Noor Retreat', category: 'Botanical', className: 'layer-05', img: '/portfolio/5.jpg' },
    { id: '06', title: 'Folded Light', category: 'Subterranean', className: 'layer-06', img: '/portfolio/6.jpg' },
    { id: '07', title: 'Grounded Atelier', category: 'Material Study', className: 'layer-07', img: '/portfolio/7.jpg' },
  ];

  return (
    <div className="studio-canvas">
      <div className="suede-grain-overlay"></div>

      <div className={`container-wrapper ${activeProject ? 'fullscreen-mode' : ''}`}>
        <header className="card header-card">
          <h1>The<br />Triadic<br />Studio</h1>
          <p className="subtitle" style={{ fontSize: '1rem', color: '#888', marginTop: '10px' }}>
            Portfolio - 3D Visualizations
          </p>
          <p className="tagline">You’re not late.<br />You’re exactly on time.</p>
        </header>

        <main className="portfolio-canvas-grid">
          {activeProject && (
            <button className="back-btn" onClick={() => setActiveProject(null)} style={{ marginBottom: '20px', cursor: 'pointer' }}>
              ← Back to Portfolio
            </button>
          )}
          {projects.map((project) => {
            const isTarget = activeProject?.id === project.id;
            return (
              <div
                key={project.id}
                className={`card project-card ${project.className} ${isTarget ? 'is-expanded' : ''}`}
                onClick={() => !activeProject && setActiveProject(project)}
              >
                <div className="card-bg" style={{ 
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: isTarget ? 'contain' : 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}></div>
                <div className="glass-base-plate"></div>
                <div className="glass-specular-rim"></div>
                <div className="card-content">
                  <span className="num">{project.id}</span>
                  <h3>{project.title}</h3>
                  <span className="category">{project.category}</span>
                </div>
              </div>
            );
          })}
        </main>

        <footer className="card footer-card">
          <div className="footer-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', textAlign: 'left', marginBottom: '30px' }}>
            <div className="footer-section">
              <h4>ABOUT</h4>
              <p className="about-text">The Triadic Studio is an architectural and interior design practice focused on creating timeless spaces that honor material, context, and experience.</p>
            </div>
            <div className="footer-section">
              <h4>BLUEPRINT</h4>
              <a href="https://a806f2bc-1ded-46e5-95c1-53a2e46d6522-00-1dcryh4t4adb5.kirk.replit.dev/" target="_blank" rel="noopener noreferrer">View Application</a>
            </div>
            <div className="footer-section">
              <h4>CONNECT</h4>
              <div className="social-links" style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="https://www.instagram.com/thetriadicstudio" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.behance.net/thetriadicstudio" target="_blank" rel="noopener noreferrer">Behance</a>
                <a href="https://pin.it/30VBzFfGn" target="_blank" rel="noopener noreferrer">Pinterest</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}