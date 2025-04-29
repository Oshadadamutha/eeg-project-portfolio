import '../styls/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About the Project</h2>
      <p>
        In the project completed under <strong>EE405</strong>, we tried to identify the features in the EEG signals generated due to the motor movements to separate Up and Down movements executed by the right hand around the elbow joint. Due to the lower spatial differences in these types of movements, we focused on extracting frequency domain features and classifying them using different classification algorithms. During the research, we observed that the activation time of the EEG signals are varying a lot in the time domain and this contains a huge impact on the feature extraction in the frequency domain.
      </p>
      <p>
        Therefore, we decided to continue the above project under <strong>EE406</strong> as well with the intention of identifying the features that correspond to the above-mentioned EEG signals in spatial-time-frequency domains together.
      </p>
      <img src="/eeg-research.jpg" alt="EEG Research" className="about-image" />
    </section>
  );
};

export default About;
