<<<<<<< HEAD
import React from 'react'

const Meditation = () => {
  return (
    <>
    <div>
        <h1>Meditation</h1>
    </div>
    </>
  )
}

export default Meditation
=======
import React from 'react';
import meditationImage from '../../assets/meditation.png'; 
import breathing from '../../assets/breathing.png'; // Keep this unique
import YogaImage from '../../assets/Yoga.png';

const Meditation = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={breathing} alt="Breathing Exercise" style={styles.image} /><br></br><br></br><br></br>
        <button style={styles.button} onClick={() => alert("Breathing exercise Clicked!")}>
          BREATHING EXERCISE
        </button>
      </div>
      <div style={styles.imageContainer}>
        <img src={meditationImage} alt="Deep Focus" style={styles.image} /><br></br>
        <button style={styles.button} onClick={() => alert("Meditation Clicked!")}>
          DEEP FOCUS
        </button>
      </div>
      <div style={styles.imageContainer}>
        <img src={YogaImage} alt="Yoga" style={styles.image} />
        <button style={styles.button} onClick={() => alert("YogaClicked!")}>
          YOGA
        </button>
      </div>
    </div>
  );
  <div>
    <p>
      <a><link rel="stylesheet" href="#" />WHY AND HOW TO DO?</a>
    </p>
  </div>
};

// Styles for the component
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    gap: '50px',
    background: 'white',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Meditation;
>>>>>>> 4c65b3ea9e291544bfa95a9f0a31ee93e2b0c7a2
