import React, { useState, useEffect } from 'react';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch feedback from backend
  const fetchFeedback = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/feedback');
      if (response.ok) {
        const data = await response.json();
        setFeedbackList(data);
      }
    } catch (error) {
      console.error('Error fetching feedback:', error);
    } finally {
      setLoading(false);
    }
  };

  // Load feedback on component mount
  useEffect(() => {
    fetchFeedback();
  }, []);

  // Handle feedback submission
  const handleFeedbackSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        // Add new feedback to the list
        setFeedbackList([...feedbackList, result.feedback]);
        return true;
      } else {
        const error = await response.json();
        console.error('Error:', error);
        return false;
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      return false;
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header className="app-header">
          <h1>📝 Feedback Form</h1>
          <p>Share your feedback with us</p>
        </header>

        <div className="app-content">
          <FeedbackForm onSubmit={handleFeedbackSubmit} />
          <FeedbackList feedbacks={feedbackList} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
