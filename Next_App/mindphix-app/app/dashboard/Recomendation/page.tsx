"use client";
import React, { useState } from "react";
import BaseLayout from "../BaseLayout";
import "../../styles/recommendations.css";

function Index() {
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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8080/predict", {
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
