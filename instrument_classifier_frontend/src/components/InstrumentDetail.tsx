import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface InstrumentData {
  name: string;
  image: string;
  audioSample: string;
  description: string;
  history: string;
  construction: string;
  playingTechniques: string[];
  culturalSignificance: string;
  modernUsage: string;
  relatedInstruments: string[];
  funFacts: string[];
}

const instrumentData: Record<string, InstrumentData> = {
  sarangi: {
    name: 'Sarangi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Nepali_sarangi.jpg/250px-Nepali_sarangi.jpg',
    audioSample: '/audio/sarangi-sample.mp3',
    description: 'The Nepali Sarangi is a traditional four-stringed bowed instrument that produces deeply emotional and soulful sounds. Known as the "voice of a hundred colors," it can mimic human vocal expressions with remarkable accuracy.',
    history: 'The Sarangi has been part of Nepali musical tradition for over 1,000 years. Originally played by the Gaine community, wandering minstrels who traveled from village to village sharing news and stories through music. The instrument evolved from ancient fiddles brought by traders along the Silk Road, developing its unique Nepali character through centuries of local craftsmanship.',
    construction: 'Traditionally carved from a single piece of khirro wood (Cornus capitata), the Sarangi features a hollow resonating chamber with a leather-covered soundboard. The four main strings are made from metal, with additional sympathetic strings that resonate to create the instrument\'s characteristic rich harmonic texture. The curved bridge and carefully positioned sound holes are crucial for the instrument\'s tonal quality.',
    playingTechniques: [
      'Bowing: Uses a horsehair bow with varying pressure and speed to create different tonal colors',
      'Fingernail technique: Players use their fingernails rather than fingertips to press the strings',
      'Slide technique: Smooth gliding between notes to mimic vocal inflections',
      'Sympathetic resonance: Utilizing the sympathetic strings to create harmonic depth',
      'Ornamental techniques: Incorporating grace notes, trills, and microtonal bends'
    ],
    culturalSignificance: 'In Nepali culture, the Sarangi is considered the most expressive instrument, capable of conveying the deepest human emotions. It traditionally accompanies folk ballads, love songs, and narrative tales. The Gaine musicians were historically the keepers of oral traditions, using the Sarangi to preserve and transmit cultural stories, news, and social commentary across generations.',
    modernUsage: 'Today, the Sarangi continues to be featured in traditional folk performances, cultural festivals, and increasingly in fusion music. Modern musicians are exploring its potential in contemporary compositions while respecting its traditional roots. It remains an essential instrument in preserving Nepali musical heritage and is taught in music schools across Nepal.',
    relatedInstruments: ['Indian Sarangi', 'Esraj', 'Violin', 'Erhu'],
    funFacts: [
      'A master Sarangi player can produce over 50 different tonal variations on a single string',
      'The instrument is said to be so expressive that it can make listeners cry',
      'Traditional Gaine musicians could tune their Sarangi by ear in complete darkness',
      'Each Sarangi is unique, with no two instruments sounding exactly alike',
      'The wood used for Sarangi making must be aged for at least 10 years'
    ]
  },
  dhime: {
    name: 'Dhime',
    image: 'https://www.shutterstock.com/image-photo/traditional-nepali-drum-handcrafted-percussion-260nw-2629518437.jpg',
    audioSample: '/audio/dhime-sample.mp3',
    description: 'The Dhime is a large, barrel-shaped drum that forms the rhythmic foundation of traditional Newari music. This powerful percussion instrument produces deep, resonant tones that can be heard across vast distances.',
    history: 'Dating back to the Licchavi period (400-750 CE), the Dhime has been central to Newari cultural ceremonies for over 1,500 years. Archaeological evidence suggests similar drums were used in ancient Nepal for religious rituals and royal court performances. The instrument evolved alongside the development of Newari Buddhism and Hinduism, becoming integral to temple ceremonies and cultural festivals.',
    construction: 'The Dhime is traditionally made from a hollowed-out tree trunk, typically from sal or sisso wood. The drum heads are made from water buffalo hide, stretched and secured with rope tensioning systems. The barrel shape provides optimal resonance, while the size can vary from smaller portable versions to massive temple drums that require multiple players.',
    playingTechniques: [
      'Palm strikes: Using the palm of the hand to create deep bass tones',
      'Finger techniques: Utilizing fingertips for lighter, higher-pitched sounds',
      'Stick playing: Using wooden mallets for ceremonial performances',
      'Hand positioning: Different hand placements create varying tonal qualities',
      'Dynamic control: From whisper-soft touches to thunderous ceremonial beats'
    ],
    culturalSignificance: 'The Dhime is sacred in Newari culture, often considered the heartbeat of community celebrations. It plays a crucial role in religious festivals like Indra Jatra and Dashain, where its rhythms are believed to invoke divine blessings. The instrument is also central to the famous "Dhime Baja" ensemble performances that accompany traditional dances and ritual processions.',
    modernUsage: 'Contemporary Newari communities continue to use the Dhime in cultural festivals and religious ceremonies. It has also found its way into world music ensembles and fusion performances. Music schools in the Kathmandu Valley teach traditional Dhime playing techniques, ensuring the preservation of this ancient art form.',
    relatedInstruments: ['Madal', 'Nagara', 'Tabla', 'Mridangam'],
    funFacts: [
      'The largest ceremonial Dhime can measure over 3 feet in diameter',
      'Master drummers can produce over 20 distinct sounds from a single Dhime',
      'The drum is often blessed in temple ceremonies before its first use',
      'Traditional Dhime makers follow ancient recipes for preparing the drum heads',
      'Some historic Dhimes in Kathmandu temples are over 400 years old'
    ]
  },
  madal: {
    name: 'Madal',
    image: 'https://c8.alamy.com/comp/F0G25W/traditional-musical-instruments-played-in-taumadhi-tole-square-during-F0G25W.jpg',
    audioSample: '/audio/madal-sample.mp3',
    description: 'The Madal is a versatile hand drum that serves as the rhythmic backbone of Nepali folk music. This portable percussion instrument produces a wide range of tones and is beloved for its ability to accompany both intimate songs and large celebrations.',
    history: 'The Madal has been a constant companion in Nepali musical traditions for centuries, with references found in ancient texts and royal court records. Originally developed by various ethnic communities across Nepal, each region developed its own playing styles and decorative patterns. The instrument gained prominence during the unification of Nepal when cultural exchange between regions flourished.',
    construction: 'Crafted from a single piece of wood (usually rhododendron or sal), the Madal features a cylindrical shape with two playing surfaces of different sizes. The larger surface produces deep bass tones, while the smaller creates higher pitches. Goat or buffalo hide is stretched over both ends and secured with rope or wooden rings. Traditional decorative carvings often adorn the wooden body.',
    playingTechniques: [
      'Bass hand technique: Using the whole hand on the larger surface for deep tones',
      'Treble finger work: Precise finger movements on the smaller surface for melody',
      'Cross-rhythms: Playing different patterns with each hand simultaneously',
      'Tonal variations: Using different parts of the hand to create timbral changes',
      'Traditional patterns: Specific rhythmic cycles used in different song types'
    ],
    culturalSignificance: 'The Madal is ubiquitous in Nepali cultural life, present at weddings, festivals, harvest celebrations, and religious ceremonies. It represents the democratic spirit of Nepali music—accessible to all social classes and communities. The instrument often accompanies folk songs that tell stories of daily life, love, and social issues, making it a voice of the common people.',
    modernUsage: 'Today, the Madal continues to be widely played across Nepal and in Nepali communities worldwide. It features prominently in contemporary Nepali pop music, folk fusion, and cultural preservation programs. Many schools include Madal instruction in their music curriculum, ensuring its continued relevance for new generations.',
    relatedInstruments: ['Dhime', 'Tabla', 'Conga', 'Djembe'],
    funFacts: [
      'A skilled Madal player can perform complex polyrhythms using just their fingertips',
      'The instrument is often passed down through families as a cherished heirloom',
      'Different regions of Nepal have over 30 distinct Madal playing styles',
      'The Madal can be tuned to different pitches by adjusting the rope tension',
      'Some master players can make the Madal "talk" by varying their hand techniques'
    ]
  },
  tabla: {
    name: 'Tabla',
    image: 'https://i.discogs.com/ihMEjU17JW-Gw5CvuHnDf3NBp22wGRdVkOo-W1VmtLk/rs:fit/g:sm/q:90/h:550/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMDg5/MzY0LTE1NDc4NjQy/NjgtNjQ3Ni5qcGVn.jpeg',
    audioSample: '/audio/tabla-sample.mp3',
    description: 'The Tabla is a sophisticated percussion instrument consisting of two drums that form the rhythmic foundation of classical and semi-classical Nepali music. Known for its incredible versatility and expressive range, it can produce dozens of distinct sounds.',
    history: 'While originating in the Indian subcontinent, the Tabla was embraced by Nepali classical musicians during the Malla period (12th-18th centuries) and has since become integral to Nepali musical tradition. The instrument evolved through cultural exchange between India and Nepal, developing unique Nepali playing styles and repertoires that reflect local musical sensibilities.',
    construction: 'The Tabla consists of two drums: the smaller, higher-pitched "tabla" (dayan) made from wood, and the larger, lower-pitched "bayan" made from metal or clay. Each drumhead features a unique black paste (syahi) made from iron filings and flour, which allows for the instrument\'s characteristic tonal variations. The drums are tuned using wooden blocks and leather straps.',
    playingTechniques: [
      'Finger strokes: Precise finger movements to create different sounds (ta, na, dha, dhi, etc.)',
      'Palm techniques: Using the palm and base of fingers for bass tones',
      'Modulation: Bending pitches by pressing the drumhead while playing',
      'Complex rhythmic cycles: Mastering traditional talas (rhythmic patterns)',
      'Improvisation: Creating spontaneous variations within established frameworks'
    ],
    culturalSignificance: 'In Nepali culture, the Tabla represents the height of rhythmic sophistication. It accompanies classical vocal performances, instrumental concerts, and devotional music. The instrument is deeply connected to spiritual practice, with many rhythmic patterns having symbolic meanings. Tabla players are highly respected as keepers of complex musical traditions.',
    modernUsage: 'The Tabla remains vital in contemporary Nepali music, from classical concerts to fusion experiments. It features in Bollywood-style Nepali films, world music collaborations, and modern devotional music. Tabla teaching has become professionalized, with formal schools and certification systems ensuring high standards of instruction.',
    relatedInstruments: ['Madal', 'Dhime', 'Pakhawaj', 'Mridangam'],
    funFacts: [
      'A master tabla player can produce over 50 distinct sounds from the two drums',
      'The black paste on each drum must be perfectly centered for optimal sound',
      'Traditional tabla making is a closely guarded art passed down through families',
      'The instrument can be tuned to match any musical scale or singer\'s voice',
      'Some tabla compositions are so complex they take years to master'
    ]
  },
  bansuri: {
    name: 'Bansuri',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bibilimma_Murali_Baja_of_Athpahariya_Rais_Dhankuta_District_Nepal.jpg/250px-Bibilimma_Murali_Baja_of_Athpahariya_Rais_Dhankuta_District_Nepal.jpg',
    audioSample: '/audio/bansuri-sample.mp3',
    description: 'The Bansuri is a transverse bamboo flute that produces some of the most haunting and spiritual sounds in Nepali music. This simple yet profound instrument has the power to evoke deep emotions and connect listeners with nature and the divine.',
    history: 'The Bansuri has ancient roots in Nepal, with archaeological evidence suggesting bamboo flutes were used over 2,000 years ago. References appear in Hindu and Buddhist texts, where it\'s associated with Lord Krishna and various spiritual traditions. In Nepal, the instrument developed unique regional characteristics, with different ethnic groups creating their own playing styles and musical repertoires.',
    construction: 'Traditionally made from a single piece of bamboo, the Bansuri is elegantly simple in design. The bamboo is carefully selected for its age, density, and tonal qualities. Six to eight finger holes are precisely placed to create the desired scale. The embouchure hole is crafted to optimal dimensions for breath control and tonal clarity. Master craftsmen consider factors like bamboo species, growth conditions, and seasonal timing when selecting materials.',
    playingTechniques: [
      'Breath control: Mastering the flow and pressure of breath for tone quality',
      'Embouchure technique: Proper lip and mouth positioning for clear sound production',
      'Finger patterns: Complex fingering combinations for notes and ornaments',
      'Microtonal bends: Subtle pitch variations that create emotional expression',
      'Circular breathing: Advanced technique for sustained musical phrases'
    ],
    culturalSignificance: 'The Bansuri holds deep spiritual significance in Nepali culture, often associated with meditation, devotional music, and connection to nature. It\'s featured in religious ceremonies, classical performances, and folk traditions. The instrument symbolizes the divine call and is believed to have the power to calm the mind and elevate the spirit. Many spiritual practitioners use Bansuri music for meditation and healing.',
    modernUsage: 'Contemporary Nepali musicians continue to explore the Bansuri\'s potential in various musical contexts, from traditional classical performances to modern fusion and film music. The instrument has gained international recognition through world music movements. Educational institutions now offer formal Bansuri training, preserving traditional techniques while encouraging innovation.',
    relatedInstruments: ['Murali', 'Native American Flute', 'Dizi', 'Recorder'],
    funFacts: [
      'The bamboo for the finest Bansuri is harvested during specific moon phases',
      'Master players can produce complex harmonic overtones using advanced techniques',
      'Some traditional Bansuri are tuned to match the natural frequencies of specific birds',
      'The instrument requires no external mechanics—only breath and finger control',
      'Ancient texts describe the Bansuri\'s sound as capable of "melting even stones"'
    ]
  }
};

const InstrumentDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const instrument = slug ? instrumentData[slug] : null;

  if (!instrument) {
    return (
      <div className="instrument-detail">
        <div className="container">
          <h1>Instrument Not Found</h1>
          <p>The requested instrument could not be found.</p>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const playAudio = () => {
    console.log(`Playing ${instrument.name} audio sample`);
    // In a real implementation, you would play the actual audio file
    // const audio = new Audio(instrument.audioSample);
    // audio.play();
  };

  return (
    <div className="instrument-detail">
      {/* Hero Section */}
      <section className="instrument-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-image">
              <img src={instrument.image} alt={instrument.name} />
            </div>
            <div className="hero-info">
              <h1>{instrument.name}</h1>
              <p className="instrument-description">{instrument.description}</p>
              <div className="instrument-actions">
                <button
                  onClick={playAudio}
                  className="audio-button large"
                >
                  🔊 Listen to {instrument.name}
                </button>
                <Link to="/" className="back-link">← Back to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="instrument-section">
        <div className="container">
          <h2>History & Origins</h2>
          <div className="decorative-element" />
          <p>{instrument.history}</p>
        </div>
      </section>

      {/* Construction Section */}
      <section className="instrument-section alt">
        <div className="container">
          <h2>Construction & Design</h2>
          <div className="decorative-element" />
          <p>{instrument.construction}</p>
        </div>
      </section>

      {/* Playing Techniques Section */}
      <section className="instrument-section">
        <div className="container">
          <h2>Playing Techniques</h2>
          <div className="decorative-element" />
          <ul className="techniques-list">
            {instrument.playingTechniques.map((technique, index) => (
              <li key={index}>{technique}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Cultural Significance Section */}
      <section className="instrument-section alt">
        <div className="container">
          <h2>Cultural Significance</h2>
          <div className="decorative-element" />
          <p>{instrument.culturalSignificance}</p>
        </div>
      </section>

      {/* Modern Usage Section */}
      <section className="instrument-section">
        <div className="container">
          <h2>Modern Usage</h2>
          <div className="decorative-element" />
          <p>{instrument.modernUsage}</p>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="instrument-section alt">
        <div className="container">
          <h2>Fascinating Facts</h2>
          <div className="decorative-element" />
          <div className="facts-grid">
            {instrument.funFacts.map((fact, index) => (
              <div key={index} className="fact-card">
                <div className="fact-number">{index + 1}</div>
                <p>{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Instruments Section */}
      <section className="instrument-section">
        <div className="container">
          <h2>Related Instruments</h2>
          <div className="decorative-element" />
          <div className="related-instruments">
            {instrument.relatedInstruments.map((related, index) => (
              <span key={index} className="related-tag">{related}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstrumentDetail;
