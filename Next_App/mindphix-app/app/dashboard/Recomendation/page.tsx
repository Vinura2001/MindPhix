"use client";
import React, { useState } from 'react';
import BaseLayout from "../BaseLayout";

function Index() {
  const [recommendation, setRecommendation] = useState('');
  const [link, setLink] = useState('');
  const [formData, setFormData] = useState({
    depression_level: '',
    mood_level: '',
    gender: '',
    age: '',
    category: '',
  });

  const depressionLevels = ['Minimal', 'Mild', 'Moderate' , 'Moderately Severe' , 'Severe'];
  const moodLevels = ['Anxious' , 'Calm' , 'Confused' , 'Happy', 'Neutral' , 'Sad' , 'Scared'];
  const genders = ['Male', 'Female', 'Prefer not to say'];
  const categories = ['Expressive Arts Therapy' , 'Mindfulness and Relaxation Techniques' , 'Motivational Videos' , 'Movies and Drama' , 'Physical Health Resource' , 'Podcasts' , 'Professional Help' , 'Social Connection Strategies'];

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8080/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData).toString(),
      });

      const data = await response.json();
      const [recommendationText, linkText] = data.recommendation.split(' - ');
      setRecommendation(recommendationText);
      setLink(linkText);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <BaseLayout>
      <div className='form_container'>
        <form onSubmit={handleSubmit}>
          <label>
            Depression Level:
            <select
              name="depression_level"
              value={formData.depression_level}
              onChange={handleChange}
            >
              <option value="">Select depression level</option>
              {depressionLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Mood Level:
            <select
              name="mood_level"
              value={formData.mood_level}
              onChange={handleChange}
            >
              <option value="">Select mood level</option>
              {moodLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <br />
          <button className='RecomendationButtion' type="submit">Get Recommendation</button>
        </form>
        <p>Recommendation: {recommendation}</p>
        <p>
          Link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
        </p>
      </div>
    </BaseLayout>
  );
}

export default Index;