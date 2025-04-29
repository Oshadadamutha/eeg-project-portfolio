import '../styls/Week1.css';

const Week1 = () => {
  return (
    <section id="week1" className="week1-section">
      <h2>Continuation of the research in the frequency domain</h2>
      <p className="summary">
        <strong>▪</strong> Averaged channel method was modified by reducing the number of channels considered from 18 electrodes to 6 electrodes and new results were obtained using the Decision Tree classifier in the <strong>MATLAB classification learner toolbox</strong>.
      </p>

      <p className="table-caption">
        Table 1. Validation results of Decision tree classifier for the features obtained from 8Hz-30Hz frequency range.
      </p>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th rowSpan="2">Subject</th>
              <th colSpan="3">Session 1</th>
              <th colSpan="4">Session 2</th>
            </tr>
            <tr>
              <th>G mean</th><th>Up (TPR)</th><th>Down (TNR)</th>
              <th>G mean</th><th>Up (TPR)</th><th>Down (TNR)</th><th>Subject avg.</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Subject 1</td><td>0.60</td><td>0.66</td><td>0.54</td><td>0.55</td><td>0.57</td><td>0.54</td><td>0.58</td></tr>
            <tr><td>Subject 2</td><td>0.65</td><td>0.66</td><td>0.63</td><td>0.58</td><td>0.66</td><td>0.51</td><td>0.62</td></tr>
            <tr><td>Subject 3</td><td>0.57</td><td>0.60</td><td>0.54</td><td>0.59</td><td>0.69</td><td>0.51</td><td>0.58</td></tr>
            <tr><td>Subject 4</td><td>0.51</td><td>0.60</td><td>0.43</td><td>0.55</td><td>0.54</td><td>0.57</td><td>0.53</td></tr>
            <tr><td>Subject 5</td><td>0.56</td><td>0.49</td><td>0.63</td><td>0.60</td><td>0.66</td><td>0.54</td><td>0.58</td></tr>
            <tr><td>Subject 6</td><td>0.51</td><td>0.51</td><td>0.51</td><td>0.53</td><td>0.54</td><td>0.51</td><td>0.52</td></tr>
            <tr><td><strong>Session avg.</strong></td><td colSpan="3">0.57</td><td colSpan="4">0.57</td></tr>
          </tbody>
        </table>
      </div>

      <p className="table-caption">
        Table 2. Test results of Decision tree classifier for the features obtained from 8Hz-30Hz frequency range.
      </p>
    </section>
  );
};

export default Week1;
