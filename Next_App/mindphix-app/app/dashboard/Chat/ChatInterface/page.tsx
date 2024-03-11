"use client";
import React, { useState } from 'react';

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Depression Level:
          <input
            type="text"
            name="depression_level"
            value={formData.depression_level}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Mood Level:
          <input
            type="text"
            name="mood_level"
            value={formData.mood_level}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          />
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
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Get Recommendation</button>
      </form>
      <p>Recommendation: {recommendation}</p>
      <p>
        Link: <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
      </p>
    </div>
  );
}

export default Index;