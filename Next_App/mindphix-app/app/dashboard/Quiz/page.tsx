"use client";
import { ChangeEvent, useState } from 'react';
import BaseLayout from '../BaseLayout';

const QuizPage = () => {
  const [answers, setAnswers] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
  });
  const [result, setResult] = useState(''); // Initialize with an empty string

  const handleAnswerChange = (e: ChangeEvent<HTMLSelectElement>, questionNumber: number) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`q${questionNumber}`]: parseInt(e.target.value),
    }));
  };

  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((acc, val) => acc + (val || 0), 0);
    let depressionLevel;

    if (totalScore >= 1 && totalScore <= 4) {
      depressionLevel = 'Minimal depression';
    } else if (totalScore >= 5 && totalScore <= 9) {
      depressionLevel = 'Mild depression';
    } else if (totalScore >= 10 && totalScore <= 14) {
      depressionLevel = 'Moderate depression';
    } else if (totalScore >= 15 && totalScore <= 19) {
      depressionLevel = 'Moderately severe depression';
    } else if (totalScore >= 20 && totalScore <= 27) {
      depressionLevel = 'Severe depression';
    }

    setResult(depressionLevel || ''); // Set an empty string if depressionLevel is falsy
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    calculateScore();
  };

  return (
    <BaseLayout>
        <div>
        <h1>Depression Quiz</h1>
        <form onSubmit={handleSubmit}>

            <div>
            <label>1. Little interest or pleasure in doing things</label>
            <select value={answers.q1 || ''} onChange={(e) => handleAnswerChange(e, 1)}>
                
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
            </select>
            </div>

            <div>
            <label>2. Feeling down, depressed, or hopeless</label>
            <select value={answers.q2 || ''} onChange={(e) => handleAnswerChange(e, 2)}>
                
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
            </select>
            </div>

            <div>
            <label>3. Trouble falling or staying asleep, or sleeping too much</label>
            <select value={answers.q3 || ''} onChange={(e) => handleAnswerChange(e, 3)}>
                
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
            </select>
            </div>

            <div>
            <label>4. Feeling tired or having little energy</label>
            <select value={answers.q4 || ''} onChange={(e) => handleAnswerChange(e, 4)}>
                
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
            </select>
            </div>

            <div>
            <label>5. Poor appetite or overeating</label>
            <select value={answers.q5 || ''} onChange={(e) => handleAnswerChange(e, 5)}>
                
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
            </select>
            </div>

            <div>
            <label>6. Feeling bad about yourself or that you are a failure or have let yourself or your family down</label>
            <select value={answers.q6 || ''} onChange={(e) => handleAnswerChange(e, 6)}>
                
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
            </select>
            </div>

            <div>
            <label>7. Trouble concentrating on things, such as reading the newspaper or watching television</label>
            <select value={answers.q7 || ''} onChange={(e) => handleAnswerChange(e, 7)}>
                
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
            </select>
            </div>

            <div>
            <label>8. Moving or speaking so slowly that other people could have noticed. Or the opposite being so figety or restless that you have been moving around a lot more than usual</label>
            <select value={answers.q8 || ''} onChange={(e) => handleAnswerChange(e, 8)}>
                
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
            </select>
            </div>

            <div>
            <label>9. Thoughts that you would be better off dead, or of hurting yourself</label>
            <select value={answers.q9 || ''} onChange={(e) => handleAnswerChange(e, 9)}>
                
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
            </select>
            </div>

            <button type="submit">Submit</button>
        </form>
        {result && <p>Your depression level: {result}</p>}
        </div>
    </BaseLayout>
  );
};

export default QuizPage;