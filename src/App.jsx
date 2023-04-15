import { useState } from 'react';
import Statistics from './assets/components/Statistics';
import Button from './assets/components/Button';

export default function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [feedback, setFeedback] = useState(false);

  function goodBtn() {
    const goodPlus = good + 1;
    const allPlus = all + 1;
    setGood(goodPlus);
    setAll(allPlus);
    setAverage((goodPlus - bad) / allPlus);
    setPositive((goodPlus / allPlus) * 100);
    setFeedback(true);
  }

  function neutralBtn() {
    const neutralPlus = neutral + 1;
    const allPlus = all + 1;
    setNeutral(neutralPlus);
    setAll(allPlus);
    setAverage((good - bad) / allPlus);
    setPositive((good / allPlus) * 100);
    setFeedback(true);
  }

  function badBtn() {
    const badPlus = bad + 1;
    const allPlus = all + 1;
    setBad(badPlus);
    setAll(allPlus);
    setAverage((good - badPlus) / allPlus);
    setPositive((good / allPlus) * 100);
    setFeedback(true);
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button buttonType={goodBtn}>Good</Button>
      <Button buttonType={neutralBtn}>Neutral</Button>
      <Button buttonType={badBtn}>Bad</Button>
      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
        feedback={feedback}
      />
    </div>
  );
}
