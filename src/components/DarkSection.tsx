import React from 'react';

export default function FirstClimbExact() {
  // Styles defined as objects for inline usage
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      backgroundColor: '#0c0c0c', // Matches the deep dark background
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Helvetica Neue", Arial, sans-serif',
      color: '#ffffff',
      overflow: 'hidden',
      padding: '40px',
      position: 'relative',
    },
    contentWrapper: {
      display: 'flex',
      width: '100%',
      maxWidth: '1400px',
      justifyContent: 'space-between',
      alignItems: 'center', // Aligns the text block with the 3D block
      position: 'relative',
    },
    
    // --- LEFT COLUMN ---
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 10,
      maxWidth: '500px',
    },
    indexNumber: {
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '15px',
      letterSpacing: '1px',
      color: '#fff',
    },
    heading: {
      fontSize: '85px',
      lineHeight: '0.85',
      fontWeight: '500', // Standard weight, not bold
      letterSpacing: '-2px',
      marginBottom: '180px', // Large gap before the subtext
      color: '#fff',
    },
    subHeading: {
      fontSize: '32px',
      fontWeight: '400',
      color: '#666', // Darker grey
      lineHeight: '1.1',
      marginBottom: '40px',
    },
    descriptionBlock: {
      fontSize: '14px',
      lineHeight: '1.5',
      color: '#fff',
      maxWidth: '320px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#fff',
    },

    // Logo in top-right corner
    logoContainer: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '80px',
      height: '80px',
      borderRadius: '12px',
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      fontWeight: 700,
      color: '#000000',
    },

    // --- RIGHT COLUMN (THE 3D TEXT) ---
    rightColumn: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    // This is the container that rotates EVERYTHING
    skewWrapper: {
      transform: 'rotate(-33deg) skewX(12deg)', // The magic geometry
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end', // Aligns words to the right edge
      transformOrigin: 'center center',
    },
    // Common style for the big bold words
    bigWord: {
      fontFamily: 'Impact, "Arial Black", sans-serif', // Needs to be heavy
      fontSize: '100px',
      lineHeight: '0.82', // Very tight vertically
      textTransform: 'uppercase',
      color: 'transparent', // Transparent for gradient
      background: 'linear-gradient(to bottom, #ffffff 10%, #999999 60%, #444444 100%)', // The metallic fade
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      whiteSpace: 'nowrap',
      letterSpacing: '-1px',
    },
    
    // Specific adjustments for "NOW IT'S"
    nowRow: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    itsText: {
        fontFamily: 'Impact, "Arial Black", sans-serif',
        fontSize: '30px',
        color: '#fff',
        marginLeft: '5px',
        marginTop: '10px',
        background: 'linear-gradient(to bottom, #ffffff 0%, #aaa 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    },

    // Specific adjustments for "AND POWER"
    lastRow: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: '-5px', // Pull it up slightly
      marginRight: '-5px',
    },
    verticalAnd: {
      fontFamily: 'Impact, "Arial Black", sans-serif',
      fontSize: '24px',
      lineHeight: '1',
      transform: 'rotate(-90deg)', // Rotates text sideways
      transformOrigin: 'bottom right', // Pivots on corner
      marginBottom: '20px', 
      marginRight: '15px',
      background: 'linear-gradient(to bottom, #bbb 0%, #666 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
          <a
            href="https://skct.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZ5P6BgU-br7TtW7NH3z8BqyvC0sEH51GsA&s"
              alt="SKCT Instagram"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </a>
        </div>
      
      <div style={styles.contentWrapper}>
        {/* Left Side Content */}
        <div style={styles.leftColumn}>
          <div style={styles.indexNumber}>3rd Year</div>
          
          <h1 style={styles.heading}>
            B.E CSE<br />
            AI & ML
          </h1>

          <h2 style={styles.subHeading}>
            Passionate and have knowledge in <br />
            Full stack and Machine Learning.
          </h2>

          <div style={styles.descriptionBlock}>
            <span style={styles.label}>Time to know about me :</span>
            <p style={{margin: 0, color: '#ccc'}}>
              I’m Hariharan, a student engineer from Mannargudi An ordinary boy with unimaginable dreams, <br/>guided by three C’s:<br/>
               Concentration - Consistency - Career.
            </p>
          </div>
        </div>

        {/* Right Side 3D Text */}
        <div style={styles.rightColumn}>
          <div style={styles.skewWrapper}>
            
            {/* ROW 1: NOW it's */}
            <div style={styles.nowRow}>
              <div style={styles.bigWord}>NOW</div>
              <div style={styles.itsText}>I'M</div>
            </div>

            {/* ROW 2: TIME */}
            <div style={styles.bigWord}>STUDYING</div>

            {/* ROW 3: FOR */}
            <div style={styles.bigWord}>AT</div>

            {/* ROW 4: PEACE */}
            <div style={styles.bigWord}>SRI KRISHNA</div>

            {/* ROW 5: PURPOSE */}
            <div style={styles.bigWord}>COLLEGE</div>

            {/* ROW 6: AND POWER */}
            <div style={styles.lastRow}>
              <div style={styles.verticalAnd}>OF</div>
              <div style={styles.bigWord}>TECHNOLOGY</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}