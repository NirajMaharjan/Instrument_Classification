import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About TradInstrument.ai</h1>
          <p className="about-subtitle">
            Preserving and celebrating the rich musical heritage of Nepal through cutting-edge AI technology
          </p>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="cultural-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>The Cultural Significance of Nepali Music</h2>
              <div className="decorative-element" />
              <p>
                Traditional Nepali music is more than entertainment—it's the heartbeat of a civilization.
                For centuries, the diverse ethnic communities of Nepal have used music to preserve their
                stories, celebrate their traditions, and connect with the divine.
              </p>
              <p>
                Each instrument carries profound cultural meaning. The haunting melody of the Sarangi tells
                tales of love and loss in remote mountain villages. The rhythmic pulse of the Madal
                accompanies festivals that mark the changing seasons. The sacred tones of the Bansuri
                have guided meditation and spiritual practice for generations.
              </p>
              <p>
                These instruments are not merely objects—they are living repositories of Nepali identity,
                passed down through generations of master craftsmen and musicians who have dedicated their
                lives to preserving this invaluable heritage.
              </p>
            </div>
            <div className="content-image">
              <img
                src="https://c8.alamy.com/comp/F0G25W/traditional-musical-instruments-played-in-taumadhi-tole-square-during-F0G25W.jpg"
                alt="Traditional Nepali musicians"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="ai-section">
        <div className="container">
          <div className="content-grid reverse">
            <div className="content-image">
              <div className="ai-illustration">
                <div className="ai-icon">🤖</div>
                <div className="sound-waves">
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                </div>
              </div>
            </div>
            <div className="content-text">
              <h2>Our AI Technology</h2>
              <div className="decorative-element" />
              <p>
                TradInstrument.ai employs advanced machine learning algorithms specifically trained
                on thousands of hours of traditional Nepali music recordings. Our neural networks
                can distinguish the unique timbral characteristics of each instrument with remarkable
                accuracy.
              </p>

              <h3>How Our AI Works:</h3>
              <ul className="tech-features">
                <li>
                  <strong>Spectral Analysis:</strong> We analyze the frequency spectrum of audio
                  to identify instrument-specific patterns
                </li>
                <li>
                  <strong>Temporal Modeling:</strong> Our models understand how different instruments
                  behave over time during performance
                </li>
                <li>
                  <strong>Cultural Context:</strong> The AI is trained specifically on traditional
                  Nepali musical contexts and playing styles
                </li>
                <li>
                  <strong>Continuous Learning:</strong> Our system improves with each audio sample
                  analyzed, building a more comprehensive understanding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <div className="decorative-element" />
            <div className="mission-grid">
              <div className="mission-card">
                <div className="mission-icon">🎵</div>
                <h3>Preserve Heritage</h3>
                <p>
                  Document and preserve the rich traditions of Nepali music for future generations
                  through digital technology and cultural documentation.
                </p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">🌍</div>
                <h3>Global Awareness</h3>
                <p>
                  Share the beauty and complexity of Nepali musical traditions with audiences
                  worldwide, fostering cultural appreciation and understanding.
                </p>
              </div>
              <div className="mission-card">
                <div className="mission-icon">🎓</div>
                <h3>Educational Impact</h3>
                <p>
                  Provide educational resources for musicians, researchers, and cultural enthusiasts
                  to learn about traditional Nepali instruments and their significance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="vision-section">
        <div className="container">
          <div className="vision-content">
            <h2>Our Vision</h2>
            <div className="decorative-element" />
            <p className="vision-text">
              We envision a world where traditional music traditions are celebrated, preserved,
              and accessible to all. Through the marriage of ancient wisdom and modern technology,
              we aim to create bridges between cultures and generations, ensuring that the soulful
              sounds of Nepal continue to inspire and educate people around the globe.
            </p>
            <p className="vision-text">
              By making instrument identification accessible and educational, we hope to inspire
              a new generation of musicians and cultural preservationists who will carry these
              traditions forward into the future.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <h2>Our Commitment</h2>
          <div className="decorative-element" />
          <div className="commitment-grid">
            <div className="commitment-item">
              <h3>🎼 Musical Authenticity</h3>
              <p>
                Working closely with traditional musicians and cultural experts to ensure
                accuracy and respect in our representations.
              </p>
            </div>
            <div className="commitment-item">
              <h3>💡 Innovation</h3>
              <p>
                Continuously improving our AI technology while maintaining deep respect
                for traditional knowledge systems.
              </p>
            </div>
            <div className="commitment-item">
              <h3>🤝 Community</h3>
              <p>
                Building partnerships with cultural institutions and communities to
                support ongoing preservation efforts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
