"use client";
import { ChangeEvent, useState, useEffect } from 'react';
import BaseLayout from '../BaseLayout';
import { ref, push, update } from 'firebase/database';
import { database } from "@/app/firebase/config";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

const getStoredWeek = () => {
  const storedWeek = localStorage.getItem('currentWeek');
  return storedWeek ? parseInt(storedWeek) : 1; // Default to week 1 if no stored value
};

const setStoredWeek = (week: number, currentWeek: number) => {
  if (week !== currentWeek) {
    localStorage.setItem('currentWeek', week.toString());
  }
};

const getLastSubmissionDate = () => {
  const storedDate = localStorage.getItem('lastSubmissionDate');
  return storedDate ? new Date(storedDate) : null;
};

const setLastSubmissionDate = (date: Date) => {
  localStorage.setItem('lastSubmissionDate', date.toISOString());
};

const hasOneWeekPassed = (lastSubmissionDate: Date) => {
  const currentDate = new Date();
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const timeDifference = currentDate.getTime() - lastSubmissionDate.getTime();
  return timeDifference >= oneWeekInMilliseconds;
};

const QuizPage = () => {
  const [UserId, setUserId] = useState<string>('U001');

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
  const [result, setResult] = useState('');
  const [currentWeek, setCurrentWeek] = useState(1); // Default to week 1

  useEffect(() => {
    const storedWeek = getStoredWeek();
    setCurrentWeek(storedWeek);
  }, []);

  const handleAnswerChange = (e: ChangeEvent<HTMLSelectElement>, questionNumber: number) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`q${questionNumber}`]: parseInt(e.target.value),
    }));
  };

  const calculateScore = async () => {
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

    setResult(depressionLevel || '');

    try {
      const userId = UserId;
      const newDepressionLevelRef = ref(database, `users/${userId}/Progress/Depression_Level/`);
      const depressionLevelData = {
        [`Week${currentWeek}`]: totalScore
      };

      await update(newDepressionLevelRef, depressionLevelData);
      console.log('Depression level saved successfully');

      // Check if one week has passed since the last submission date
      const lastSubmissionDate = getLastSubmissionDate();
      const shouldIncrementWeek = !lastSubmissionDate || hasOneWeekPassed(lastSubmissionDate);

      // Update the current week and last submission date
      setCurrentWeek((prevWeek) => {
        const newWeek = shouldIncrementWeek ? (prevWeek === 7 ? 1 : prevWeek + 1) : prevWeek;
        setStoredWeek(newWeek, prevWeek);
        setLastSubmissionDate(new Date());
        return newWeek;
      });
    } catch (error) {
      console.error('Error saving depression level:', error);
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    calculateScore();
  };

  return (
    <BaseLayout>
      <div className="ml-96 justify-center lg:ml-72 md:ml-16 md:mr-3 xl:ml-96">
        <h1 className="text-2xl font-bold mb-6 mt-10 text-center">
          Depression Quiz
        </h1>
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium">
                1. Have you felt a lack of interest or pleasure in activities
                lately?
              </label>
              <select
                value={answers.q1 || ""}
                onChange={(e) => handleAnswerChange(e, 1)}
                className="mt-2 ml-5 block w-1/3 bg-gray-200 rounded px-2 py-1"
              >
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">
                2. Have you been feeling down, depressed, or hopeless recently?
              </label>
              <select
                value={answers.q2 || ""}
                onChange={(e) => handleAnswerChange(e, 2)}
                className="mt-2 ml-5 block w-1/3 bg-gray-200 rounded px-2 py-1"
              >
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">
                3. Have you had trouble sleeping or been sleeping too much?
              </label>
              <select
                value={answers.q3 || ""}
                onChange={(e) => handleAnswerChange(e, 3)}
                className="mt-2 ml-5 block w-1/3 bg-gray-200 rounded px-2 py-1"
              >
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">
                4. Have you felt unusually tired or low on energy?
              </label>
              <select
                value={answers.q4 || ""}
                onChange={(e) => handleAnswerChange(e, 4)}
                className="mt-2 ml-5 block w-1/3 bg-gray-200 rounded px-2 py-1"
              >
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">
                5. Have you had a poor appetite or been overeating?
              </label>
              <select
                value={answers.q5 || ""}
                onChange={(e) => handleAnswerChange(e, 5)}
                className="mt-2 ml-5 block w-1/3 bg-gray-200 rounded px-2 py-1"
              >
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">
                6. Have you been feeling bad about yourself or like you&apos;ve let
                    yourself down?
              </label>
              <select
                value={answers.q6 || ""}
                onChange={(e) => handleAnswerChange(e, 6)}
                className="mt-2 ml-5 block w-1/3 bg-gray-200 rounded px-2 py-1"
              >
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">
                7. Have you had trouble concentrating on tasks?
              </label>
              <select
                value={answers.q7 || ""}
                onChange={(e) => handleAnswerChange(e, 7)}
                className="mt-2 ml-5 block w-1/3 bg-gray-200 rounded px-2 py-1"
              >
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">
                8. Have you been noticeably slower or more agitated in your
                movements lately?
              </label>
              <select
                value={answers.q8 || ""}
                onChange={(e) => handleAnswerChange(e, 8)}
                className="mt-2 ml-5 block w-1/3 bg-gray-200 rounded px-2 py-1"
              >
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">
                9. Have you had thoughts of self-harm or feeling that you would
                be better off dead?
              </label>
              <select
                value={answers.q9 || ""}
                onChange={(e) => handleAnswerChange(e, 9)}
                className="mt-2 ml-5 block w-1/3 bg-gray-200 rounded px-2 py-1"
              >
                <option value="0">Not at all</option>
                <option value="1">Several days</option>
                <option value="2">More than half the days</option>
                <option value="3">Nearly every day</option>
              </select>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-72 md:ml-64 md:top-4"
                >
                  Submit
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-lg">
                    Depression Level
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {result && (
                      <p className="mt-2 text-sm text-red-800">{result}</p>
                    )}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <Link href="/dashboard/Recomendation">
                    <AlertDialogAction className="bg-blue-500 hover:bg-blue-700">
                      Get Recommendation
                    </AlertDialogAction>{" "}
                    <Link href="/dashboard/Quiz">
                      <AlertDialogCancel>Exit</AlertDialogCancel>
                    </Link>
                  </Link>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};

export default QuizPage;