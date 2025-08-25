import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file upload logic here
    const files = Array.from(e.dataTransfer.files);
    console.log('Files dropped:', files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    console.log('Files selected:', files);
  };

  const featuredInstruments = [
    {
      name: 'Sarangi',
      slug: 'sarangi',
      description: 'Traditional Nepali string instrument with rich, soulful sound',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Nepali_sarangi.jpg/250px-Nepali_sarangi.jpg',
      audioSample: '/audio/sarangi-sample.mp3'
    },
    {
      name: 'Dhime',
      slug: 'dhime',
      description: 'Traditional Newari drum used in cultural ceremonies',
      image: 'https://www.shutterstock.com/image-photo/traditional-nepali-drum-handcrafted-percussion-260nw-2629518437.jpg',
      audioSample: '/audio/dhime-sample.mp3'
    },
    {
      name: 'Madal',
      slug: 'madal',
      description: 'Hand drum central to Nepali folk music traditions',
      image: 'https://c8.alamy.com/comp/F0G25W/traditional-musical-instruments-played-in-taumadhi-tole-square-during-F0G25W.jpg',
      audioSample: '/audio/madal-sample.mp3'
    },
    {
      name: 'Tabla',
      slug: 'tabla',
      description: 'Classical percussion instrument with intricate rhythmic patterns',
      image: 'https://i.discogs.com/ihMEjU17JW-Gw5CvuHnDf3NBp22wGRdVkOo-W1VmtLk/rs:fit/g:sm/q:90/h:550/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDg5/MzY0LTE1NDc4NjQy/NjgtNjQ3Ni5qcGVn.jpeg',
      audioSample: '/audio/tabla-sample.mp3'
    },
    {
      name: 'Bansuri',
      slug: 'bansuri',
      description: 'Traditional bamboo flute with melodious, spiritual tones',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bibilimma_Murali_Baja_of_Athpahariya_Rais_Dhankuta_District_Nepal.jpg/250px-Bibilimma_Murali_Baja_of_Athpahariya_Rais_Dhankuta_District_Nepal.jpg',
      audioSample: '/audio/bansuri-sample.mp3'
    }
  ];

  const playAudio = (audioSample: string) => {
    // For now, we'll use a placeholder - in a real implementation, you'd have actual audio files
    console.log(`Playing audio sample: ${audioSample}`);
    // const audio = new Audio(audioSample);
    // audio.play();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1 className="hero-title">Discover Traditional Nepali Instruments</h1>
            <p className="hero-subtitle">Upload your audio and let AI identify the traditional instruments</p>
            <button className="hero-cta">Get Started</button>
          </div>
        </div>
      </section>

      {/* Quick Upload Area */}
      <section className="upload-section" id="upload">
        <div className="container">
          <h2>Upload Your Audio</h2>
          <div className="decorative-element" />
          <div
            className={`upload-area ${isDragOver ? 'drag-over' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="upload-content">
              <div className="upload-icon">📁</div>
              <h3>Drag & Drop your audio file here</h3>
              <p>or click to browse files</p>
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileInput}
                className="file-input"
                id="audioFile"
              />
              <label htmlFor="audioFile" className="upload-button">
                Choose File
              </label>
            </div>
          </div>
          <p className="upload-note">Supported formats: MP3, WAV, M4A (Max size: 10MB)</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <h2>How It Works</h2>
          <div className="decorative-element" />
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Upload</h3>
              <p>Upload your audio file containing traditional Nepali music</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Analyze</h3>
              <p>Our AI analyzes the audio to identify traditional instruments</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Discover</h3>
              <p>Get detailed information about the identified instruments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Instruments */}
      <section className="featured-instruments" id="instruments">
        <div className="container">
          <h2>Traditional Nepali Instruments</h2>
          <div className="decorative-element" />
          <div className="instruments-grid">
            {featuredInstruments.map((instrument) => (
              <div key={instrument.name} className="instrument-card">
                <div className="instrument-image">
                  <img src={instrument.image} alt={instrument.name} />
                </div>
                <div className="instrument-info">
                  <h3>{instrument.name}</h3>
                  <p>{instrument.description}</p>
                  <div className="instrument-actions">
                    <button
                      className="audio-button"
                      onClick={() => playAudio(instrument.audioSample)}
                      title="Play sample sound"
                    >
                      🔊 Listen
                    </button>
                    <Link
                      to={`/instruments/${instrument.slug}`}
                      className="learn-more-button"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Classifications */}
      <section className="recent-classifications">
        <div className="container">
          <h2>Recent Identifications</h2>
          <div className="decorative-element" />
          <div className="classifications-feed">
            <div className="classification-item">
              <div className="classification-icon">🎵</div>
              <div className="classification-content">
                <p><strong>Folk Song #1:</strong> Identified Sarangi and Tabla</p>
                <span className="classification-time">2 minutes ago</span>
              </div>
            </div>
            <div className="classification-item">
              <div className="classification-icon">🥁</div>
              <div className="classification-content">
                <p><strong>Traditional Dance:</strong> Identified Dhime and Madal</p>
                <span className="classification-time">15 minutes ago</span>
              </div>
            </div>
            <div className="classification-item">
              <div className="classification-icon">🎼</div>
              <div className="classification-content">
                <p><strong>Classical Performance:</strong> Identified Bansuri</p>
                <span className="classification-time">1 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
