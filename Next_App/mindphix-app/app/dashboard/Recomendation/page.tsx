"use client";
import React, { useState, useEffect } from "react";
import BaseLayout from "../BaseLayout";
import "../../styles/recommendations.css";
import { ref, set, get, child, update } from "firebase/database";
import { database } from "@/app/firebase/config";

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

const resetCategoryCounts = async (userId: string, categories: string[]) => {
  const categoryRefs = categories.map((category) =>
    ref(database, `users/${userId}/Progress/Recomendation_Analytics/${category}/Count`)
  );

  const updates = Object.fromEntries(categoryRefs.map((ref) => [ref.toString(), 0]));

  try {
    await update(ref(database), updates);
    console.log('Category counts reset successfully');
  } catch (error) {
    console.error('Error resetting category counts:', error);
  }
};

function Index() {
  const [UserId, setUserId] = useState<string>('U001');
  const [Category, setCategory] = useState<string>('Category_1');
  const [currentWeek, setCurrentWeek] = useState(1); // Default to week 1
  const [recommendation, setRecommendation] = useState("");
  const [link, setLink] = useState("");
  const [formData, setFormData] = useState({
    depression_level: "",
    mood_level: "",
    gender: "",
    age: "",
    category: "",
  });

  const depressionLevels = [
    "Minimal",
    "Mild",
    "Moderate",
    "Moderately Severe",
    "Severe",
  ];
  const moodLevels = [
    "Anxious",
    "Calm",
    "Confused",
    "Happy",
    "Neutral",
    "Sad",
    "Scared",
  ];
  const genders = ["Male", "Female", "Prefer not to say"];
  const categories = [
    "Expressive Arts Therapy",
    "Mindfulness and Relaxation Techniques",
    "Motivational Videos",
    "Movies and Drama",
    "Physical Health Resource",
    "Podcasts",
    "Professional Help",
    "Social Connection Strategies",
  ];

  useEffect(() => {
    const storedWeek = getStoredWeek();
    setCurrentWeek(storedWeek);
  }, []);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { mood_level, gender, age, category } = formData;
    var mood_score;

    var category_1 = 0;
    var category_2 = 0;
    var category_3 = 0;
    var category_4 = 0;
    var category_5 = 0;
    var category_6 = 0;
    var category_7 = 0;
    var category_8 = 0;

    var RecomendationCategory;

    //chech the mood level
    if (mood_level == 'Anxious') {
      mood_score = 1;
    } else if (mood_level == 'Clam') {
      mood_score = 5;
    } else if (mood_level == 'Confused') {
      mood_score = 3;
    } else if (mood_level == 'Happy') {
      mood_score = 6;
    } else if (mood_level == 'Netural') {
      mood_score = 4;
    } else if (mood_level == 'Sad') {
      mood_score = 0;
    } else if (mood_level == 'Scared') {
      mood_score = 2;
    }

    //check the category
    if (category == 'Expressive Arts Therapy') {
      category_1++;
      RecomendationCategory = category_1;
      setCategory('Category_1')
    } else if (category == 'Mindfulness and Relaxation Techniques') {
      category_2++;
      RecomendationCategory = category_2;
      setCategory('Category_2')
    } else if (category == 'Motivational Videos') {
      category_3++;
      RecomendationCategory = category_3;
      setCategory('Category_3')
    } else if (category == 'Movies and Drama') {
      category_4++;
      RecomendationCategory = category_4;
      setCategory('Category_4')
    } else if (category == 'Physical Health Resource') {
      category_5++;
      RecomendationCategory = category_5;
      setCategory('Category_5')
    } else if (category == 'Podcasts') {
      category_6++;
      RecomendationCategory = category_6;
      setCategory('Category_6')
    } else if (category == 'Professional Help') {
      category_7++;
      RecomendationCategory = category_7;
      setCategory('Category_7')
    } else if (category == 'Social Connection Strategies') {
      category_8++;
      RecomendationCategory = category_8;
      setCategory('Category_8')
    }

    try {
      const response = await fetch("https://mindphix-deploy.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      const data = await response.json();
      const [recommendationText, linkText] = data.recommendation.split(" - ");
      setRecommendation(recommendationText);
      setLink(linkText);
    } catch (error) {
      console.error("Error:", error);
    }

    // save the mood level to the database
    try {
      const userId = UserId;
      const category = Category;
      const newMoodLevelRef = ref(database, `users/${userId}/Progress/Mood_Shift/`);
      const moodLevelData = {
        [`Week${currentWeek}`]: mood_score
      };

      await update(newMoodLevelRef, moodLevelData);
      console.log('Mood level saved successfully');

      const newCategoryRef = ref(database, `users/${userId}/Progress/Recomendation_Analytics/${category}/`);
      const existingCategoryRef = ref(database, `users/${userId}/Progress/Recomendation_Analytics/${category}/Count`);
      let existingCount = (await get(existingCategoryRef)).val() || 0;

      // Reset the count if the current week is 1
      if (currentWeek === 1) {
        existingCount = 0;
      }

      const categoryData = {
        Count: existingCount + RecomendationCategory
      };

      await update(newCategoryRef, categoryData);
      console.log('Category count updated successfully');

      // Check if one week has passed since the last submission date
      const lastSubmissionDate = getLastSubmissionDate();
      const shouldIncrementWeek = !lastSubmissionDate || hasOneWeekPassed(lastSubmissionDate);

      // Update the current week and last submission date
      setCurrentWeek((prevWeek) => {
        const newWeek = shouldIncrementWeek ? (prevWeek === 7 ? 1 : prevWeek + 1) : prevWeek;

        // Reset the category counts if the new week is 1
        if (newWeek === 1) {
          resetCategoryCounts(userId, categories);
        }

        setStoredWeek(newWeek, prevWeek);
        setLastSubmissionDate(new Date());
        return newWeek;
      });
    } catch (error) {
      console.error('Error saving mood level:', error);
    }
  };


  return (
    <BaseLayout>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-md w-[550px] p-8 md:p-10 lg:p-16 ml-60 md:ml-10 lg:ml-60">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="depression_level"
                className="block font-bold text-sm md:text-sm"
              >
                Depression Level:
              </label>
              <select
                id="depression_level"
                name="depression_level"
                value={formData.depression_level}
                onChange={handleChange}
                className="mt-2 block w-full bg-gray-200 rounded px-2 py-1 text-sm md:text-sm"
              >
                <option value="">Select Depression Level</option>
                {depressionLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="mood_level"
                className="block font-bold text-sm md:text-sm"
              >
                Mood Level:
              </label>
              <select
                id="mood_level"
                name="mood_level"
                value={formData.mood_level}
                onChange={handleChange}
                className="mt-2 block w-full bg-gray-200 rounded px-2 py-1 text-sm md:text-sm"
              >
                <option value="">Select Current Mood</option>
                {moodLevels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block font-bold text-sm md:text-sm"
              >
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-2 block w-full bg-gray-200 rounded px-2 py-1 text-sm md:text-sm"
              >
                <option value="">Select Gender</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="age"
                className="block font-bold text-sm md:text-sm"
              >
                Age:
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="mt-2 block w-full bg-gray-200 rounded px-2 py-1 text-sm md:text-sm"
                min={1}
                max={65}
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block font-bold text-sm md:text-sm"
              >
                Category:
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-2 block w-full bg-gray-200 rounded px-2 py-1 text-sm md:text-sm"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="block mx-auto mt-20 px-6 py-2 bg-green-600 text-white rounded shadow-md hover:bg-green-700 transition-colors duration-300 text-sm md:text-sm"
            >
              Get Recommendation
            </button>
          </form>

          <div className="mt-10">
            <p className="font-bold text-sm md:text-sm mb-5">
              Recommendation: {recommendation}
            </p>
            <p className="font-bold text-sm md:text-sm mt-2">
              Link:{" "}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-800 transition-colors duration-300"
              >
                {link}
              </a>
            </p>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Index;